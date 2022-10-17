import express from "express";
import { PrismaClient } from "@prisma/client";
import { GetTodo } from "./Usecases/Todo/GetTodo";
import { DeleteTodo } from "./Usecases/Todo/DeleteTodo";
import { InsertTodo } from "./Usecases/Todo/InsertTodo";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/json" });
  res.end("hello express\n");
});

app.get("/todo", async (req, res) => {
  const todolist = await GetTodo.getAll(prisma);
  res.json(todolist);
});

app.get("/todo/:id", async (req, res) => {
  const todo = await GetTodo.getById(prisma, Number(req.params.id));
  res.json(todo);
});

app.delete("/todo", async (req, res) => {
  DeleteTodo.delete(prisma, Number(req.body.id));
});

app.post("/todo", async (req, res) => {
  InsertTodo.insert(prisma, req.body.message);
});

export default app;
