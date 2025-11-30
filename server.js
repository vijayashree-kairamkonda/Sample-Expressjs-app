import express from "express";
import { connectDB } from "./config/db.js";
import { config as CONFIG } from "./config/env.js";

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(CONFIG.port, () => {
  console.log(
    `Server running in ${CONFIG.nodeEnv} mode on port ${CONFIG.port} || http://localhost:${CONFIG.port}`
  );
});
