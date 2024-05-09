import Link from "next/link";

export interface LinkProps {
  href: string;
  text: string;
  className?: string;
  spanContent?: React.ReactNode;
}

export function LinkComponent({
  href,
  text,
  className,
  spanContent,
}: LinkProps) {
  return (
    <Link href={href} className={`${className}`}>
      {text}
      {spanContent && <span aria-hidden="true">{spanContent}</span>}
    </Link>
  );
}
