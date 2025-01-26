import { z } from "zod";

export const stepsSchema = z.object({
  title: z
    .string()
    .describe("The title for the step. Should be self-explainatory"),
  description: z.string().describe("A little brief about the step."),
  completeBy: z.coerce.date().describe("Deadline date for the step."),
  quote: z
    .string()
    .describe("A quote/motivational tip/fun-fact/mixture about the step."),
});
