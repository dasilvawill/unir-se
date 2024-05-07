"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schemaForm = z.object({
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

type FormProps = z.infer<typeof schemaForm>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      signup: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
    },
  });

  async function onSubmit(data: FormProps) {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.signup),
      });

      if (response.ok) {
        console.log("Conta criada com sucesso");
      } else {
        console.error("Erro ao enviar os dados");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados", error);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Nome completo
        </label>
        <div className="mt-2">
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Informe o seu nome completo"
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("signup.name")}
          />
          {errors.signup?.name?.message && (
            <p className="text-sm text-red-500">
              {errors.signup?.name?.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          E-mail
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Informe o seu e-mail"
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("signup.email")}
          />
          {errors.signup?.email?.message && (
            <p className="text-sm text-red-500">
              {errors.signup?.email?.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Senha
        </label>
        <div className="mt-2">
          <input
            id="password"
            type="password"
            autoComplete="password"
            placeholder="Digite uma nova senha"
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("signup.password")}
          />
          {errors.signup?.password?.message && (
            <p className="text-sm text-red-500">
              {errors.signup?.password?.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="passwordConfirmation"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Confirmação de senha
        </label>
        <div className="mt-2">
          <input
            id="passwordConfirmation"
            type="password"
            autoComplete="passwordConfirmation"
            placeholder="Repita a senha"
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("signup.passwordConfirmation")}
          />
          {errors.signup?.passwordConfirmation?.message && (
            <p className="text-sm text-red-500">
              {errors.signup?.passwordConfirmation?.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Criar nova conta
        </button>
      </div>
    </form>
  );
};

export default Form;
