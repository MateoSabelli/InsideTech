/* "use client"
import React from 'react'
import { Button } from './ui/button'
import { ReactTyped } from 'react-typed'

export default function Hero() {
  return (
    <div className='max-w-6xl mx-auto h-[100vh]'>
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-40 text-center">
        <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl leading-[-2%] "> 
          Brindamos soluciones para tu{" "}
          <ReactTyped
            strings={["Infraestructura"]}
            typeSpeed={200}
            backSpeed={100}
            loop
            className="text-[#00E5E5]"
          />
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Somos una empresa con +22 años en el mercado ofreciendo soluciones personalizadas para impulsar el{" "}
          <span className="text-[#00E5E5]">crecimiento</span> y la{" "}
          <span className="text-[#00E5E5]">eficiencia</span> de tu negocio.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <Button
            className="bg-[#00E5E5] text-white hover:bg-[#00E5E5]/90 border-1 "
          >
            Nuestros Servicios
          </Button>
          <Button
            variant="outline"
            className="border-white text-black hover:bg-white/10"
          >
            Contactanos
          </Button>
        </div>
     </main>
     <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full animate-blob" />
     
    </div>
  )
}
 */

"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent via-white to-white px-4 relative" id="inicio">
      <div className="max-w-7xl mx-auto text-center h-screen flex flex-col justify-center items-center"> 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Infraestructura y DevOps
          </span>  
          <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
            Impulsando tu transformación con soluciones de {" "}
            <ReactTyped
            strings={["infraestructura y DevOps"]}
            typeSpeed={200}
            className="text-primary"
          />
            {/* <span className="text-primary"> infraestructura y DevOps</span> */}
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-lg md:text-xl">
            Acompañamos a empresas en el diseño, la implementación y el soporte de entornos de TI escalables. 
            Optimiza tu infraestructura con nuestros servicios de consultoría, DevOps y monitoreo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8"
              asChild
            >
              <Link href="/servicios">Conoce nuestros servicios</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 hover:bg-secondary/5"
              asChild
            >
              <Link href="#contacto">Contáctanos para tu proyecto</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/30 blur-[150px] rounded-full animate-blob" />
    </div>
  );
};