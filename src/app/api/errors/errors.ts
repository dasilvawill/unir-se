export function Errors(code: string) {
  const errorMessages = [
    {
      code: "error_account_already_exists",
      message: "Já existe uma conta com este email",
      status: 409,
    },
    {
      code: "authentication_error",
      message: "Usuário ou senha incorreto",
      status: 401,
    },
  ];

  const error = errorMessages.find((err) => err.code === code);
  return error ? { message: error.message, status: error.status } : null;
}
