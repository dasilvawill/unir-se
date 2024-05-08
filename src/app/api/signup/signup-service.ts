import {
  createRepository,
  getRepository,
} from "@/app/api/signup/signup-repository";
import { hash } from "bcryptjs";

export async function createService(
  name: string,
  email: string,
  password: string
) {
  const existEmail = await getAccountByEmail(email);

  if (existEmail) {
    throw new Error("error_account_already_exists");
  }

  const passwordHash = await hash(password, 8);

  const dataSignup = await createRepository(name, email, passwordHash);
  return dataSignup;
}

export async function getAccountByEmail(email: string) {
  return await getRepository(email);
}
