"use client";

import { Button } from "@/app/components/Button";
import { signupSchema } from "@/app/(unauthenticated)/create-password/[token]/components/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";

type FormProps = z.infer<typeof signupSchema>;

interface FormaProps {
  accountId: string;
}

const Form = (props: FormaProps) => {
  const { replace } = useRouter();

  const [myAccountId, setMyAccountId] = useState("");

  useEffect(() => {
    setMyAccountId(props.accountId);
  }, [myAccountId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(signupSchema),
    defaultValues: {
      signup: {
        accountId: myAccountId,
        password: "",
        passwordConfirmation: "",
      },
    },
  });

  async function onSubmit(data: FormProps) {
    console.log(data, "onsubmit");
    try {
      toast("Aguarde, criando sua conta");
      const response = await fetch("/api/change-password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.signup),
      });

      console.log(response, "nflknaslkfsanfsa");

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
      console.log("responseData");
      toast.error(error.message);
    }
  }

  return (
    <>
      <Toaster position="top-right" expand visibleToasts={1} />
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <input
          id="accountId"
          type="hidden"
          value={myAccountId}
          {...register("signup.accountId")}
        />

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
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          <Button
            type="submit"
            variant="primary"
            className="flex w-full justify-center text-sm text-white"
          >
            Criar senha
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
