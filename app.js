import express from "express";
import pool from "./config/db.js";
import cors from "cors";
import githubRoutes from "./routes/githubTask.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/github", githubRoutes);

export default app;
