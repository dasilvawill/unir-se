import MenuOptions from "./components/MenuOptions";

export default function Dashboard() {
  return (
    <main>
      <div className="flex flex-col items-center lg:mt-24">
        <h1 className="mt-12 text-center text-2xl font-semibold lg:text-4xl">
          Funcionalidades disponíveis para você
        </h1>
        <MenuOptions />
      </div>
    </main>
  );
}
