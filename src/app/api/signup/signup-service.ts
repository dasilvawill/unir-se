import {
  createAccountRepository,
  getAccountByEmailRepository,
} from "@/app/api/signup/signup-repository";
import { hash } from "bcryptjs";

export async function createAccountService(
  name: string,
  email: string,
  password: string
) {
  const existEmail = await getAccountByEmailService(email);

  if (existEmail) {
    throw new Error("error_account_already_exists");
  }

  const passwordHash = await hash(password, 8);

  const dataSignup = await createAccountRepository(name, email, passwordHash);
  return dataSignup;
}

export async function getAccountByEmailService(email: string) {
  return await getAccountByEmailRepository(email);
}
