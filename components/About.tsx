"use client";
import { motion } from "framer-motion";
import {
  Target,
  MessageSquare,
  Rocket,
  LineChart,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Compromiso",
    description:
      "Alineamos cada solución a los objetivos de tu negocio.",
  },
  {
    icon: MessageSquare,
    title: "Transparencia",
    description:
      "Comunicamos de forma clara cada etapa y resultado del proyecto.",
  },
  {
    icon: Rocket,
    title: "Innovación Continua",
    description:
      "Nos mantenemos actualizados en tecnologías y metodologías (DevOps, Cloud, Contenedores, etc.).",
  },
  {
    icon: LineChart,
    title: "Orientación al Éxito",
    description:
      "Medimos y supervisamos indicadores para garantizar resultados tangibles.",
  },
];

export const About = () => {
  return (
    <section className="py-20  relative" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Quiénes Somos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">
            Un equipo especializado en infraestructura, DevOps y soporte IT
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-lg">
            En InsideTech somos apasionados por la innovación y la excelencia en TI. 
            Nuestro equipo multidisciplinario cuenta con años de experiencia diseñando, 
            implementando y gestionando infraestructuras robustas para empresas de diversos sectores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-muted">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};