import { ZodError } from "zod";
import { changePasswordService } from "./changePassword.service";
import { passwordSchema } from "./schema";
import { Errors } from "../errors/errors";

export async function PATCH(request: Request) {
  try {
    const data = await request.json();
    console.log("patch teste", data);
    const { accountId, password, passwordConfirmation } =
      passwordSchema.parse(data);

    const accountUpdated = await changePasswordService(accountId, password);

    return Response.json({ accountUpdated });
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
