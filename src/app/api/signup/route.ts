import { Errors } from "@/app/api/errors/errors";
import { accountSchema } from "@/app/api/signup/schema";
import { createAccountService } from "@/app/api/signup/signup-service";
import prisma from "@/app/(unauthenticated)/database/prismaClient";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email } = accountSchema.parse(data);

    const token = await createAccountService(name, email);

    return Response.json({ token });
  } catch (error: any) {
    console.log(error);
    if (error instanceof ZodError) {
      return Response.json({ error: error.issues }, { status: 400 });
    }
    const typeError = Errors(error.message);
    return Response.json(
      { error: typeError?.message },
      { status: typeError?.status },
    );
  }
}

/* temporary function */
export async function GET(request: Request) {
  const users = await prisma.account.findMany({
    select: {
      name: true,
      email: true,
      password: true,
    },
  });
  return Response.json(users);
}
