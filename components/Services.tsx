"use client"
import { motion } from "framer-motion";
import {
  Server,
  GitBranch,
  HeadphonesIcon,
  Activity,
  ArrowRight,
  CloudCog,
  Users 
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const services = [
  {
    icon: Server,
    title: "Consultoría e Implementación",
    description: "Infraestructuras on-premise, híbridas o en la nube, ajustadas a tus necesidades. Diseñamos soluciones personalizadas para potenciar tu negocio con las mejores prácticas del mercado.",
    link: "/servicios/consultoria",
    span: true
  },
  {
    icon: GitBranch,
    title: "DevOps y Automatización",
    description: "Acelera tus ciclos de desarrollo y mejora la eficiencia de tu software. Implementamos soluciones de CI/CD y automatización que optimizan tus procesos de desarrollo.",
    link: "/servicios/devops"
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte IT y Outsourcing",
    description: "Soporte técnico integral y planes de outsourcing de IT disponibles 24/7. Resolución proactiva de incidentes y mantenimiento preventivo para garantizar la continuidad de tu negocio.",
    link: "/servicios/soporte",
    
  },
  {
    icon: Activity,
    title: "Monitoreo y Gestión",
    description: "Soluciones de monitoreo inteligente y gestión de agentes. Detecta y resuelve problemas antes de que afecten tu negocio con herramientas como Zabbix y Grafana.",
    link: "/servicios/monitoreo",
    span: true
  },
  {
    icon: CloudCog,
    title: "Migraciones",
    description: "Transición segura de tus sistemas a la nube o nuevos entornos. Planificamos y ejecutamos migraciones con mínimo impacto en tus operaciones.",
    link: "/servicios/migraciones",
    span: true
  },
  {
    icon: Users,
    title: "RRHH",
    description: "Brindamos personas capacitadas para que puedas enfocarte en tu negocio. Contamos con un equipo de profesionales especializados en tecnología.",
    link: "/servicios/migraciones",
  },
];

export const Services = () => {
  return (
    <section className="py-20 relative" id="servicios">
      <div className="absolute top-0 left-0 w-[200px] h-[200px]  blur-[150px] rounded-full blur-container -z-0 block animate-blob" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Soluciones que se adaptan a tu negocio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofrecemos servicios integrales de IT diseñados para transformar los desafíos tecnológicos en ventajas competitivas para tu empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.span ? 'lg:col-span-2' : ''}`}
            >
              <div className="group bg-zinc-900 border border-zinc-800 hover:border-primary/20 rounded-lg p-6 h-full transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary group-hover:rotate-3 transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <Button variant="ghost" asChild className="group">
                  <Link href={service.link} className="text-primary hover:text-primary/80">
                    Conoce más
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};