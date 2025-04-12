import type { Metadata } from "next";
import "./globals.css";
import { NavDemo } from "@/components/NavDemo";
import { Footer } from "@/components/Footer";/* 
import { ThemeProvider } from "@/components/theme-provider"; */

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "InsideTech",
  description: "Empresa de infraestructura de TI",
  icons: {
    icon: [
      {
        url: '/svg/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
         <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Mancha superior izquierda */}
          <div className="absolute -left-1/4 -top-1/4 w-[600px] h-[600px] bg-gradient-to-b from-blue-400/30 to-transparent rounded-full blur-3xl animate-move" />

          {/* Mancha superior derecha */}
          <div className="absolute -right-1/4 top-1/3 w-[500px] h-[500px] bg-gradient-to-b from-blue-400/35 to-transparent rounded-full blur-3xl animate-move animation-delay-2000" />

          {/* Mancha central */}
          <div className="absolute left-1/3 top-1/2 w-[700px] h-[700px] bg-gradient-to-b from-blue-400/30 to-transparent rounded-full blur-3xl animate-move animation-delay-4000" />

          {/* Mancha inferior izquierda */}
          <div className="absolute -left-1/4 bottom-1/4 w-[600px] h-[600px] bg-gradient-to-t from-blue-400/10 to-transparent rounded-full blur-3xl animate-move animation-delay-6000" />

          {/* Mancha inferior derecha */}
          <div className="absolute right-1/4 -bottom-1/4 w-[550px] h-[550px] bg-gradient-to-t from-blue-400/30 to-transparent rounded-full blur-3xl animate-move animation-delay-8000" />
        </div>
{/*         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
            
        <NavDemo />
        {children}
        <Footer />{/* 
        </ThemeProvider> */}
      </body>
    </html>
  );
}
