import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import { Box, CircleCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ITSM() {
  return (
    <div className="">
      <HeroServices
        title="ITSM"
        description="Gestión inteligente de servicios de TI para una operación más ágil, eficiente y segura."
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] mb-12">
            Implementamos soluciones que te permiten administrar, automatizar y
            optimizar tus servicios tecnológicos con las mejores prácticas del
            mercado, basadas en ITIL®
          </h2>
        </div>
        <div className="max-w-5xl mx-auto pt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda - ¿Qué es ITSM? */}
            <div>
              {/* Principales beneficios */}
              <div>
                <h4 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                  Nuestras soluciones
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <div>
                      <p className="text-gray-600 text-sm">
                        <span className="text-[#6AA2CC] text-base font-semibold">
                          Mesa de servicio y soporte:{' '}
                        </span>
                        Gestión centralizada de incidentes, solicitudes y
                        problemas, con tiempos de respuesta óptimos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <div>
                      <p className="text-gray-700 text-sm">
                        <span className="text-[#6AA2CC] text-base font-semibold">
                          Gestión de activos y configuración (CMDB):{' '}
                        </span>
                        Inventario actualizado y relaciones entre componentes
                        para un control preciso de la infraestructura.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <div>
                      <p className="text-gray-700 text-sm">
                        <span className="text-[#6AA2CC] text-base font-semibold">
                          Gestión de cambios y versiones:{' '}
                        </span>
                        Implementa mejoras de forma controlada, reduciendo
                        riesgos y asegurando continuidad.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <div>
                      <p className="text-gray-700 text-sm ">
                        <span className="text-[#6AA2CC] text-base font-semibold">
                          Automatización de flujos:{' '}
                        </span>
                        Procesos predefinados que agilizan aprobaciones,
                        asignaciones y seguimiento.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <div>
                      <p className="text-gray-700 text-sm ">
                        <span className="text-[#6AA2CC] text-base font-semibold">
                          Reportes y analítica:{' '}
                        </span>
                        Indicadores clave (KPIs) para tomar decisiones y mejora
                        continua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Dashboard mockup */}
            <div>
              <div>
                <h3 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                  Beneficios de ITSM
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-600 text-sm">
                    <span className="text-[#6AA2CC] text-base font-semibold">
                      Eficiencia operativa:{' '}
                    </span>
                    Reduce tiempos de resolución y mejora la productividad de tu
                    equipo.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-600 text-sm">
                    <span className="text-[#6AA2CC] text-base font-semibold">
                      Automatización inteligente:{' '}
                    </span>
                    Minimiza tareas repetitivas y errores humanos.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <div>
                    <p className="text-gray-600 text-sm">
                      <span className="text-[#6AA2CC] text-base font-semibold">
                        Visibilidad total:
                      </span>
                      Control centralizado de todos los servicios y activos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <div>
                    <p className="text-gray-600 text-sm">
                      <span className="text-[#6AA2CC] text-base font-semibold">
                        Mejor experiencia de usuario:
                      </span>
                      Atención rápida, eficaz y personalizada.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <div>
                    <p className="text-gray-600 text-sm">
                      <span className="text-[#6AA2CC] text-base font-semibold">
                        Escalabilidad:
                      </span>
                      Crece y adapta tus servicios a medida que evoluciona tu
                      negocio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 max-w-5xl mx-auto mt-12">
            <Link
              href="/zabbix"
              className="flex items-center gap-3 bg-white  rounded-lg px-6 py-4  hover:shadow-md hover:border-2 hover:border-gray-200  transition-shadow cursor-pointer group"
            >
              <div>
                <p className="text-[#39506D] font-semibold text-3xl">
                  Saber más
                </p>
                <p className="text-[#39506D] font-semibold text-2xl">Zabbix</p>
              </div>
              <div className="text-[#39506D] group-hover:translate-x-1 transition-transform">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/grafana"
              className="flex items-center gap-3 hover:shadow-lg hover:border-2 hover:border-gray-200 rounded-lg px-6 py-4 cursor-pointer group"
            >
              <div>
                <p className="text-[#39506D] font-semibold text-3xl">
                  Saber más
                </p>
                <p className="text-[#39506D] font-semibold text-2xl">Grafana</p>
              </div>
              <div className="text-[#39506D] group-hover:translate-x-1 transition-transform">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className=" text-center max-w-7xl mx-auto pt-4 md:pt-28">
            <h3 className="text-3xl font-semibold max-w-7xl mx-auto text-[#39506D] mb-8">
              Contactanos para una demo personalizada y descubrí cómo ITSM puede
              transformar la gestión de servicios de tu organización
            </h3>
            <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-4 rounded-full h-[40px] w-[250px] ">
              Solicitar demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
