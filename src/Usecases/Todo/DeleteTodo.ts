import { PrismaClient } from "@prisma/client";

export class DeleteTodo {
  public static async delete(prisma: PrismaClient, id: number): Promise<void> {
    try {
      const todo = await prisma.todo.delete({
        where: {
          id: id,
        },
      });
      console.log(todo);
      return;
    } catch (e) {
      throw new Error("can not delete");
    }
  }
}
