import { ReactNode } from "react";
import NavBar from "@/app/(authenticated)/dashboard/components/Navbar";

export default function LogedLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="min-h-screen max-w-[1600] font-roboto">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
