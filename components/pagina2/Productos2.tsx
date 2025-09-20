import Image from 'next/image';
import React from 'react';

export default function Productos2() {
  const productos = [
    {
      name: 'Grafana',
      image: '/productos/iconos/1.png',
    },
    {
      name: 'Red Hat',
      image: '/productos/iconos/2.png',
    },
    {
      name: 'IBM',
      image: '/productos/iconos/3.png',
    },
    {
      name: 'Ansible',
      image: '/productos/iconos/4.png',
    },
    {
      name: 'Jenkins',
      image: '/productos/iconos/5.png',
    },
    {
      name: 'Kubernetes',
      image: '/productos/iconos/6.png',
    },
    {
      name: 'Prometheus',
      image: '/productos/iconos/7.png',
    },
    {
      name: 'Nagios',
      image: '/productos/iconos/8.png',
    },
    {
      name: 'Docker',
      image: '/productos/iconos/9.png',
    },
    {
      name: 'AWS',
      image: '/productos/iconos/10.png',
    },
    {
      name: 'IBM2',
      image: '/productos/iconos/11.png',
    },
    {
      name: 'Invgate',
      image: '/productos/iconos/12.png',
    },
    {
      name: 'Nagios',
      image: '/productos/iconos/13.png',
    },
    {
      name: 'Zabbix',
      image: '/productos/iconos/14.png',
    },
    {
      name: 'Oracle',
      image: '/productos/iconos/15.png',
    },
    {
      name: 'Microsoft',
      image: '/productos/iconos/16.png',
    },
  ];
  return (
    <section
      className="py-16 max-w-7xl mx-auto bg-[#2B4158] text-white rounded-3xl"
      id="productos"
    >
      <div className="px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold text-center mb-4 ">PRODUCTOS</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-gray-300  leading-relaxed ">
          Accedé a licencias, suscripciones y herramientas de software de primer
          nivel
        </p>

        {/* Grid de iconos - Primera fila */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center justify-center  ">
          {productos.map((producto) => (
            <Image
              key={producto.name}
              src={producto.image}
              alt={producto.name}
              width={100}
              height={100}
              className=" bg-gray-200 rounded-[25px] aspect-square flex items-center justify-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
