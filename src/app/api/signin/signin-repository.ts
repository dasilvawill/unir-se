import prisma from "@/app/database/prismaClient";

export async function getAccountByEmail(email: string) {
  const account = await prisma.user.findFirst({
    where: {
      email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
    },
  });

  return account;
}
