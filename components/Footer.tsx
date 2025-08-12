import Link from 'next/link';
import Image from 'next/image';
import { Mail, Linkedin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#2F4158] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Menú */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Menú</h3>
            <ul className="space-y-2">
              {[
                { name: 'Nosotros', href: '/nosotros' },
                { name: 'Servicios', href: '/servicios' },
                { name: 'Productos', href: '/productos' },
                { name: 'Eventos', href: '/eventos' },
                { name: 'Clientes', href: '/clientes' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {[
                { name: 'Observabilidad', href: '/observabilidad' },
                { name: 'ITSM', href: '/itsm' },
                { name: 'Automatización', href: '/automatizacion' },
                { name: 'DevOps', href: '/devops' },
                { name: 'Staffing', href: '/staffing' },
                {
                  name: 'Consultoría Cloud',
                  href: '/consultoria',
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo y Contacto */}
          <div>
            <Image
              src="/Logos/insidetech_logo_blanco_y_celeste.png"
              alt="InsideTech Logo"
              width={200}
              height={50}
            />
            <div className="space-y-2 text-white">
              <p>Teléfono: +54 11 4328 - 2662</p>
              <p>Mail: info@insidetech.com.ar</p>
              <p>Dirección: Lavalle 416 | Piso 3 | CABA</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="mailto:info@insidetech.com.ar"
                  className="text-white hover:text-gray-300"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/insidetech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/5491143282662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center text-white text-sm">
          <p>InsideTech © 2025 - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
