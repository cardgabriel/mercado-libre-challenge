import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/todos", (req, res) => {
  setTimeout(() => {
    res.json([
      { id: 1, title: "Tarea de ejemplo 1", completed: false },
      { id: 2, title: "Tarea de ejemplo 2", completed: true },
      { id: 23, title: "Tarea de ejemplo 22", completed: true },
    ]);
  }, 2000); 
});

app.listen(PORT, () => {
  console.log(`> Server running on port ${PORT}`);
});
