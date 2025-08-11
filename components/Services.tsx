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
import Image from 'next/image';

const services = [
  {
    icon: SearchCode,
    title: 'Observabilidad',
    description:
      'Implementamos plataformas de código abierto para la visualización y análisis de datos en tiempo real, facilitando una toma de decisiones más precisa.',
    link: '/servicios/consultoria',
    tecnologias: 'Zabbix/ Prometheus/ Grafana/ ELK',
    imagenes: [
      '/Partners/zabbix.svg',
      '/hero/prometheus.svg',
      '/Partners/grafana.svg',
    ],
  },
  {
    icon: GitBranch,
    title: 'ITSM',
    description:
      'Gestionamos servicios y activos de manera autónoma para optimizar la eficiencia operativa y aumentar la productividad.',
    link: '/servicios/devops',
    tecnologias: 'Invgate Service Desk',
    imagenes: ['/tecnologias/invgate.svg'],
  },
  {
    icon: Infinity,
    title: 'DEVOPS',
    description:
      'Aceleramos el ciclo de vida del desarrollo de software mediante prácticas de integración y entrega continua, asegurando productos de alta calidad.',
    link: '/servicios/soporte',
    tecnologias: 'Jenkins/ Docker/ Github Actions/ Kubernetes/ Terraform',
    imagenes: [
      '/hero/azure.svg',
      '/hero/kubernetes.svg',
      '/hero/jenkins.svg',
      '/hero/prometheus.svg',
      '/hero/docker.svg',
    ],
  },
  {
    icon: Waypoints,
    title: 'Automatización',
    description:
      'Optimizamos tus procesos mediante soluciones de automatización que reducen errores y tiempos operativos.',
    link: '/servicios/monitoreo',
    tecnologias: 'Ansible/ Github Actions/ Kubernetes/ Terraform',
    imagenes: [
      '/hero/kubernetes.svg',
      '/hero/prometheus.svg',
      '/hero/ansible.svg',
    ],
  },
  {
    icon: Users,
    title: 'Staffing',
    description:
      'Brindamos servicios profesionales y equipos técnicos altamente calificados, adaptados a las necesidades específicas de cada proyecto.',
    link: '/servicios/migraciones',
    tecnologias: 'DevOps/ SRE/ Cloud/ AWS/ Azure/ GCP',
    imagenes: [],
  },
  {
    icon: CloudCog,
    title: 'CONSULTORÍA CLOUD',
    description:
      'Ofrecemos asesoramiento personalizado para evaluar e implementar las mejores alternativas en tecnologías de la información y servicios en la nube.',
    link: '/servicios/rrhh',
    tecnologias: 'AWS/ Azure/ Google Cloud/ Red Hat',
    imagenes: ['/hero/aws.svg', '/hero/azure.svg', '/Partners/redhat.svg'],
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
          <h1 className="text-4xl md:text-5xl max-w-4xl mx-auto font-bold mb-8 text-gray-900  rounded-full p-3 text-center duration-300 ">
            Nuestros servicios
          </h1>
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
                <div className="relative  flex flex-row gap-4 justify-start">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Stack:
                </p>
                <div className="flex flex-row gap-4 justify-start">
                  {service.imagenes?.map((imagen, index) => (
                    <Image
                      key={index}
                      src={imagen}
                      alt={imagen}
                      width={30}
                      height={20}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
