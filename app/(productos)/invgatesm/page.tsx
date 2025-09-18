import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Box, CircleCheck } from 'lucide-react';

export default function InvGateSM() {
  return (
    <div className="">
      <HeroServices
        title="InvGate Service Management"
        description="Gestión de incidentes inteligente, moderno y potente"
      />
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] mb-12">
              Construí una mesa de servicios de última generación de emisión de
              tickets, automatización de flujos de trabajo y funcionalidades
              preparadas para ITIL
            </h2>
          </div>
          <div className="max-w-7xl mx-auto pt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Columna izquierda - ¿Qué es Zabbix? */}
              <div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg text-justify">
                    InvGate Service Management simplifica el trabajo de los
                    agentes al priorizar tareas según su importancia, tiempos de
                    respuesta y urgencia. Además, identifica acciones rápidas
                    para evitar retrasos.
                  </p>
                </div>

                <div className="rounded-lg py-8 flex items-center justify-center ml-6">
                  <Image
                    src="/invgate/invgatesm.png"
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
                        Cooperación entre equipos
                      </span>{' '}
                      <br />
                      Brinda una visión integral de las actualizaciones en los
                      tickets, solicitudes relacionadas y configuraciones.
                      Acceso rápido a la base de conocimientos, tareas de
                      tickets y la opción de agregar observadores y aprobadores
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Interfaz de usuario moderna para una mejor gestión
                      </span>{' '}
                      <br />
                      InvGate Service Desk ayuda a los agentes a priorizar y
                      manejar solicitudes resaltando las que requieren atención
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Ofrece a los agentes herramientas para evaluar y crecer
                        en su desempeño
                      </span>{' '}
                      <br />
                      Usando datos de tiempos de solicitud, seguimiento de
                      tiempo y opiniones de clientes, se brindan a los agentes
                      herramientas para mejorar y evaluar su desempeño
                    </p>
                  </div>
                </div>
                <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-12 rounded-full h-[40px] w-[250px] ">
                  Brochure
                </Button>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start pt-12 lg:pt-0">
              {/* Columna izquierda - ¿Qué es Zabbix? */}

              {/* Columna derecha - Dashboard mockup */}

              <div className="flex flex-col items-center justify-center">
                <h3 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] mb-12">
                  La solución no-code de Gestión de Servicios más flexible
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Tomá desiciones mejor y más rápido
                      </span>{' '}
                      <br />
                      Examiná más de 150 métricas de manera integral para
                      generar informes, enlazar solicitudes y ofrecer
                      configuraciones que faciliten decisiones más eficientes y
                      eficaces
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Personalizá tus dashboards
                      </span>{' '}
                      <br />
                      Adaptá los paneles a tus necesidades
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Compartí las métricas con tus clientes
                      </span>{' '}
                      <br />
                      Mejorá la satisfacción de todas las partes involucradas al
                      proporcionar paneles personalizados que reflejan el estado
                      actual del servicio de atención
                    </p>
                  </div>
                </div>
                <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-12 rounded-full h-[40px] w-[250px] ">
                  Solicitar demo
                </Button>
              </div>
              <div>
                <h3 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] mb-12">
                  Obtené una visión clara y transparente de tus servicios
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg  text-justify">
                    Con InvGate Service Management podrás adaptar y compartir
                    los paneles operativos para garantizar la visibilidad sobre
                    el estado de las mesas de servicio y tomar medidas según sea
                    necesario.
                  </p>
                </div>

                <div className="rounded-lg py-8 flex items-center justify-center ml-6">
                  <Image
                    src="/invgate/invgatesm2.png"
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
              Una solución de Service Management preparada para el futuro
            </h3>

            {/* Grid de tres tarjetas */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Tarjeta 1 - Building blocks */}
              <div className="bg-gray-50 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-lg mb-6 h-48 flex items-center justify-center">
                  <Image
                    src="/invgate/imgsd1.png"
                    alt="Dashboard de Grafana mostrando métricas en tiempo real"
                    width={500}
                    height={500}
                    className="rounded-lg "
                  />
                </div>
                <h4 className="text-xl font-bold text-[#39506D] mb-4">
                  Building blocks
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Creá workflows complejos en cuestión de minutos, sin necesidad
                  de desarrollo. Arrastrá y soltá elementos para construir
                  procesos personalizados.
                </p>
              </div>

              {/* Tarjeta 2 - Plantillas personalizables */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-lg  mb-6 h-48 flex items-center justify-center">
                  <Image
                    src="/invgate/imgsd2.png"
                    alt="Dashboard de Grafana mostrando métricas en tiempo real"
                    width={500}
                    height={500}
                    className="rounded-lg "
                  />
                </div>
                <h4 className="text-xl font-bold text-[#39506D] mb-4">
                  Plantillas personalizables para ESM
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Implementá procesos más rápido con plantillas prediseñadas
                  para RRHH, Finanzas y otros equipos. Personalizá cada template
                  según tus necesidades.
                </p>
              </div>

              {/* Tarjeta 3 - Workflows empresariales */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-lg  mb-6 h-48 flex items-center justify-center">
                  <Image
                    src="/invgate/imgsd3.png"
                    alt="Dashboard de Grafana mostrando métricas en tiempo real"
                    width={500}
                    height={500}
                    className="rounded-lg "
                  />
                </div>
                <h4 className="text-xl font-bold text-[#39506D] mb-4">
                  Workflows a nivel empresarial
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Rompé los silos operativos entre departamentos y prácticas de
                  servicio unificadas. Conectá todos los equipos en un solo
                  flujo de trabajo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className=" text-center max-w-6xl mx-auto py-12 md:py-28 ">
          <h3 className="text-3xl font-semibold max-w-7xl mx-auto text-[#39506D] mb-8">
            Contáctanos para una demo personalizada y descubrí cómo InvGate SM
            puede transformar la gestión de tu mesa de ayuda
          </h3>
          <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-4 rounded-full h-[40px] w-[250px] ">
            Solicitar demo
          </Button>
        </div>
      </div>
    </div>
  );
}
