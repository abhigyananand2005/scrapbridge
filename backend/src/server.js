import app from "./app.js";
import { connectDatabase } from "./config/database.js";
import { env } from "./config/env.js";

let server;

const startServer = async () => {
  try {
    await connectDatabase();

    server = app.listen(env.port, () => {
      console.log(
        `[server] ScrapBridge API running on http://localhost:${env.port}`,
      );
    });
  } catch (error) {
    console.error(`[server] Startup failed: ${error.message}`);
    process.exit(1);
  }
};

const shutdown = (signal) => {
  console.log(`\n[server] ${signal} received. Shutting down...`);

  if (!server) {
    process.exit(0);
  }

  server.close(() => {
    console.log("[server] HTTP server closed.");
    process.exit(0);
  });
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

process.on("unhandledRejection", (error) => {
  console.error("[server] Unhandled rejection:", error);
  shutdown("unhandledRejection");
});

startServer();
