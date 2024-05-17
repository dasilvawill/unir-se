import { LinkComponent } from "@/app/(unauthenticated)/components/Link";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="lg-p-12 px-6 font-roboto lg:py-2">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Unir-se
            </h1>

            <div className="my-5 rounded-3xl border border-red-900 bg-red-100">
              <h2 className="p-5">SISTEMA EM DESENVOLVIMENTO</h2>
              <h3 className="p-5">
                Os dados poderão ser apagados a qualquer momento
              </h3>
            </div>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Descubra como nosso sistema de ajuda humanitária está fazendo a
              diferença! Oferecemos suporte vital para comunidades afetadas por
              desastres naturais, conflitos e crises humanitárias. Junte-se a
              nós para fornecer assistência essencial, reconstruir vidas e
              restaurar a esperança. Saiba mais sobre como estamos promovendo o
              bem-estar global e como você pode se envolver para fazer parte
              dessa causa significativa.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <LinkComponent
                href="/signup"
                text="Criar uma nova conta"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              />
              <LinkComponent
                href="#"
                text="Veja mais"
                className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-900"
                spanContent="→"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              height: "15rem",
            }}
          />
        </div>
      </div>
    </>
  );
}
