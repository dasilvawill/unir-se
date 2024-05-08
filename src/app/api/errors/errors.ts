export function Errors(code: string) {
  const errorMessages = [
    {
      code: "error_account_already_exists",
      message:
        "Este e-mail já está em uso. Por favor, faça login ou utilize um e-mail diferente para criar uma conta.",
      status: 409,
    },
    {
      code: "authentication_error",
      message:
        "Usuário ou senha estão incorretos. Por favor, verifique e tente novamente.",
      status: 401,
    },
  ];

  const error = errorMessages.find((err) => err.code === code);
  return error ? { message: error.message, status: error.status } : null;
}
