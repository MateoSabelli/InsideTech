import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Box, CircleCheck } from 'lucide-react';

export default function Zabbix() {
  return (
    <div className="">
      <HeroServices
        title="Zabbix"
        description="Supervisión inteligente para tu infraestructura IT"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl max-w-2xl mx-auto font-semibold text-[#39506D] mb-12">
            Monitoreo en tiempo real para un negocio más ágil, seguro y
            eficiente
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda - ¿Qué es Zabbix? */}
            <div>
              <h3 className="text-3xl font-medium text-[#6AA2CC] mb-6">
                ¿Qué es Zabbix?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Es una plataforma open source líder a nivel mundial para el
                  monitoreo de redes, servidores, aplicaciones, servicios en la
                  nube y más.
                </p>
                <p className="text-lg">
                  Su objetivo es ofrecer visibilidad total y en tiempo real del
                  rendimiento y estado de su infraestructura IT, permitiendo
                  actuar de forma proactiva ante cualquier incidente.
                </p>
              </div>

              {/* Principales beneficios */}
              <div className="mt-8">
                <h4 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                  Principales beneficios
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Monitoreo Integral:
                      </span>{' '}
                      supervisión completa desde hardware físico y redes hasta
                      entornos virtualizados y servicios cloud.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Alertas Inteligentes:
                      </span>{' '}
                      sistema de notificaciones automáticas configurables que
                      garantizan respuesta inmediata ante incidencias críticas.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Escalabilidad Empresarial:
                      </span>{' '}
                      arquitectura flexible que se adapta desde pequeñas
                      empresas hasta grandes corporaciones multinacionales.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Open Source Premium:
                      </span>{' '}
                      plataforma sin costos de licenciamiento con dashboards
                      personalizables para cada necesidad de negocio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-6 min-h-[400px] flex items-start justify-center ">
                <Image
                  src="/zabbix/dashboard3.png"
                  alt="Dashboard de Zabbix mostrando métricas en tiempo real"
                  width={450}
                  height={450}
                  className="rounded-lg "
                />
              </div>
            </div>

            {/* Columna derecha - Dashboard mockup */}
            <div>
              <div className="rounded-lg p-6 min-h-[400px] flex items-center justify-center">
                <Image
                  src="/zabbix/dashboard1.png"
                  alt="Dashboard de Zabbix mostrando métricas en tiempo real"
                  width={500}
                  height={500}
                  className="rounded-lg "
                />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                  Características destacadas
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Visibilidad en tiempo real:
                    </span>{' '}
                    Paneles dinámicos y personalizables para analizar el estado
                    de toda la infraestructura.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium  text-[#6AA2CC]">
                      Alertas multi-canal:
                    </span>{' '}
                    Envío de notificaciones vía email, SMS, mensajería
                    instantánea y herramientas de colaboración.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Integración flexible:{' '}
                    </span>{' '}
                    Compatible con soluciones como Grafana, Ansible, VMware,
                    AWS, Azure, entre otras.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Análisis predictivo:
                    </span>{' '}
                    Identificación de tendencias y detección temprana de
                    problemas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Alta seguridad:
                    </span>{' '}
                    Comunicación cifrada y gestión centralizada de usuarios y
                    permisos.
                  </p>
                </div>
              </div>
              <div className="rounded-lg p-6 min-h-[400px] flex items-center justify-center lg:hidden">
                <Image
                  src="/zabbix/dashboard3.png"
                  alt="Dashboard de Zabbix mostrando métricas en tiempo real"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Sección de beneficios finales */}
          <div className="mt-12">
            <div className="text-center ">
              <p className="text-3xl font-semibold text-[#39506D] max-w-7xl mx-auto">
                Con Zabbix, su empresa obtiene control total, reduciendo tiempos
                de inactividad, optimizando recursos y mejorando la experiencia
                del usuario final
              </p>
            </div>

            {/* Mockup de dashboards */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-20 mb-4 ">
              <div className="rounded-lg  py-8 flex items-center justify-center">
                <Image
                  src="/zabbix/dashboard4.png"
                  alt="Dashboard de Zabbix mostrando métricas en tiempo real"
                  width={500}
                  height={300}
                  className="rounded-lg "
                />
              </div>
              <div className="rounded-lg  py-8 flex items-center justify-center">
                <Image
                  src="/zabbix/dashboard5.png"
                  alt="Dashboard de Zabbix mostrando métricas en tiempo real"
                  width={500}
                  height={300}
                  className="rounded-lg "
                />
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className=" text-center max-w-5xl mx-auto">
            <h3 className="text-3xl font-semibold max-w-6xl mx-auto text-[#39506D] mb-8">
              Contactanos para una demo personalizada y descubrí cómo Zabbix
              puede transformar la gestión de tu infraestructura.
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
