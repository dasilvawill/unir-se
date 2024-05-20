import { ReactNode } from "react";
import NavBarWrapper from "@/app/(authenticated)/dashboard/components/Navbar/wrapper";

export default function LogedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBarWrapper />
      <div className="m-auto mt-16 flex flex-grow">
        <main>{children}</main>
      </div>
    </div>
  );
}
