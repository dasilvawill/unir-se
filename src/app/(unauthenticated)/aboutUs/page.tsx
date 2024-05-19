import { LinkComponent } from "@/app/components/Link";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

export default function AboutUs() {
  return (
    <div>
      <h1 className="my-6 min-w-[90vw] text-4xl font-semibold sm:min-w-[60vw] ">
        Sobre nós
      </h1>
      <div className="mb-6 flex justify-end py-6 font-medium">
        <div className="flex items-center justify-center">
          <LinkComponent
            className="rounded-md bg-zinc-50 p-4 hover:bg-zinc-100"
            href="/"
            text="Voltar"
            icon={ChevronLeftIcon}
          />
        </div>
      </div>
    </div>
  );
}
