import { userSchema } from "@/app/api/signup/schema";
import { createService } from "./signup-service";
import prisma from "@/app/database/prismaClient";
import { Errors } from "../errors/errors";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, password, passwordConfirmation } =
      userSchema.parse(data);

    const user = await createService(name, email, password);

    return Response.json({ user });
  } catch (error: any) {
    const typeError = Errors(error.message);
    return Response.json(
      { error: typeError?.message },
      { status: typeError?.status }
    );
  }
}

/* metodo temporário */
export async function GET(request: Request) {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
      password: true,
    },
  });
  return Response.json(users);
}
