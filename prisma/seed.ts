import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const one = await prisma.todo.create({
    data: {
      message: "Testメッセージ1",
    },
  });

  const two = await prisma.todo.create({
    data: {
      message: "Testメッセージ2",
    },
  });

  const three = await prisma.todo.create({
    data: {
      message: "Testメッセージ3",
    },
  });
  console.log([one, two, three]);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
