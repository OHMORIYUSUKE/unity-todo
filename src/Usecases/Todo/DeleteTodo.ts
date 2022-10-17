import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DeleteTodo {
  private static prisma: PrismaClient;
  constructor() {}

  public static init() {
    this.prisma = new PrismaClient();
    return this;
  }

  public static async delete(id: number): Promise<void> {
    const todo = await this.prisma.todo.delete({
      where: {
        id: id,
      },
    });
    console.log(todo);
    return;
  }
}
