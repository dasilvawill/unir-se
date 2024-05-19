"use client";

import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useFileInput } from "./Root";

export function Trigger() {
  const { id } = useFileInput();

  return (
    <label
      htmlFor={id}
      className="hover:bg-blue-25 group flex flex-1 cursor-pointer flex-col items-center gap-6 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-blue-200 hover:text-blue-500"
    >
      <div className="border-6 rounded-full border-zinc-50 bg-zinc-100 p-2 group-hover:border-blue-50 group-hover:bg-blue-100">
        <ArrowUpIcon className="w-5 text-zinc-600 group-hover:text-blue-600" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span>
          <span className="font-semibold text-blue-700">
            Clique para selecionar
          </span>{" "}
          ou arraste e solte
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
}
