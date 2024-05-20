import type { Metadata } from "next";
import { Inter, Roboto_Flex as Roboto } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Unir-se",
    template: "%s | Unir-se",
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
      <body
        className={`${roboto.variable} ${inter.variable} min-h-screen font-roboto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
