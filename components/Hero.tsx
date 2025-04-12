"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";/* 
import { ReactTyped } from "react-typed"; */

export const Hero = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center px-4 relative overflow-hidden" id="inicio">
      {/* Elementos de fondo animados */}
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
          {/* <motion.span 
            className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 backdrop-blur-sm hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Infraestructura y DevOps
          </motion.span>   */}
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