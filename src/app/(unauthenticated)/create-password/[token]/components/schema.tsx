import { z } from "zod";

export const signupSchema = z.object({
  signup: z
    .object({
      accountId: z.string({
        required_error: "O campo accountId é obrigatório.",
      }),

      password: z
        .string({
          required_error: "O campo senha é obrigatório.",
        })
        .min(8, { message: "O campo senha deve ter 8 caracteres ou mais." })
        .max(255, {
          message: "O campo senha não deve ter mais de 255 caracteres.",
        }),

      passwordConfirmation: z
        .string({
          required_error: "O campo confirmação de senha é obrigatório.",
        })
        .min(8, {
          message:
            "O campo confirmação de senha deve ter 8 caracteres ou mais.",
        })
        .max(255, {
          message:
            "O campo confirmação de senha não deve ter mais de 255 caracteres.",
        }),
    })
    .refine((values) => values.password === values.passwordConfirmation, {
      message: "Senhas divergentes!",
      path: ["passwordConfirmation"],
    }),
});
