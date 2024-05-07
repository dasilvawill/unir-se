import { createRepository } from "@/app/api/signup/signup-repository";

export async function createService(
  name: string,
  email: string,
  password: string
) {
  // verificar se email já existe, se não existir criar conta. Senão retornar conta já existente
  const dataSignup = await createRepository(name, email, password);
  // delete dataSignup.password;
  return dataSignup;
}
