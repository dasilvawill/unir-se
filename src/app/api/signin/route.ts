import { Errors } from "../errors/errors";
import { signinSchema } from "./schema";
import { authenticate } from "./signin-service";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password } = signinSchema.parse(data);

    const token = await authenticate(email, password);

    return Response.json({ token });
  } catch (error: any) {
    const typeError = Errors(error.message);
    return Response.json(
      { error: typeError?.message },
      { status: typeError?.status }
    );
  }
}
