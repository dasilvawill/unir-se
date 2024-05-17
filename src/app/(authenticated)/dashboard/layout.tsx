import { ReactNode } from "react";
import NavBarWrapper from "@/app/(authenticated)/dashboard/components/Navbar/wrapper";

export default function LogedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen max-w-[1600] font-roboto">
      <NavBarWrapper />
      {children}
    </div>
  );
}
