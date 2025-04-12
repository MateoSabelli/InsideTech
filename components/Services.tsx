/* "use client"
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
}; */

"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconFileBroken,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import { CloudCog, HeadphonesIcon, Server, Users } from "lucide-react";

export function BentoGridThirdDemo() {
  return (
    <section className="py-20 relative" id="servicios">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Soluciones Tecnológicas
            </span>
            <br />
            <span className="text-gray-800">
              que impulsan tu negocio
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transformamos desafíos en oportunidades con soluciones IT innovadoras y personalizadas
          </p>
        </motion.div>
      </div>
      <BentoGrid className="container mx-auto md:auto-rows-[20rem]">
        
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </section>
  );
}
  
const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const technologies = [
    { name: "Docker", icon: "🐳", delay: 0 },
    { name: "Kubernetes", icon: "☸️", delay: 0.2 },
    { name: "Jenkins", icon: "🛠️", delay: 0.4 },
    { name: "Git", icon: "📦", delay: 0.6 },
    { name: "AWS", icon: "☁️", delay: 0.8 },
    { name: "Terraform", icon: "🏗️", delay: 1 },
    { name: "Ansible", icon: "⚙️", delay: 1.2 },
    { name: "Prometheus", icon: "📊", delay: 1.4 },
  ];
  return (
    <div className="relative w-full h-full overflow-hidden">
      {technologies.map((tech) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: tech.delay,
            ease: "easeInOut"
          }}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
        >
          <span className="inline-block hover:scale-110 transition-transform">
            {tech.icon}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {  
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex shadow-lg  flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full shadow-lg w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/INSIDETECH.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/INSIDETECH.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/INSIDETECH.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="/INSIDETECH.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Consultoría e Implementación",
    description: (
      <span className="text-sm">
        Infraestructuras on-premise, híbridas o en la nube, ajustadas a tus necesidades. Diseñamos soluciones personalizadas para potenciar tu negocio con las mejores prácticas del mercado.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-2",
    icon: <Server className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "DevOps y Automatización",
    description: (
      <span className="text-sm">
        Acelera tus ciclos de desarrollo y mejora la eficiencia de tu software. Implementamos soluciones de CI/CD y automatización que optimizan tus procesos de desarrollo.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Soporte IT y Outsourcing",
    description: (
      <span className="text-sm">
        Soporte técnico integral y planes de outsourcing de IT disponibles 24/7. Resolución proactiva de incidentes y mantenimiento preventivo para garantizar la continuidad de tu negocio.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <HeadphonesIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Monitoreo y Gestión",
    description: (
      <span className="text-sm">
        Soluciones de monitoreo inteligente y gestión de agentes. Detecta y resuelve problemas antes de que afecten tu negocio con herramientas como Zabbix y Grafana.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Migraciones",
    description: (
      <span className="text-sm">
        Transición segura de tus sistemas a la nube o nuevos entornos. Planificamos y ejecutamos migraciones con mínimo impacto en tus operaciones.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-2",
    icon: <CloudCog className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "RRHH",
    description: (
      <span className="text-sm">
        Brindamos personas capacitadas para que puedas enfocarte en tu negocio. Contamos con un equipo de profesionales especializados en tecnología.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <Users className="h-4 w-4 text-neutral-500" />,
  },
];

