import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import NavbarTeste from "@/components/navbar-teste";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lentes Grenal",
  description: "Landing Page de apresentação do produto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">

        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-neutral-900 to-black" />

        {/* Luz azul */}
        <div className="fixed top-20 left-[-100px] w-[400px] h-[400px] bg-blue-500 blur-[150px] opacity-30 mix-blend-screen pointer-events-none"></div>
        {/* Luz vermelha */}
        <div className="fixed bottom-20 right-[-100px] w-[400px] h-[400px] bg-red-600 blur-[150px] opacity-30 mix-blend-screen pointer-events-none"></div>
        {/* Conteúdo do app */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <NavbarTeste />
          {children}
        </div>

      </body>
    </html>
  );
}
