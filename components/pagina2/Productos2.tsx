import Image from 'next/image';
import React from 'react';

export default function Productos2() {
  const productos = [
    {
      name: 'Grafana',
      image: '/Partners/grafana.svg',
    },
    {
      name: 'Red Hat',
      image: '/Partners/redhat.svg',
    },
    {
      name: 'IBM',
      image: '/Partners/IBM.svg',
    },
    {
      name: 'Ansible',
      image: '/hero/ansible.svg',
    },
    {
      name: 'Jenkins',
      image: '/hero/jenkins.svg',
    },
    {
      name: 'Kubernetes',
      image: '/hero/kubernetes.svg',
    },
    {
      name: 'Prometheus',
      image: '/hero/prometheus.svg',
    },
    {
      name: 'Nagios',
      image: '/Partners/nagios.svg',
    },
    {
      name: 'Docker',
      image: '/hero/docker.svg',
    },
    {
      name: 'AWS',
      image: '/hero/aws.svg',
    },
    {
      name: 'IBM2',
      image: '/Partners/IBM2.svg',
    },
    {
      name: 'Invgate',
      image: '/Partners/invgate.svg',
    },
    {
      name: 'Nagios',
      image: '/Partners/nagios.svg',
    },
    {
      name: 'Zabbix',
      image: '/Partners/zabbix.svg',
    },
  ];
  return (
    <section className="py-16 px-4 bg-[#2B4158] text-white" id="productos">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 ">Productos</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-gray-300  leading-relaxed ">
          Accedé a licencias, suscripciones y herramientas de software de primer
          nivel, gracias a nuestros socios estratégicos.
        </p>

        {/* Grid de iconos - Primera fila */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mb-6">
          {productos.map((producto) => (
            <div
              key={producto.name}
              className="bg-white p-4 rounded-lg aspect-square flex items-center justify-center"
            >
              <Image
                src={producto.image}
                alt={producto.name}
                width={70}
                height={70}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
