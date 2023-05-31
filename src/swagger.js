// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerUI from "swagger-ui-express";

// import { Router } from "express";
// import PORT from "./utils/config.js";
// import swaggerJSDoc from "swagger-jsdoc";
// import router from "./router/post.router.js";

// const swaggerDocs = swaggerJSDoc({
//   swaggerDefinition: {
//     openapi: "3.0.0",
//     servers: [
//       {
//         url: `http://localhost:${PORT}`,
//         description: "Vebinars site",
//       },
//     ],
//     info: {
//       title: "Vebinar site",
//       description: "Vebinar site",
//     },
//     components: {
//       securitySchemas: {
//         Bearer: {
//           type: "apiKey",
//           name: "token",
//           in: "header",
//         },
//       },
//     },
//   },
//   apis: [
//     `${process.cwd()}/src/swagger/components/*.yaml`,
//     `${process.cwd()}/src/swagger/docs/*.yaml`,
//   ],
// });

// router.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// export default router;
