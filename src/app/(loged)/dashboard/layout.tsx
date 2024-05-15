import { ReactNode } from "react";

export default function LogedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-roboto min-h-screen max-w-[1600]">{children}</div>
  );
}
