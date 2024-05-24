import {
  createAccountRepository,
  getAccountByEmailRepository,
} from "@/app/api/signup/signup-repository";
import { sign } from "jsonwebtoken";
import { sendEmail } from "../mail/mail.service";

export async function createAccountService(name: string, email: string) {
  const existEmail = await getAccountByEmailService(email);

  if (existEmail) {
    throw new Error("error_account_already_exists");
  }

  const accountData = await createAccountRepository(name, email);

  const token = sign(
    { id: accountData.id, name: name },
    String(process.env.JWT_KEY),
    {
      subject: String(accountData.id),
      expiresIn: "24h",
    },
  );

  sendEmail(name, email, token);

  return accountData;
}

export async function getAccountByEmailService(email: string) {
  return await getAccountByEmailRepository(email);
}
