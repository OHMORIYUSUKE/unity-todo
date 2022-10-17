import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.todo.create({
    data: {
      message: "Testメッセージ",
    },
  });
  console.log(user); // { id: 1, name: 'Alice' }
}

main()
  .catch((e) => {
    throw new Error(e);
  })
  .finally(async () => {
    // データベースとのコネクションを切る
    await prisma.$disconnect();
  });
