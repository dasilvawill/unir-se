import { ReactNode } from "react";
import NavBarWrapper from "@/app/(authenticated)/dashboard/components/Navbar/wrapper";

export default function LogedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <NavBarWrapper />
      {children}
    </div>
  );
}
