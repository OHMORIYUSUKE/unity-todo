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
  try {
    const todolist = await GetTodo.getAll(prisma);
    return res.json(todolist);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: {
        message: "Internal server error.",
      },
    });
  }
});

app.get("/todo/:id", async (req, res) => {
  try {
    const todo = await GetTodo.getById(prisma, Number(req.params.id));
    if (todo === null) {
      return res.status(404).json({
        error: {
          message: "Not the todo found.",
        },
      });
    }
    return res.json(todo);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: {
        message: "Internal server error.",
      },
    });
  }
});

app.delete("/todo", async (req, res) => {
  try {
    const todo = await GetTodo.getById(prisma, Number(req.body.id));
    if (todo === null) {
      return res.status(404).json({
        error: {
          message: "Not the todo found.",
        },
      });
    }
    await DeleteTodo.delete(prisma, Number(req.body.id));
    return res.json({ message: "deleted" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: {
        message: "Internal server error.",
      },
    });
  }
});

app.post("/todo", async (req, res) => {
  try {
    await InsertTodo.insert(prisma, req.body.message);
    return res.json({ message: "inserted" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: {
        message: "Internal server error.",
      },
    });
  }
});

export default app;
