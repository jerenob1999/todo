import { z } from "zod";

export const taskSchema = z.object({
  is_completed: z.boolean(),
  title: z.string(),
  description: z.string(),
  userId: z.number(),
});

export type TaskDTO = z.infer<typeof taskSchema>;
