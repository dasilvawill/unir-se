"use cliente";

import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const option = [
  {
    name: "Consultar abrigos",
    description: "Aqui você encontra todos os abrigos cadastrados",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Incluir abrigo",
    description: "Aqui você consegue incluir um novo abrigo",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Consultar abrigados",
    description: "Aqui você encontra todos os abrigados cadastrados",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Incluir abrigados",
    description: "Aqui você consegue incluir um novo abrigo",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function MenuComponent() {
  return (
    <div className="flex justify-start py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <ul
          role="list"
          className="grid gap-x-12 gap-y-12 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2"
        >
          {option.map((menuOption) => (
            <li key={menuOption.name}>
              <Link href="#">
                <div className="flex w-auto flex-row items-start justify-start gap-6 rounded-xl bg-gray-50 p-8 hover:bg-gray-100">
                  <HomeIcon className="h-16 w-16" aria-hidden="true" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {menuOption.name}
                    </h3>
                    <p className="text-gray-400">{menuOption.description}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
