"use server";

import { prisma } from "@/lib/db";
import { generateStepsPrompt, INTELLILEARN_SYSTEM_PROMPT } from "@/lib/prompt";
import { GoalSchema } from "@/schema/goal";
import { stepsSchema } from "@/schema/step";
import { openai } from "@ai-sdk/openai";
import { auth } from "@clerk/nextjs/server";
import { generateObject } from "ai";
import { redirect } from "next/navigation";

export async function createNewGoal(goal: GoalSchema) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const steps = await generateStepsWithAi(goal);

  const createdGoal = await prisma.goal.create({
    data: {
      title: goal.title,
      description: goal.description,
      deadline: goal.completeBy,
      createdBy: {
        connect: {
          clerkId: userId,
        },
      },
      steps: {
        createMany: {
          data: steps.map((step, index) => ({ ...step, order: index * 10 })),
        },
      },
    },
  });

  return { id: createdGoal.id };
}

export async function getUserGoals() {
  try {
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthozied");
    }

    const goals = await prisma.goal.findMany({
      where: { createdBy: { clerkId: userId } },
    });

    return goals;
  } catch {
    throw redirect("/sign-in");
  }
}

export async function generateStepsWithAi(goal: GoalSchema) {
  const { object } = await generateObject({
    model: openai("gpt-4-turbo"),
    output: "array",
    schema: stepsSchema,
    system: INTELLILEARN_SYSTEM_PROMPT,
    prompt: generateStepsPrompt({
      title: goal.title,
      description: goal.description,
      deadline: goal.completeBy.toLocaleString(),
    }),
  });

  return object;
}
