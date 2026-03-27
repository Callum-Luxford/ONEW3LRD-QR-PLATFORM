import express from "express";
import cors from "cors";

const app = express();

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

export default app;
