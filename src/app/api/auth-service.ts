import { getAccountByEmailRepository } from "@/app/(unauthenticated)/api/signin/signin-repository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export async function authenticateService(email: string, password: string) {
  const account = await getAccountByEmailRepository(email);

  if (!account) {
    throw new Error("authentication_error");
  }

  const passwordMatch = await compare(password, account.password);

  if (!passwordMatch) {
    throw new Error("authentication_error");
  }

  const token = sign(
    { name: account.name, email: account.email },
    String(process.env.JWT_KEY),
    {
      subject: String(account.id),
      expiresIn: "60s",
    },
  );

  return token;
}
