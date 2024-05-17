import { Errors } from "@/app/(unauthenticated)/api/errors/errors";
import { signinSchema } from "@/app/(unauthenticated)/api/signin/schema";
import { authenticateService } from "@/app/(unauthenticated)/api/auth-service";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password } = signinSchema.parse(data);

    const token = await authenticateService(email, password);

    return Response.json({ token });
  } catch (error: any) {
    const typeError = Errors(error.message);
    return Response.json(
      { error: typeError?.message },
      { status: typeError?.status },
    );
  }
}
