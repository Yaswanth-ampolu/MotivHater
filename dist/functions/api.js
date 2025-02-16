// netlify/functions/api.ts
import express from "express";
import serverless from "serverless-http";

// server/routes.ts
import { createServer } from "http";
async function registerRoutes(app2) {
  const httpServer = createServer(app2);
  return httpServer;
}

// netlify/functions/api.ts
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
registerRoutes(app).then((server) => {
  console.log("Routes registered successfully");
}).catch((error) => {
  console.error("Failed to register routes:", error);
});
var handler = async (event, context) => {
  const handler2 = serverless(app);
  const result = await handler2(event, context);
  return {
    ...result,
    statusCode: result.statusCode || 200
  };
};
export {
  handler
};
