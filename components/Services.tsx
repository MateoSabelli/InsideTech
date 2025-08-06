'use client';
import { motion } from 'framer-motion';
import {
  GitBranch,
  CloudCog,
  Users,
  SearchCode,
  Infinity,
  Waypoints,
} from 'lucide-react';
import { Badge } from './ui/badge';

const services = [
  {
    icon: SearchCode,
    title: 'Observabilidad',
    description:
      'Implementamos plataformas de código abierto para la visualización y análisis de datos en tiempo real, facilitando una toma de decisiones más precisa.',
    link: '/servicios/consultoria',
  },
  {
    icon: GitBranch,
    title: 'ITSM',
    description:
      'Gestionamos servicios y activos de manera autónoma para optimizar la eficiencia operativa y aumentar la productividad.',
    link: '/servicios/devops',
  },
  {
    icon: Infinity,
    title: 'DEVOPS',
    description:
      'Aceleramos el ciclo de vida del desarrollo de software mediante prácticas de integración y entrega continua, asegurando productos de alta calidad.',
    link: '/servicios/soporte',
  },
  {
    icon: Waypoints,
    title: 'Automatización',
    description:
      'Optimizamos tus procesos mediante soluciones de automatización que reducen errores y tiempos operativos.',
    link: '/servicios/monitoreo',
  },
  {
    icon: Users,
    title: 'Staffing',
    description:
      'Brindamos servicios profesionales y equipos técnicos altamente calificados, adaptados a las necesidades específicas de cada proyecto.',
    link: '/servicios/migraciones',
  },
  {
    icon: CloudCog,
    title: 'CONSULTORÍA CLOUD',
    description:
      'Ofrecemos asesoramiento personalizado para evaluar e implementar las mejores alternativas en tecnologías de la información y servicios en la nube.',
    link: '/servicios/rrhh',
  },
];

export const Services = () => {
  return (
    <section className="py-20 relative " id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center "
        >
          <Badge className="text-4xl md:text-5xl max-w-4xl mx-auto font-bold mb-8 text-gray-900  rounded-full p-3 text-center bg-blue-200 hover:bg-blue-300 transition-all duration-300 ">
            Nuestros servicios
          </Badge>
        </motion.div>

        <p className="text-gray-600  leading-relaxed max-w-4xl mx-auto text-center mb-16">
          Desarrollamos nuestras líneas de productos y servicios con un enfoque
          innovador, participando activamente en cada proyecto y aportando valor
          de forma constante.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative border bg-white border-gray-100 hover:border-gray-300 rounded-xl p-8 h-full transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="relative mb-6">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
