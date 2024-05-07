import { userSchema } from "@/app/api/signup/schema";
import prisma from "@/app/database/prismaClient";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, password, passwordConfirmation } =
      userSchema.parse(data);
    console.log(name, email, password, passwordConfirmation);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return Response.json(user);
  } catch (error) {
    return Response.json({ error: error }, { status: 400 });
  }
}

/* metodo temporário */
export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  return Response.json(users);
}
