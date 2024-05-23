import { Errors } from "@/app/api/errors/errors";
import { tokenSchema } from "@/app/api/validate-token/schema";
import { ZodError } from "zod";
import { validateTokenService } from "./validate-token-service";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { token } = tokenSchema.parse(data);

    const tokenValidationResult = await validateTokenService(token);

    return Response.json({ token_validation_result: tokenValidationResult });
  } catch (error: any) {
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
