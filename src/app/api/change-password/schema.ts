import { z } from "zod";

export const passwordSchema = z.object({
  accountId: z.string({
    required_error: "AccountId é obrigatório.",
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
      message: "O campo confirmação de senha deve ter 8 caracteres ou mais.",
    })
    .max(255, {
      message:
        "O campo confirmação de senha não deve ter mais de 255 caracteres.",
    }),
});
