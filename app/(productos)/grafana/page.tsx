import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Box, CircleCheck } from 'lucide-react';

export default function Grafana() {
  return (
    <div className="">
      <HeroServices
        title="Grafana"
        description="Tomá mejores decisiones visualizando tus datos con Grafana."
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl max-w-4xl mx-auto font-semibold text-[#39506D] mb-12">
            Plataforma líder de observabilidad y visualización para transformar
            datos en conocimiento
          </h2>
        </div>
        <div className="max-w-7xl mx-auto pt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda - ¿Qué es Zabbix? */}
            <div>
              <h3 className="text-3xl font-medium text-[#6AA2CC] mb-6">
                ¿Qué es Grafana?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Es una solución de visualización y análisis de datos de código
                  abierto que permite unificar métricas, logs y trazas de
                  múltiples fuentes en un único panel de control interactivo.
                </p>
                <p className="text-lg">
                  Diseñada para equipos que necesitan entender, anticipar y
                  optimizar el rendimiento de sus sistemas e infraestructura.
                </p>
              </div>

              <div className="rounded-lg py-8 flex items-start justify-start ">
                <Image
                  src="/grafana/grafana1.png"
                  alt="Dashboard de Grafana mostrando métricas en tiempo real"
                  width={450}
                  height={450}
                  className="rounded-lg "
                />
              </div>

              {/* Principales beneficios */}
              <div className="mt-8">
                <h4 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                  ¿Por qué elegir Grafana?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Código Abierto y Comunidad Activa:
                      </span>{' '}
                      Evoluciona constantemente con nuevas funciones.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Ahorro de Costos:
                      </span>{' '}
                      Evita licencias costosas de software propietario.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Ecosistema Completo:
                      </span>{' '}
                      Compatible con Grafana Cloud y Grafana Enterprise para
                      funcionalidades avanzadas.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Confiabilidad y Rendimiento:
                      </span>{' '}
                      Adoptado por miles de organizaciones líderes en el mundo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Dashboard mockup */}
            <div>
              <div>
                <h4 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                  Principales beneficios
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Visibilidad Total:
                      </span>{' '}
                      Conecta y centraliza datos de distintas fuentes para una
                      visión integral en tiempo real.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Decisiones Rápidas:
                      </span>{' '}
                      Detecta patrones, anomalías y oportunidades con gráficos
                      dinámicos y alertas personalizadas.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Flexibilidad y Escalabilidad:
                      </span>{' '}
                      Se adapta a todo tipo de entornos, desde pequeñas empresas
                      hasta infraestructuras globales.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Interfaz Intuitiva:
                      </span>{' '}
                      Diseñada para que cualquier usuario pueda crear y
                      personalizar dashboards sin conocimientos avanzados.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                  Funcionalidades Clave
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Integraciones Amplias:
                    </span>{' '}
                    Compatible con más de 100 fuentes de datos (Prometheus,
                    InfluxDB, Elasticsearch, MySQL, Zabbix, AWS, Azure, entre
                    otras).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium  text-[#6AA2CC]">
                      Alertas Inteligentes:
                    </span>{' '}
                    Configuración de umbrales y notificaciones por email, Slack,
                    Teams o canales personalizados.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Dashboards Interactivos:
                    </span>{' '}
                    Visualizaciones adaptadas a KPIs, métricas técnicas o
                    indicadores de negocio.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Soporte para Logs y Trazas:
                    </span>{' '}
                    Exploración rápida de eventos y correlación con métricas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de beneficios finales */}
          <div className="mt-12">
            <div className="text-center ">
              <p className="text-3xl font-semibold text-[#39506D] max-w-7xl mx-auto">
                Con Grafana, centralizá y visualizá tus métricas, <br /> detectá
                anomalías al instante y mejorá la satisfacción de tus clientes
              </p>
            </div>

            {/* Mockup de dashboards */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-20 mb-4 py-8">
              <div className="rounded-lg py-8 flex items-center justify-center">
                <Image
                  src="/grafana/grafana2.png"
                  alt="Dashboard de Grafana mostrando métricas en tiempo real"
                  width={500}
                  height={300}
                  className="rounded-lg "
                />
              </div>
              <div className="rounded-lg  py-8 flex items-center justify-center">
                <Image
                  src="/grafana/grafana3.png"
                  alt="Dashboard de Grafana mostrando métricas en tiempo real"
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
              En InsideTech implementamos Grafana de forma rápida, segura y
              adaptada a las necesidades de tu organización
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
