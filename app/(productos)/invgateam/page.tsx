import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Box, CircleCheck } from 'lucide-react';

export default function InvGateAM() {
  return (
    <div className="">
      <HeroServices
        title="InvGate Asset Management"
        description="Descubrí y centralizá tus activos de TI"
      />
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] mb-12">
              La solución inteligente para tu inventario de activos físicos,
              virtuales y en la nube
            </h2>
          </div>
          <div className="max-w-7xl mx-auto py-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start pb-20">
              {/* Columna izquierda - ¿Qué es Zabbix? */}
              <div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg text-center">
                    Descubrí, gestioná e informá automáticamente sobre tu
                    inventario de activos, estén donde estén.
                  </p>
                </div>

                <div className="rounded-lg py-8 flex items-center justify-center ml-6">
                  <Image
                    src="/invgate/invgateam.png"
                    alt="Dashboard de Grafana mostrando métricas en tiempo real"
                    width={500}
                    height={500}
                    className="rounded-lg "
                  />
                </div>
              </div>

              {/* Columna derecha - Dashboard mockup */}

              <div className="flex flex-col items-center justify-center">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Descubre activos conectados en toda la organización
                      </span>{' '}
                      <br />
                      Comprendé tus activos informáticos y cómo se relacionan
                      entre sí
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Explorador de Activos
                      </span>{' '}
                      <br />
                      Monitoreá todos tus CIs y mantenete al tanto de sus
                      cambios y ciclo de vida
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Gestión de Inventario
                      </span>{' '}
                      <br />
                      Obtené una visión exhaustiva de todos tus activos, bien
                      sean hardware, software, cloud y/o mobile
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Auto Discovery
                      </span>{' '}
                      <br />
                      Detectá todos los CIs conectados a la web en un rango
                      preconfigurado de IPs
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Campos Personalizados
                      </span>{' '}
                      <br />
                      Hacé que la información sea manejable con campos
                      personalizados que se adapten a tus necesidades
                    </p>
                  </div>
                </div>
                <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-12 rounded-full h-[40px] w-[250px] ">
                  Brochure
                </Button>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Columna izquierda - ¿Qué es Zabbix? */}

              {/* Columna derecha - Dashboard mockup */}

              <div className="flex flex-col items-center justify-center">
                <h3 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] mb-12">
                  Maximizá tu productividad con Asset Management
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Optimizá el uso de licencias de software
                      </span>{' '}
                      <br />
                      Obtené informes y métricas del uso de software para
                      optimizar recursos y reducir costos, asignando activos de
                      software según la demanda
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Detectá software no permitido
                      </span>{' '}
                      <br />
                      Implementá políticas de software, identificá instalaciones
                      no autorizadas y versiones incompatibles
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Auditá licencias de software
                      </span>{' '}
                      <br />
                      Obtené reportes de manera sencilla sobre el uso de
                      software comercial, detectá instalaciones no autorizadas y
                      supervisá el cumplimiento de contratos
                    </p>
                  </div>
                </div>
                <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-12 rounded-full h-[40px] w-[250px] ">
                  Solicitar demo
                </Button>
              </div>
              <div>
                <h3 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] text-center mb-12">
                  Licencias de Software
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg   text-center">
                    Accedé a una vista total del uso de software y licencias.
                  </p>
                </div>

                <div className="rounded-lg py-8 flex items-center justify-center ml-6">
                  <Image
                    src="/invgate/invgateam2.png"
                    alt="Dashboard de Grafana mostrando métricas en tiempo real"
                    width={500}
                    height={500}
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div>

            {/* Sección de productos Red Hat */}
          </div>
        </div>
        <div className=" space-y-16 bg-[#F0F3F7] ">
          {/* Sección de características con tarjetas */}
          <div className="py-20 space-y-16 h-full">
            <h3 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] mb-12 text-center">
              Conocé tus activos: descubrí, gestioná y reportá
            </h3>

            {/* Grid de tres tarjetas */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Tarjeta 1 - Building blocks */}
              <div className="bg-gray-50 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-lg mb-6 h-48 flex items-center justify-center">
                  <Image
                    src="/invgate/imgam1.png"
                    alt="Dashboard de Grafana mostrando métricas en tiempo real"
                    width={500}
                    height={500}
                    className="rounded-lg "
                  />
                </div>
                <h4 className="text-xl font-medium text-[#39506D] mb-4 text-center">
                  Entendé tu inventario con auto-Discovery y CMDB
                </h4>
              </div>

              {/* Tarjeta 2 - Plantillas personalizables */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-lg  mb-6 h-48 flex items-center justify-center">
                  <Image
                    src="/invgate/imgam2.png"
                    alt="Dashboard de Grafana mostrando métricas en tiempo real"
                    width={500}
                    height={500}
                    className="rounded-lg "
                  />
                </div>
                <h4 className="text-xl font-medium text-[#39506D] mb-4 text-center">
                  Garantizá el cumplimiento de políticas con alertas y
                  despliegue de software
                </h4>
              </div>

              {/* Tarjeta 3 - Workflows empresariales */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-lg  mb-6 h-48 flex items-center justify-center">
                  <Image
                    src="/invgate/imgam3.png"
                    alt="Dashboard de Grafana mostrando métricas en tiempo real"
                    width={500}
                    height={500}
                    className="rounded-lg "
                  />
                </div>
                <h4 className="text-xl font-medium text-[#39506D] mb-4 text-center">
                  Programá el envío de reportes prediseñados y personalizados
                  por correo electrónico
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className=" text-center max-w-6xl mx-auto pt-4 md:py-28 ">
          <h3 className="text-3xl font-semibold text-[#39506D] mb-8">
            Contáctanos para una demo personalizada y descubrí cómo InvGate AM
            puede transformar la gestión de tus activos.
          </h3>
          <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-4 rounded-full h-[40px] w-[250px] ">
            Solicitar demo
          </Button>
        </div>
      </div>
    </div>
  );
}
