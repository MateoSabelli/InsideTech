"use client";

import { motion } from "framer-motion";
import {
  Server,
  GitBranch,
  HeadphonesIcon,
  Activity,
  ArrowRight,
  CloudCog,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const services = [
  {
    icon: Server,
    title: "Consultoría e Implementación",
    description: "Infraestructuras on-premise, híbridas o en la nube, ajustadas a tus necesidades.",
    link: "/servicios/consultoria",
  },
  {
    icon: GitBranch,
    title: "DevOps y Automatización",
    description: "Acelera tus ciclos de desarrollo y mejora la eficiencia de tu software.",
    link: "/servicios/devops",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte IT y Outsourcing",
    description: "Soporte técnico integral y planes de outsourcing de IT.",
    link: "/servicios/soporte",
  },
  {
    icon: Activity,
    title: "Monitoreo y Gestión",
    description: "Soluciones de monitoreo inteligente y gestión de agentes.",
    link: "/servicios/monitoreo",
  },
  {
    icon: CloudCog,
    title: "Migraciones",
    description: "Transición segura de tus sistemas a la nube o nuevos entornos.",
    link: "/servicios/migraciones",
  },
];

export const Services = () => {
  return (
    <section className="py-20 relative" id="servicios">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full animate-blob" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold  dark:text-white">
            Soluciones que se adaptan a tu negocio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/80 dark:bg-black/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-muted mb-4">{service.description}</p>
              <Button variant="ghost" asChild className="group">
                <Link href={service.link}>
                  Conoce más
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};