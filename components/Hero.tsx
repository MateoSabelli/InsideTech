"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";/* 
import { ReactTyped } from "react-typed"; */
import { FloatingIcons } from "./FloatingIcons";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-lighter to-dark px-4 relative overflow-hidden" id="inicio">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/40 blur-[150px] rounded-full animate-blob -z-0 hidden md:block" />
      <div className="absolute bottom-30 right-0 w-[500px] h-[500px] bg-cyan-500/40 blur-[150px] rounded-full animate-blob -z-0 hidden md:block" />
      <div className=" absolute bottom-50 right-50 w-[300px] h-[300px] bg-cyan-500/40 blur-[150px] rounded-full animate-blob -z-0 md:hidden block" />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      </motion.div>
      <FloatingIcons />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 backdrop-blur-sm"
          >
            Infraestructura y DevOps
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-dark-foreground leading-tight"
          >
            Impulsando tu transformación con soluciones de
            <span className="text-primary"> infraestructura y DevOps</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-dark-foreground/80 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Acompañamos a empresas en el diseño, la implementación y el soporte de entornos de TI escalables. 
            Optimiza tu infraestructura con nuestros servicios de consultoría, DevOps y monitoreo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 backdrop-blur-sm"
              asChild
            >
              <Link href="/servicios">Conoce nuestros servicios</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-dark-foreground/20 hover:bg-dark-foreground/5 text-dark-foreground backdrop-blur-sm"
              asChild
            >
              <Link href="/contacto">Contáctanos para tu proyecto</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex justify-center items-center gap-8"
          >
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};