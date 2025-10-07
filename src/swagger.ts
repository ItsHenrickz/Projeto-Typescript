// src/swagger.ts
import swaggerJsdoc from "swagger-jsdoc";

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pokémon Memory API",
      version: "1.0.0",
      description: "API de Pokémon Memory Game",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
    components: {
      schemas: {
        Game: {
          type: "object",
          properties: {
            id: { type: "number", example: 1 },
            title: { type: "string", example: "Pokémon Match" },
          },
          required: ["title"],
        },
        Move: {
          type: "object",
          properties: {
            id: { type: "number", example: 1 },
            move: { type: "string", example: "Pikachu" },
            gameId: { type: "number", example: 1 },
          },
          required: ["move", "gameId"],
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"], 
});

export default swaggerSpec;
