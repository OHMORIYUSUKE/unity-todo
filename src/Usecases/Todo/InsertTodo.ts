import { PrismaClient } from "@prisma/client";

export class InsertTodo {
  private static prisma: PrismaClient;
  constructor() {}

  public static init() {
    this.prisma = new PrismaClient();
    return this;
  }

  public static async insert(message: string): Promise<void> {
    const todo = await this.prisma.todo.create({
      data: {
        message: message,
      },
    });
    console.log(todo);
    return;
  }
}
