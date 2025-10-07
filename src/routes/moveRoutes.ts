import { Router } from "express";
import * as movesController from "../controllers/movesController";
import { validate } from "../middlewares/validate";
import { z } from "zod";

const router = Router();

const createMoveSchema = z.object({
  gameId: z.string(),
  playerId: z.string(),
  move: z.string(),
});

/**
 * @swagger
 * /moves:
 *   get:
 *     summary: Lista todos os movimentos
 *     responses:
 *       200: { description: Lista de movimentos }
 */
router.get("/", movesController.getAllMoves);

/**
 * @swagger
 * /moves/{id}:
 *   get:
 *     summary: Busca um movimento pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: number }
 *     responses:
 *       200: { description: Movimento encontrado }
 *       404: { description: Não encontrado }
 */
router.get("/:id", movesController.getMoveById);

/**
 * @swagger
 * /moves:
 *   post:
 *     summary: Cria um movimento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Move' }
 *     responses:
 *       201: { description: Movimento criado }
 */
router.post("/", validate(createMoveSchema), movesController.createMove);

/**
 * @swagger
 * /moves/{id}:
 *   put:
 *     summary: Atualiza um movimento
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: number }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Move' }
 *     responses:
 *       200: { description: Movimento atualizado }
 */
router.put("/:id", validate(createMoveSchema), movesController.updateMove);

/**
 * @swagger
 * /moves/{id}:
 *   delete:
 *     summary: Deleta um movimento
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: number }
 *     responses:
 *       204: { description: Movimento deletado }
 */
router.delete("/:id", movesController.deleteMove);


export default router;
