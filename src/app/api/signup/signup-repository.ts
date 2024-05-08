import prisma from "@/app/database/prismaClient";

export async function createRepository(
  name: string,
  email: string,
  password: string
) {
  const userCreated = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
    select: {
      name: true,
      email: true,
    },
  });

  return userCreated;
}

export async function getRepository(email: string) {
  const emailExist = await prisma.user.findFirst({
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
