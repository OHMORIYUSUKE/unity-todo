import { PrismaClient } from "@prisma/client";

export class InsertTodo {
  public static async insert(
    prisma: PrismaClient,
    message: string
  ): Promise<void> {
    const todo = await prisma.todo.create({
      data: {
        message: message,
      },
    });
    console.log(todo);
    return;
  }
}
