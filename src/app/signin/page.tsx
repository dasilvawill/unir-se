import Form from "@/app/signin/components/Form";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Entrar em Esperance",
  },
};

export default function SignIn() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="/">
            <Image
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
              alt="logo"
              width={100}
              height={100}
            />
          </a>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Faça login em sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form />
        </div>
        <div className="mt-8 flex justify-center">
          <p>
            Ainda não tem uma conta?{" "}
            <Link
              className="font-medium text-blue-600 hover:text-blue-700"
              href="/signup"
            >
              Crie aqui
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
