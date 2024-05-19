import { Button } from "@/app/components/Button";
import { InputControl, InputPrefix, InputRoot } from "@/app/components/Input";
import * as FileInput from "@/app/(authenticated)/dashboard/components/Form/FileInput/Index";
import {
  ChatBubbleBottomCenterTextIcon,
  PhoneIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { LinkComponent } from "@/app/components/Link";

export default function Profile() {
  return (
    <div>
      <h1 className="my-6 min-w-[90vw] text-4xl font-semibold sm:min-w-[60vw] ">
        Perfil
      </h1>

      <div className="flex flex-col justify-between gap-4 border-b border-zinc-500 pb-5 sm:flex-row">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">
            Informações Pessoais
          </h2>
          <span className="text-sm text-zinc-500">
            Altere sua foto e informações pessoais aqui.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary">
            Cancelar
          </Button>
          <Button type="submit" form="settings" variant="primary">
            Salvar
          </Button>
        </div>
      </div>
      <div className="lg:grid-cols-form mt-6 flex flex-col gap-3 lg:grid">
        <label
          htmlFor="firstName"
          className="text-sm font-medium text-zinc-700"
        >
          Nome
        </label>
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-1">
          <InputRoot>
            <InputControl id="name" defaultValue="William da Silva" />
          </InputRoot>
        </div>
      </div>

      <div className="lg:grid-cols-form flex flex-col gap-3 pt-5 lg:grid">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
          Email
        </label>
        <InputRoot>
          <InputPrefix>
            <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl
            id="email"
            type="email"
            defaultValue="dasilvawilliam58@gmail.com"
          />
        </InputRoot>
      </div>

      <div className="lg:grid-cols-form flex flex-col gap-3 pt-5 lg:grid">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
          Telefone
        </label>
        <InputRoot>
          <InputPrefix>
            <PhoneIcon className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl id="phone" type="tel" defaultValue="" />
        </InputRoot>
      </div>

      <div className="lg:grid-cols-form flex flex-col gap-3 pt-5 lg:grid">
        <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
          Sua foto
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Esta foto será exibida no seu perfil.
          </span>
        </label>
        <FileInput.Root className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-start">
          <FileInput.ImagePreview />
          <FileInput.Trigger />
          <FileInput.Control />
        </FileInput.Root>
      </div>

      <div className="mb-6 flex justify-end py-6 font-medium ">
        <div className="flex items-center justify-center">
          <LinkComponent
            className="rounded-md bg-zinc-50 p-4 hover:bg-zinc-100"
            href="/dashboard"
            text="Voltar"
            icon={ChevronLeftIcon}
          />
        </div>
      </div>
    </div>
  );
}
