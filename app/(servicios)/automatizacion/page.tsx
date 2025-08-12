import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div>
      <div className="fondo h-[20vh] flex items-center justify-between ">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-10">
          <h1 className="text-white text-4xl font-bold">Automatización</h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-white text-xl max-w-2xl">
              Automatiza procesos y reduce errores, mejorando la eficiencia y la
              calidad de tus operaciones.
            </p>
            <Button>
              <Link href="/contact">Contacto</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
