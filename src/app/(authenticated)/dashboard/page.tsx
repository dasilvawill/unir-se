import MenuOptions from "./components/MenuOptions";

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:mt-24">
      <h1 className="mx-9 text-center text-3xl font-semibold sm:mt-12 lg:text-4xl">
        Funcionalidades disponíveis para você
      </h1>
      <MenuOptions />
    </div>
  );
}
