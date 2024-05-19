import { ReactNode } from "react";
import NavBarWrapper from "@/app/(authenticated)/dashboard/components/Navbar/wrapper";

export default function LogedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBarWrapper />
      <main>{children}</main>
    </div>
  );
}
