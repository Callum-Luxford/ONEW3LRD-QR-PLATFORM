import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/join", (req, res) => {
  res.json({
    success: true,
    message: "Prototype only. Form submission is not connected yet.",
    payload: req.body,
  });
});

/*
  Serve the built React app
  server/src/app.js -> ../client/dist
  so we go up two levels from src
*/
const clientDistPath = path.join(__dirname, "../../client/dist");

app.use(express.static(clientDistPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});

export default app;
