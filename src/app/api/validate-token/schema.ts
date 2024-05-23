import { z } from "zod";

export const tokenSchema = z.object({
  token: z.string({
    required_error: "O campo token é obrigatório.",
  }),
});
