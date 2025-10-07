import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

/**
 * Middleware para validação usando Zod
 * @param schema - o schema Zod que será usado para validar o body da requisição
 */
export const validate = (schema: ZodSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body); // valida o body
      next(); // segue para o controller
    } catch (err: any) {
      return res.status(400).json({ error: err.errors ? err.errors : err.message });
    }
  };
};
