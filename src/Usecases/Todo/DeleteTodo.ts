import { PrismaClient } from "@prisma/client";

export class DeleteTodo {
  public static async delete(prisma: PrismaClient, id: number): Promise<void> {
    const todo = await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    console.log(todo);
    return;
  }
}
