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
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
            <div className="bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group-hover:scale-105">
              <FaWhatsapp size={30} />
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}
