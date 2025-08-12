'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col w-full sticky top-0 z-50 bg-white">
      {/* Barra superior de redes sociales */}
      <div className="bg-blue-400 text-white py-2 px-4">
        <div className="flex justify-end items-center space-x-4 md:max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm">
            <Facebook className="w-4 h-4" />
            <Instagram className="w-4 h-4" />
            <Linkedin className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className="shadow-sm border-b">
        <div className="flex items-center justify-between py-3 px-4 md:py-5 md:max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/INSIDETECH2.svg"
              alt="logo"
              width={120}
              height={120}
              className="md:w-[150px]"
            />
          </Link>

          {/* Menú de escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#nosotros"
              className="text-gray-700 hover:text-blue-600 font-medium "
            >
              Nosotros
            </a>
            <a
              href="/#servicios"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Servicios
            </a>
            <a
              href="/#productos"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Productos
            </a>
            <a
              href="/#eventos"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Eventos
            </a>
            <a
              href="/#clientes"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Clientes
            </a>
            <Button className="bg-gray-700 hover:bg-gray-800 text-white px-6">
              CONTÁCTANOS
            </Button>
          </div>

          {/* Botón de menú móvil */}
          <div className="flex items-center space-x-4 md:hidden">
            <Button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 text-sm">
              CONTACTO
            </Button>
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
