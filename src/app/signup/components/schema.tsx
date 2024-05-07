import { z } from "zod";

export const schemaForm = z.object({
  signup: z
    .object({
      name: z
        .string({
          required_error: "O campo nome é obrigatório.",
        })
        .min(3, { message: "O nome deve ter mais de 3 caracteres." })
        .max(255, {
          message: "O campo nome não deve ter mais de 255 caracteres.",
        })
        .refine(
          (name) => {
            const parts = name.trim().split(" ");
            return parts.length >= 2 && parts.every((part) => part.length > 0);
          },
          { message: "Informe um nome e um sobrenome." }
        ),

      email: z
        .string({
          required_error: "O campo e-mail é obrigatório.",
        })
        .max(255, {
          message: "O campo e-mail não deve ter mais de 255 caracteres.",
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
