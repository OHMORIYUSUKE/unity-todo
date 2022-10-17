import { PrismaClient, Todo } from "@prisma/client";

export class GetTodo {
  public static async getById(
    prisma: PrismaClient,
    id: number
  ): Promise<Todo | null> {
    const todo = await prisma.todo.findUnique({
      where: {
        id: id,
      },
    });
    return todo;
  }

  public static async getAll(prisma: PrismaClient): Promise<Todo[]> {
    const todo = await prisma.todo.findMany();
    return todo;
  }
}
