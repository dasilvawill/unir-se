import Link from "next/link";
import { ElementType } from "react";

export interface LinkProps {
  href: string;
  text: string;
  className?: string;
  spanContent?: React.ReactNode;
  icon?: ElementType;
}

export function LinkComponent({
  href,
  text,
  className,
  spanContent,
  icon: Icon,
}: LinkProps) {
  return (
    <Link
      href={href}
      className={`${className} flex items-center justify-center gap-1`}
    >
      {Icon && <Icon className="h-4 w-4 text-zinc-900" aria-hidden="true" />}
      {text}
      {spanContent && <span aria-hidden="true">{spanContent}</span>}
    </Link>
  );
}
