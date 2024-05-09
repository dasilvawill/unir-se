"use client";

import { Button } from "@/app/components/Button";
import { signinSchema } from "@/app/signin/components/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { z } from "zod";

type FormProps = z.infer<typeof signinSchema>;

const Form = () => {
  const { replace } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(signinSchema),
    defaultValues: {
      signin: {
        email: "",
        password: "",
      },
    },
  });

  async function onSubmit(data: FormProps) {
    try {
      toast("Aguarde, entrando na sua conta");
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.signin),
      });

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.token;
        Cookie.set("auth_token", token);
        replace("/dashboard");
      } else {
        const errorMessage = await response.json();
        toast.error(errorMessage.error);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <Toaster position="top-right" expand visibleToasts={1} />
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("signin.email")}
            />
            {errors.signin?.email?.message && (
              <p className="text-sm text-red-500">
                {errors.signin?.email?.message}
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
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("signin.password")}
            />
            {errors.signin?.password?.message && (
              <p className="text-sm text-red-500">
                {errors.signin?.password?.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Button
            variant="primary"
            className="flex w-full justify-center text-sm text-white"
          >
            Entrar
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
