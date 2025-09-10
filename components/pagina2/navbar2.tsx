'use client';
import React, { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Productos', href: '/productos' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Clientes', href: '/clientes' },
  ];

  return (
    <div className="flex flex-col w-full sticky top-0 z-50 bg-white">
      {/* Navegación principal */}
      <nav className="shadow-sm border-b">
        <div className="flex items-center justify-between py-3 pr-4 md:py-5 md:max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/Logos/logo.png" alt="logo" width={200} height={150} />
          </Link>

          <div className="space-x-8 hidden md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-5 h-5 text-[#355882]" />
              <FaLinkedinIn className="w-5 h-5 text-[#355882]" />
              <FaWhatsapp className="w-5 h-5 text-[#355882]" />
            </div>
          </div>

          {/* Botón de menú móvil */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#nosotros"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Nosotros
              </a>
              <a
                href="#servicios"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Servicios
              </a>
              <a
                href="#productos"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Productos
              </a>
              <a
                href="#eventos"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Eventos
              </a>
              <a
                href="#clientes"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Clientes
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
