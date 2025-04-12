"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const FloatingLogos = () => {
  const logos = [
    { src: "hero/docker.svg", alt: "Docker", delay: 0 },
    { src: "hero/kubernetes.svg", alt: "Kubernetes", delay: 0.2 },
    { src: "hero/aws.svg", alt: "AWS", delay: 0.4 },
    { src: "hero/azure.svg", alt: "Azure", delay: 0.6 },
    { src: "hero/ansible.svg", alt: "Ansible", delay: 0.8 },
    { src: "hero/jenkins.svg", alt: "Jenkins", delay: 1 },
    { src: "hero/prometheus.svg", alt: "Prometheus", delay: 1.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {logos.map((logo) => (
        <motion.div
          key={logo.alt}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.8],
            x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: logo.delay,
            ease: "easeInOut",
          }}
          className="absolute w-16 h-16"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="min-h-screen pt-12 flex items-center justify-center px-4 relative overflow-hidden" id="inicio">
      <FloatingLogos />
      <motion.div
        className="absolute w-[800px] h-[800px] -top-40 -left-40 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bottom-40 right-0 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -100, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10 h-screen flex flex-col justify-center items-center"> 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Impulsando tu transformación con soluciones de{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              infraestructura y DevOps
            </span>
          </h1>
          <p className="text-muted max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Acompañamos a empresas en el diseño, la implementación y el soporte de entornos de TI escalables. 
            Optimiza tu infraestructura con nuestros servicios de consultoría, DevOps y monitoreo.
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/servicios">Conoce nuestros servicios</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
                asChild
              >
                <Link href="#contacto">Contáctanos para tu proyecto</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};