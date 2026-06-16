import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5015

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "AI Academy API is running",
    version: "1.0.0",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 AI Academy API running on http://localhost:${PORT}`);
});

export default app;
