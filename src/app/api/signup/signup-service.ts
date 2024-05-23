import {
  createAccountRepository,
  getAccountByEmailRepository,
} from "@/app/api/signup/signup-repository";

export async function createAccountService(name: string, email: string) {
  const existEmail = await getAccountByEmailService(email);

  if (existEmail) {
    throw new Error("error_account_already_exists");
  }

  return await createAccountRepository(name, email);
}

export async function getAccountByEmailService(email: string) {
  return await getAccountByEmailRepository(email);
}
