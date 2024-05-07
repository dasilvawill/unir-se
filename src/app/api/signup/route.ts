import { userSchema } from "@/app/api/signup/schema";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, password, passwordConfirmation } =
      userSchema.parse(data);
    console.log(name, email, password, passwordConfirmation);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error }, { status: 400 });
  }
}
