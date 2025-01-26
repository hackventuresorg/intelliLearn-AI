import { generateStepsPrompt, INTELLILEARN_SYSTEM_PROMPT } from "@/lib/prompt";
import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

const stepsSchema = z.object({
  title: z
    .string()
    .describe("The title for the step. Should be self-explainatory"),
  description: z.string().describe("A little brief about the step."),
  completeBy: z.coerce.date().describe("Deadline date for the step."),
  quote: z
    .string()
    .describe("A quote/motivational tip/fun-fact/mixture about the step."),
});

export async function generateStepsWithAi() {
  const { object } = await generateObject({
    model: openai("gpt-4-turbo"),
    output: "array",
    schema: stepsSchema,
    system: INTELLILEARN_SYSTEM_PROMPT,
    prompt: generateStepsPrompt({
      title: "Complete Chemistry syllabus in 1 month.",
      description:
        "I struggle with Organic Chemistry and can study for 2-3 hours daily.",
      deadline: "24-02-2024",
    }),
  });

  return object;
}
