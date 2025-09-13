'use client';
import React, { useState } from 'react';
import { Mail, Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: 'Nosotros', href: '/nosotros' },
    {
      name: 'Servicios',
      href: '/servicios',
      dropdown: [
        { name: 'Automatización', href: '/automatizacion' },
        { name: 'Consultoría Cloud', href: '/consultoria' },
        { name: 'DevOps', href: '/devops' },
        { name: 'ITSM', href: '/itsm' },
        { name: 'Observabilidad', href: '/observabilidad' },
        { name: 'Staffing', href: '/staffing' },
      ],
    },
    {
      name: 'Productos',
      href: '/productos',
      dropdown: [
        { name: 'Grafana', href: '/grafana' },
        { name: 'Zabbix', href: '/zabbix' },
        { name: 'Red Hat', href: '/redhat' },
        { name: 'InvGate Assets', href: '/invgateAssets' },
        { name: 'InvGate Service Desk', href: '/invgateServiceDesk' },
      ],
    },
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

          <div className="space-x-6 hidden md:flex h-auto">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 text-base font-medium flex items-center space-x-1"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && hoveredItem === item.name && (
                  <div className="absolute top-full left-0  w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="mailto:info@insidetech.com.ar" target="_blank">
                <Mail className="w-5 h-5 text-[#2d2d2d]" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/inside-tech"
                target="_blank"
              >
                <FaLinkedinIn className="w-5 h-5 text-[#2d2d2d]" />
              </Link>
              <Link href="https://wa.me/5491168240315" target="_blank">
                <RiWhatsappFill className="w-5 h-5 text-[#2d2d2d]" />
              </Link>
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
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 block"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="text-gray-600 hover:text-blue-600 text-sm py-1 block"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
