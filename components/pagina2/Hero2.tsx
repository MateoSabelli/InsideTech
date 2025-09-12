import React from 'react';
import { Button } from '../ui/button';

export default function Hero2() {
  return (
    <section className="text-white  md:py-16 px-4 relative overflow-hidden fondo min-h-[80vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col justify-center items-center gap-6 md:gap-8">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-center max-w-5xl font-extrabold leading-tight mx-auto md:mx-0">
            INNOVACIÓN Y TECNOLOGÍA QUE TRANSFORMAN TU NEGOCIO
          </h1>
          <p className="text-base md:text-lg mb-2 md:mb-4 max-w-2xl text-white">
            En InsideTech impulsamos la transformación digital de las
            organizaciones mediante soluciones tecnológicas innovadoras y
            estratégicas.
          </p>
          <Button className="w-full sm:w-auto bg-white text-slate-800 hover:bg-gray-100 px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-md font-semibold rounded-md">
            CONTÁCTANOS PARA TU PROYECTO
          </Button>
        </div>
      </div>
    </section>
  );
}
