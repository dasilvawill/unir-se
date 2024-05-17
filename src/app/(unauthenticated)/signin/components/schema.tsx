import { z } from "zod";

export const signinSchema = z.object({
  signin: z.object({
    email: z
      .string({
        required_error: "O campo e-mail é obrigatório.",
      })
      .email({ message: "Informe um e-mail válido." })
      .transform((email) => email.trim().toLocaleLowerCase()),

    password: z
      .string({
        required_error: "O campo senha é obrigatório.",
      })
      .min(8, { message: "O campo senha deve ter 8 caracteres ou mais." })
      .max(255, {
        message: "O campo senha não deve ter mais de 255 caracteres.",
      }),
  }),
});
