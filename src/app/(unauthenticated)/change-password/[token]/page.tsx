import Form from "@/app/(unauthenticated)/change-password/[token]/components/Form";
import { Metadata } from "next";
import Image from "next/image";
import { decode } from "jsonwebtoken";
import { validateTokenService } from "@/app/api/validate-token/validate-token-service";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Criar uma senha",
};

interface TokenInterface {
  id: string;
  name: string;
}

export default async function SignUp({
  params,
}: {
  params: { token: string };
}) {
  const token = params.token;
  const dataAccount = decode(token) as TokenInterface;

  // TODO: remover os services para uma pasta ex: core
  const validatedToken = await validateTokenService(token);

  // TODO: criar uma pagina de solicitar novo codigo pois pode estar expirado
  if (!validatedToken) {
    redirect("/");
  }

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
            Criar uma senha
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Olá, {dataAccount.name},
          </p>
          <p className="text-lg leading-8 text-gray-600">
            Por favor, informe uma nova senha nos dois campos abaixo.
          </p>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form accountId={dataAccount.id} />
        </div>
      </div>
    </>
  );
}
