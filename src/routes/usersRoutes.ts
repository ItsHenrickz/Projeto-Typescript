import { Router } from "express";
import * as usersController from "../controllers/ursersController";
import { validate } from "../middlewares/validate";
import { z } from "zod";

const router = Router();

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get("/", usersController.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: number }
 *     responses:
 *       200: { description: Usuário encontrado }
 *       404: { description: Não encontrado }
 */
router.get("/:id", usersController.getUserById);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/User' }
 *     responses:
 *       201: { description: Usuário criado }
 */
router.post("/", validate(createUserSchema), usersController.createUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: number }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/User' }
 *     responses:
 *       200: { description: Usuário atualizado }
 */
router.put("/:id", validate(createUserSchema), usersController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deleta um usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: number }
 *     responses:
 *       204: { description: Usuário deletado }
 */
router.delete("/:id", usersController.deleteUser);


export default router;
