import prisma from "@/app/(unauthenticated)/database/prismaClient";

export async function changePasswordRepository(
  accountId: string,
  password: string,
) {
  const updateAccount = await prisma.account.update({
    where: {
      id: accountId,
    },
    data: {
      password,
    },
  });

  return updateAccount;
}
