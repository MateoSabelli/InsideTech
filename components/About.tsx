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
    title: "23 Años de Experiencia",
    description:
      "Pioneros en soluciones Linux y open source, transformando la infraestructura tecnológica de empresas globales.",
  },
  {
    icon: MessageSquare,
    title: "Enfoque Personalizado",
    description:
      "Combinamos expertise técnico con un trato cercano, adaptando cada solución a tus necesidades específicas.",
  },
  {
    icon: Rocket,
    title: "Innovación Constante",
    description:
      "Mantenemos la vanguardia en DevOps, Cloud y Contenedores, ofreciendo soluciones de última generación.",
  },
  {
    icon: LineChart,
    title: "Resultados Comprobados",
    description:
      "Nuestra trayectoria y casos de éxito nos avalan como referentes en la industria tecnológica.",
  },
];

export const About = () => {
  return (
    <section className="py-20 relative" id="nosotros">
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-primary/20 blur-[150px] rounded-full -z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Quiénes Somos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary dark:text-white mb-6">
            Transformando la tecnología desde 2002
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-lg">
            Somos especialistas en soluciones Linux y open source, con más de dos décadas de experiencia 
            ayudando a empresas a optimizar su infraestructura tecnológica. Nuestro enfoque combina 
            expertise técnico con un trato cercano, asegurando que cada proyecto alcance su máximo potencial.
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