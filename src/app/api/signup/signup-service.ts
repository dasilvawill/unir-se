import {
  createAccountRepository,
  getAccountByEmailRepository,
} from "@/app/api/signup/signup-repository";
import { hash } from "bcryptjs";
import { authenticateService } from "../auth-service";

export async function createAccountService(
  name: string,
  email: string,
  password: string,
) {
  const existEmail = await getAccountByEmailService(email);

  if (existEmail) {
    throw new Error("error_account_already_exists");
  }

  const passwordHash = await hash(password, 8);

  const dataSignup = await createAccountRepository(name, email, passwordHash);

  if (dataSignup.id) {
    return await authenticateService(email, password);
  }

  throw new Error("authentication_error");
}

export async function getAccountByEmailService(email: string) {
  return await getAccountByEmailRepository(email);
}
