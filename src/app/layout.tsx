import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Esperance",
    template: "%s | Esperance",
  },
  description:
    "Descubra como nosso sistema de ajuda humanitária está fazendo a diferença! Oferecemos suporte vital para comunidades afetadas por desastres naturais, conflitos e crises humanitárias. Junte-se a nós para fornecer assistência essencial, reconstruir vidas e restaurar a esperança. Saiba mais sobre como estamos promovendo o bem-estar global e como você pode se envolver para fazer parte dessa causa significativa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
