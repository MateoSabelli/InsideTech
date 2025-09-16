import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { TbMailFilled } from 'react-icons/tb';

export const Footer = () => {
  return (
    <footer className="bg-[#39506D] text-white py-12">
      <div className="px-4 max-w-5xl mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Menú */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-6">Menú</h3>
              <ul className="space-y-1">
                {[
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Nosotros',
                    href: '/nosotros',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Servicios',
                    href: '/servicios',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Productos',
                    href: '/productos',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Eventos',
                    href: '/eventos',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Clientes',
                    href: '/clientes',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Contacto',
                    href: '/contacto',
                  },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 text-base font-light"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Servicios */}

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-6">Servicios</h3>
              <ul className="space-y-1">
                {[
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Automatización',
                    href: '/automatizacion',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Observabilidad',
                    href: '/observabilidad',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'DevOps',
                    href: '/devops',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'ITSM',
                    href: '/itsm',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Cloud',
                    href: '/consultoria',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Consultoria',
                    href: '/consultoria',
                  },

                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Staffing',
                    href: '/staffing',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Soporte',
                    href: '/soporte',
                  },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 text-base font-light"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-6">Productos</h3>
              <ul className="space-y-1">
                {[
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'InvGate SM',
                    href: '/invgateServiceDesk',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'InvGate AM',
                    href: '/invgateAssets',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Red Hat',
                    href: '/redhat',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Zabbix',
                    href: '/zabbix',
                  },
                  {
                    icon: <ChevronRight className="w-4 h-4" />,
                    name: 'Grafana',
                    href: '/grafana',
                  },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 text-base font-light"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo y Contacto */}
          <div className="flex flex-col items-center -ml-10">
            <div className="flex flex-col items-start">
              <div className="mb-3">
                <Image
                  src="/Logos/logoFooter.svg"
                  alt="InsideTech Logo"
                  width={200}
                  height={80}
                  className="mb-4"
                />
              </div>
              <div className="space-y-2 text-white pl-2">
                <p className="text-sm">
                  <span className="font-medium">Teléfono:</span> +54 11 4328 -
                  2662
                </p>
                <p className="text-sm">
                  <span className="font-medium">Mail:</span>{' '}
                  info@insidetech.com.ar
                </p>
                <p className="text-sm">
                  <span className="font-medium">Dirección:</span> Lavalle 416 -
                  CABA
                </p>
                <div className="flex space-x-4 pt-4">
                  <a
                    href="mailto:info@insidetech.com.ar"
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="Email"
                  >
                    <TbMailFilled className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/insidetech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/5491143282662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <RiWhatsappFill className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6  text-center">
          <p className="text-sm text-gray-300">
            InsideTech © 2025 - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
