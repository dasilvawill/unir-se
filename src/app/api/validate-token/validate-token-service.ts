import { verify } from "jsonwebtoken";

export async function validateTokenService(token: string) {
  try {
    verify(token, String(process.env.JWT_KEY));
    return true;
  } catch (error) {
    return false;
  }
}
