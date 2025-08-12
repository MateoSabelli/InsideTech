import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div>
      <div className="fondo min-h-[30vh] md:h-[20vh] flex items-center justify-between py-8 md:py-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center md:text-left">
            Staffing
          </h1>
          <div className="flex flex-col items-center md:items-start justify-center gap-4">
            <p className="text-white text-lg md:text-xl max-w-2xl text-center md:text-left">
              Contrata talento especializado para mejorar la eficiencia y la
              calidad de tus operaciones.
            </p>
            <Button className="w-[200px] md:w-auto">
              <Link href="/contact">Contacto</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
