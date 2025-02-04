"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";/* 
import { ReactTyped } from "react-typed"; */
import { FloatingIcons } from "./FloatingIcons";
import { InfiniteGallery } from "./Clients";
import BackgroundVideo from "./BackgroundVideo";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-lighter to-dark px-4 relative overflow-hidden" id="inicio">
       <BackgroundVideo /> 
      <div className="absolute top-0 left-0 w-[200px] h-[200px]  blur-[150px] rounded-full blur-container -z-0 block animate-blob" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] blur-[150px] rounded-full blur-container -z-0 block animate-blob" />
      {/* <div className="dot-pattern dark:hidden " aria-hidden="true" /> */}
      <FloatingIcons />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      </motion.div>
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
            className="text-4xl md:text-6xl font-bold text-black dark:text-white leading-tight"
          >
            Impulsando tu transformación con soluciones de
            <span className="text-primary"> infraestructura y DevOps</span>
            
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl"
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
              className=" hover:bg-dark-foreground/5 hover:text-white text-dark-foreground backdrop-blur-sm"
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
      <div className="video-overlay"></div>
    </div>
  );
};