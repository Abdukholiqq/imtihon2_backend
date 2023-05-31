import SwaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { Router } from "express";
// import { PORT } from "./config.js";

const router = Router();

const swaggerDocs = swaggerJSDoc({
  swaggerDefinition: {
    openapi: "3.0.0",
    servers: [
      {
        url: `http://localhost:5000`,
        description: "Vebinars site",
      },
    ],
    info: {
      title: "Vebinars site",
      description: "Vebinars site",
    },
    components: {
      securitySchemes: {
        Bearer: {
          type: "apiKey",
          name: "token",
          in: "header",
        },
      },
    },
  },
  apis: [
    `${process.cwd()}/src/swagger/components/*.yaml`,
    `${process.cwd()}/src/swagger/docs/*.yaml`,
  ],
});

router.use("/", SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));
export default router;
