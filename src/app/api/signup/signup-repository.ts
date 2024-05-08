import prisma from "@/app/database/prismaClient";

export async function createAccountRepository(
  name: string,
  email: string,
  password: string
) {
  const userCreated = await prisma.account.create({
    data: {
      name,
      email,
      password,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return userCreated;
}

export async function getAccountByEmailRepository(email: string) {
  const emailExist = await prisma.account.findFirst({
    where: {
      email,
    },
    select: {
      name: true,
      email: true,
    },
  });

  return emailExist;
}
