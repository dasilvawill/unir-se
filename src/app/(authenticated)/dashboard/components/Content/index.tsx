import MenuOptions from "@/app/(authenticated)/dashboard/components/Content/MenuOptions";

export default function Content() {
  return (
    <main>
      <div className="flex flex-col items-center lg:mt-24">
        <h1 className="mt-12 text-center text-2xl font-semibold lg:text-4xl lg:font-bold">
          Funcionalidades disponíveis para você
        </h1>
        <MenuOptions />
      </div>
    </main>
  );
}
