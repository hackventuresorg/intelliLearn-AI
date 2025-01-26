import { z } from "zod";

export const goalSchema = z.object({
  title: z.string().min(3, "Topic must be at least 3 characters"),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  completeBy: z.coerce.date().refine((date) => date > new Date(), {
    message: "Completion date must be in the future",
  }),
});
export type GoalSchema = z.infer<typeof goalSchema>;
