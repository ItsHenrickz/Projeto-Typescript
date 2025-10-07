import { z } from "zod";

export const createMoveSchema = z.object({
  gameId: z.number(),
  move: z.string().min(1),
});
