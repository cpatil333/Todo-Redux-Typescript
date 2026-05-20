import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectedDatabase from "./config/db";
import todoRoutes from "./routes/todo.routes";
import userRoutes from "./routes/user.routes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/todos", todoRoutes);
app.use("/api/v1/user", userRoutes);

app.use((req, res) => {
  return res.status(404).json({ error: "Route not found" })
})

//to connect with database
connectedDatabase();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
