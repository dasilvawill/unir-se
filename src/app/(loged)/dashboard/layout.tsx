import { ReactNode } from "react";

export default function LogedLayout({ children }: { children: ReactNode }) {
  return <div className="bg-orange-400">{children}</div>;
}
