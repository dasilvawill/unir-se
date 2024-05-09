import Form from "@/app/signup/components/Form";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Criar uma conta",
};

export default function SignUp() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="logo"
            width={100}
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Criar uma nova conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form />
          <p className="mt-5 text-sm font-light">
            Ao se cadastrar, você aceita nossos{" "}
            <Link
              className="font-medium text-blue-600 hover:text-blue-700"
              href="#"
            >
              termos de uso
            </Link>{" "}
            e a nossa{" "}
            <Link
              className="font-medium text-blue-600 hover:text-blue-700"
              href="#"
            >
              política de privacidade{" "}
            </Link>
            .
          </p>
          <div className="mt-8 flex justify-center">
            <p>
              Já tem uma conta?{" "}
              <Link
                className="font-medium text-blue-600 hover:text-blue-700"
                href="/signin"
              >
                Entre aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
