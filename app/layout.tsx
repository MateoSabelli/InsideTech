import type { Metadata } from "next";
import "./globals.css";
import { NavDemo } from "@/components/NavDemo";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "@next/font/google"
 
const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "InsideTech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <NavDemo />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
