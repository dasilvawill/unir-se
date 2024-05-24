import { hash } from "bcryptjs";
import { changePasswordRepository } from "./changePassword.repository";

export async function changePasswordService(
  accountId: string,
  password: string,
) {
  const passwordHash = await hash(password, 8);
  return await changePasswordRepository(accountId, passwordHash);
}
