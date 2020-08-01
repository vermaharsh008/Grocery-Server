const express = require("express");
const router = express.Router();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger set up
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation for Ice-Box",
      version: "1.0.0",
      description:
        "It is an API used by an android app called Ice-Box to retrieve digital receipts from grocery stores",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/"
      },
      contact: {
        name: "Swagger",
        url: "https://swagger.io",
        email: "Info@SmartBear.com"
      }
    },
    securityDefinitions: {
      bearerAuth: {
        type: "http",
        name: "Authorization",
        scheme: "bearer",
        bearerFormat: "JWT",
        in: "header"
      }
    },
    servers: [
      {
        url: "http://localhost:8000/api/docs"
      }
    ]
  },
  apis: ["./Models/*.js", "./routes/*.js"]
};

const specs = swaggerJsdoc(options);
router.use("/docs", swaggerUi.serve);
router.get(
  "/docs",
  swaggerUi.setup(specs, {
    explorer: true
  })
);

module.exports = router;
