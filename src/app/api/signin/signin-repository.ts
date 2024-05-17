import prisma from "@/app/(unauthenticated)/database/prismaClient";

export async function getAccountByEmailRepository(email: string) {
  const account = await prisma.account.findFirst({
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
