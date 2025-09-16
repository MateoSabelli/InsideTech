import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import Image from 'next/image';
import { Box, CircleCheck } from 'lucide-react';

export default function Staffing() {
  return (
    <div className="">
      <HeroServices
        title="Staffing"
        description="Seleccionamos talento que responde a tus necesidades"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] mb-12">
            Nuestro objetivo es proveer servicios profesionales o equipos de
            trabajo con alta calificación técnica que permitan a la organización
            ser más eficiente
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Columna izquierda - Perfiles buscados */}
          <div>
            <h3 className="text-3xl font-medium text-[#6AA2CC] mb-6">
              Perfiles buscados
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base">
                  Analistas Técnicos y Funcionales.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base">Líderes de Proyecto.</p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base">Consultores.</p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base">
                  Administradores de Bases de Datos.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base">
                  Administrador de Infraestructura.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base">
                  Perfiles específicos requeridos por el cliente.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-6 flex items-center justify-center">
            <Image
              src="/staffing/staffing.png"
              alt="Staffing"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mb-12 max-w-5xl mx-auto">
          <h3 className="text-3xl font-medium text-[#6AA2CC] mb-8">
            ¿Como es nuestro proceso?
          </h3>
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-4 h-full w-0.5 bg-[#6AA2CC]"></div>

            {/* Elementos del timeline */}
            <div className="space-y-12 ml-12">
              {/* Elemento 1 */}
              <div className="relative">
                <div className="absolute -left-12 -mt-1">
                  <div className="w-8 h-8 bg-[#6AA2CC] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[#6AA2CC] font-semibold">
                    Relevamiento del puesto
                  </p>
                  <p className="text-gray-700 text-base max-w-xs">
                    Una vez recibida tu solicitud, nuestro Departamento se pone
                    en contacto con el responsable de la búsqueda en tu empresa
                    para hacer un relevamiento del perfil del puesto.
                  </p>
                </div>
              </div>

              {/* Elemento 2 */}
              <div className="relative">
                <div className="absolute -left-12 -mt-1">
                  <div className="w-8 h-8 bg-[#6AA2CC] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[#6AA2CC] font-semibold">
                    Reclutamiento, Selección y Presentación
                  </p>
                  <p className="text-gray-700 text-base">
                    Contamos con acceso a bases de datos, redes sociales,
                    convenio con universidades, etc. Realizamos las primeras
                    entrevistas a los candidatos preseleccionados y coordinamos
                    las entrevistas de presentación de los candidatos
                    seleccionados.
                  </p>
                </div>
              </div>

              {/* Elemento 3 */}
              <div className="relative">
                <div className="absolute -left-12 -mt-1">
                  <div className="w-8 h-8 bg-[#6AA2CC] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-[#6AA2CC] font-semibold">Incorporación</p>
                  <p className="text-gray-700 text-base">
                    En base al resultado de las entrevistas realizadas por tu
                    empresa, comunicamos el resultado a los candidatos y
                    ejecutamos la incorporación del recurso seleccionado previo
                    realización de exámenes psicotécnicos y físicos en alguna de
                    las modalidades:
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Box className="w-5 h-5 text-[#EBBA55] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-base">
                        Incorporando al candidato como empleado en tu empresa.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      {/* Icono cubo */}
                      <Box className="w-5 h-5 text-[#EBBA55] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-base">
                        Prestando servicios profesionales como empleado de
                        InsideTech (*).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                (*) Seguimiento del Servicio: Contamos con Coordinadores de
                Servicio que supervisan el desempeño de los recursos, el
                cumplimiento de asistencia, tiempos y entregables, mediante
                visitas en las oficinas del cliente y reuniones de seguimiento
                conjuntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
