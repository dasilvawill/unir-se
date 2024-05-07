import prisma from "@/app/database/prismaClient";

export async function createRepository(
  name: string,
  email: string,
  password: string
) {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return user;
}
