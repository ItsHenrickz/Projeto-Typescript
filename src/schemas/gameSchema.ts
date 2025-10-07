import { z } from "zod";

export const createGameSchema = z.object({
  title: z.string().min(1),
  userId: z.number(),
});
