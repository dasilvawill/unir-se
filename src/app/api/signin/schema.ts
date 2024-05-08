import { z } from "zod";

export const signinSchema = z.object({
  email: z.string({
    required_error: "O campo e-mail é obrigatório.",
  }),

  password: z.string({
    required_error: "O campo senha é obrigatório.",
  }),
});
