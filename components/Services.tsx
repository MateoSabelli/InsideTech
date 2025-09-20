'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'observabilidad',
    link: '/observabilidad',
    icon: '/home/OBSERVABILIDAD.svg',
    title: 'Observabilidad',
    description:
      'Implementamos plataformas de código abierto para la visualización y análisis de datos en tiempo real, facilitando una toma de decisiones más precisa.',
  },
  {
    id: 'itsm',
    link: '/itsm',
    icon: '/home/ITSM.svg',
    title: 'ITSM',
    description:
      'Gestionamos servicios y activos de manera autónoma para optimizar la eficiencia operativa y aumentar la productividad.',
  },
  {
    id: 'devops',
    link: '/devops',
    icon: '/home/DEVOPS.svg',
    title: 'DEVOPS',
    description:
      'Aceleramos el ciclo de vida del desarrollo de software mediante prácticas de integración y entrega continua, asegurando productos de alta calidad.',
  },
  {
    id: 'automatizacion',
    link: '/automatizacion',
    icon: '/home/AUTOMATIZACION.svg',
    title: 'Automatización',
    description:
      'Optimizamos tus procesos mediante soluciones de automatización que reducen errores y tiempos operativos.',
  },
  {
    id: 'staffing',
    link: '/staffing',
    icon: '/home/STAFFING.svg',
    title: 'Staffing',
    description:
      'Brindamos servicios profesionales y equipos técnicos altamente calificados, adaptados a las necesidades específicas de cada proyecto.',
  },
  {
    id: 'consultoria-cloud',
    link: '/consultoria',
    icon: '/home/CLOUD.svg',
    title: 'CONSULTORÍA CLOUD',
    description:
      'Ofrecemos asesoramiento personalizado para evaluar e implementar las mejores alternativas en tecnologías de la información y servicios en la nube.',
  },
];

export const Services = () => {
  return (
    <section className="pb-20 pt-10 relative " id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center "
        >
          <h2 className="text-3xl text-center max-w-7xl mx-auto font-semibold text-[#39506D] mb-8">
            NUESTROS SERVICIOS
          </h2>
        </motion.div>

        <p className="text-gray-600  leading-relaxed max-w-4xl mx-auto text-center mb-16">
          Desarrollamos nuestras líneas de productos y servicios con un{' '}
          <span className="font-bold text-[#39506D] ">enfoque innovador </span>,
          participando activamente en cada proyecto y aportando valor de forma
          constante.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.link} id={service.id}>
                <div className="group relative border bg-white border-gray-300 hover:border-gray-400 rounded-xl p-4 h-full transition-all duration-300 shadow-lg hover:shadow-md hover:bg-gray-100">
                  <div className="relative  flex flex-col gap-4 justify-center items-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={150}
                      height={150}
                    />
                    {/* 
                    <h3 className="text-xl font-bold text-[#6AA2CC] mb-3">
                      {service.title}
                    </h3> */}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base text-center">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
