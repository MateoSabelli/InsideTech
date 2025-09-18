import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Box } from 'lucide-react';

export default function Soporte() {
  return (
    <div className="">
      <HeroServices
        title="Soporte"
        description="Operamos tu plataforma para que alcance su máximo potencial"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] mb-12">
            Mantenemos en excelentes condiciones tu infraestructura, brindándote
            la seguridad y tranquilidad que tu organización necesita.
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Columna izquierda - Perfiles buscados */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
              <p className="text-gray-700 text-base">
                Dentro de nuestro porfolio de servicios contamos con diferentes
                opciones de soporte que se adaptan a las necesidades de nuestros
                clientes
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
              <p className="text-gray-700 text-base">
                Disponemos de sistemas de cobertura 5×9 y 7×24, vía telefónica,
                remota y on-site con distintos niveles de SLA
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
              <p className="text-gray-700 text-base">
                Nuestro equipo de especialistas estará a disposición para
                resolver cualquier problema técnico o funcional
              </p>
            </div>
          </div>

          <div className="rounded-lg p-6 flex items-center justify-center">
            <Image
              src="/soporte/soporte.png"
              alt="Soporte"
              width={700}
              height={700}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className=" text-center max-w-7xl mx-auto pt-4 md:pt-12">
          <h3 className="text-3xl font-semibold text-[#39506D] mb-8">
            Contáctanos y potenciá la evolución de tus sistemas con nuestro
            servicio de Operación y Gestión
          </h3>
          <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-4 rounded-full h-[40px] w-[250px] ">
            Coordinar reunión
          </Button>
        </div>
      </div>
    </div>
  );
}
