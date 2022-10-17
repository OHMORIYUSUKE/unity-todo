import { PrismaClient, Todo } from "@prisma/client";

export class GetTodo {
  private static prisma: PrismaClient;
  constructor() {}

  public static init(): GetTodo {
    this.prisma = new PrismaClient();
    return this;
  }

  public static async getById(id: number): Promise<Todo | null> {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id: id,
      },
    });
    return todo;
  }

  public static async getAll(): Promise<Todo[]> {
    const todo = await this.prisma.todo.findMany();
    return todo;
  }
}
