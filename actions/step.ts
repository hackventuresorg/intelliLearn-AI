"use server";

import { prisma } from "@/lib/db";
import {
  generateStepContentUserPrompt,
  STEP_CONTENT_SYSTEM_PROMPT,
} from "@/lib/prompt";
import { openai } from "@ai-sdk/openai";
import { auth } from "@clerk/nextjs/server";
import { Step } from "@prisma/client";
import { generateText } from "ai";
import { redirect } from "next/navigation";

export const maxDutation = 60;

export async function getStepById(stepId: string) {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    let step = await prisma.step.findFirst({
      where: { id: stepId, goal: { createdBy: { clerkId: userId } } },
      include: { goal: { select: { title: true } } },
    });
    if (!step) {
      return null;
    }

    /** If the content of step is not generated yet, we have to generate it now */
    if (!step?.content) {
      const stepContent = await generateStepContent({
        goalTitle: step.goal.title,
        title: step?.title,
        description: step?.description,
      });
      step = await prisma.step.update({
        where: { id: step.id },
        data: { content: stepContent },
        include: { goal: { select: { title: true } } },
      });
    }

    return step;
  } catch {
    throw redirect("/sign-up");
  }
}

async function generateStepContent(
  props: Pick<Step, "title" | "description"> & { goalTitle: string }
) {
  const { text } = await generateText({
    model: openai("gpt-4-turbo"),
    system: STEP_CONTENT_SYSTEM_PROMPT,
    prompt: generateStepContentUserPrompt(props),
  });
  return text;
}
