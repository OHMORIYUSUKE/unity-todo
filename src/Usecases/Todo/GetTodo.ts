import { PrismaClient, Todo } from "@prisma/client";

export class GetTodo {
  public static async getById(
    prisma: PrismaClient,
    id: number
  ): Promise<Todo | null> {
    try {
      const todo = await prisma.todo.findUnique({
        where: {
          id: id,
        },
      });
      return todo;
    } catch (e) {
      throw new Error("can not get Todo");
    }
  }

  public static async getAll(prisma: PrismaClient): Promise<Todo[]> {
    try {
      const todo = await prisma.todo.findMany();
      return todo;
    } catch (e) {
      throw new Error("can not get Todo");
    }
  }
}
