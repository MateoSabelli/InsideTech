import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import Navbar2 from '@/components/pagina2/navbar2';
import { Poppins } from 'next/font/google';
import { FaWhatsapp } from 'react-icons/fa';

/* const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
}); */

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'InsideTech',
  description: 'Empresa de infraestructura de TI',
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
    <html lang="es">
      <body className={poppins.className}>
        {/* <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 w-[600px] h-[600px] bg-gradient-to-b from-blue-400/30 to-transparent rounded-full blur-3xl animate-move" />
          <div className="absolute -right-1/4 top-1/3 w-[500px] h-[500px] bg-gradient-to-b from-blue-400/35 to-transparent rounded-full blur-3xl animate-move animation-delay-2000" />
          <div className="absolute left-1/3 top-1/2 w-[700px] h-[700px] bg-gradient-to-b from-blue-400/30 to-transparent rounded-full blur-3xl animate-move animation-delay-4000" />
          <div className="absolute -left-1/4 bottom-1/4 w-[600px] h-[600px] bg-gradient-to-t from-blue-400/10 to-transparent rounded-full blur-3xl animate-move animation-delay-6000" />
          <div className="absolute right-1/4 -bottom-1/4 w-[550px] h-[550px] bg-gradient-to-t from-blue-400/10 to-transparent rounded-full blur-3xl animate-move animation-delay-8000" />
        </div> */}
        <Navbar2 />
        {children}
        <Footer />
        <div className="fixed bottom-8 right-8 z-10">
          <a
            href="https://wa.me/+5491168240315"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center group"
          >
            <span className="opacity-0 group-hover:opacity-100 bg-blue-400 text-white px-4 py-2 rounded-l-full ml-4  transition-all duration-300 transform translate-x-8 group-hover:translate-x-0">
              ¡Chatea con nosotros!
            </span>
            <div className="bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group-hover:scale-105">
              <FaWhatsapp size={40} />
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}
