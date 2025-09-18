import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import Image from 'next/image';
import { Box, CircleCheck } from 'lucide-react';
import Link from 'next/link';

export default function Observabilidad() {
  const herrramientas = [
    {
      img: '/observabilidad/grafana.png',
      alt: 'Grafana',
      width: 200,
      height: 200,
    },
    {
      img: '/observabilidad/zabbix.png',
      alt: 'Zabbix',
      width: 150,
      height: 200,
    },
    {
      img: '/observabilidad/elasticsearch.png',
      alt: 'Elasticsearch',
      width: 150,
      height: 200,
    },
    {
      img: '/observabilidad/influxdb.png',
      alt: 'InfluxDB',
      width: 200,
      height: 200,
    },
    { img: '/observabilidad/L.png', alt: 'L', width: 100, height: 200 },
    {
      img: '/observabilidad/prometheus.png',
      alt: 'Prometheus',
      width: 150,
      height: 150,
    },
  ];

  return (
    <div className="">
      <HeroServices
        title="Observabilidad"
        description="Detecta y resolve incidencias proactivamente"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] mb-12">
            Controle cada aspecto crítico de su infraestructura con visibilidad
            total y en tiempo real, anticipándose a las anomalías antes de que
            afecten a su operación.
          </h2>
        </div>
        <div className="max-w-7xl mx-auto pt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda - ¿Qué es Zabbix? */}
            <div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Te brindamos todo lo necesario para recopilar, categorizar y
                  analizar los datos de las aplicaciones y la infraestructura de
                  tu organización.
                </p>
                <p className="text-lg">
                  Tené una visión clara de los aspectos críticos de tu
                  infraestructura, y tomá decisiones informadas que te permitan
                  corregir posibles problemas antes de que afecten a los
                  usuarios finales.
                </p>
              </div>

              {/* Principales beneficios */}
              <div className="mt-8 md:pt-16">
                <h4 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                  Consultoría en observabilidad
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <p className="text-gray-700 text-base">
                      Monitoreo unificado de infraestructura
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <p className="text-gray-700 text-base">
                      Análisis de tráfico y rendimiento de red
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <p className="text-gray-700 text-base">
                      Optimización de procesos
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <p className="text-gray-700 text-base">Soporte continuo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <p className="text-gray-700 text-base">
                      Gestión de rendimientos
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <p className="text-gray-700 text-base">Mapa de servicios</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <p className="text-gray-700 text-base">Gestión de KPIs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <p className="text-gray-700 text-base">
                      Integración nativa
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                    <p className="text-gray-700 text-base">
                      Gestión de logs centralizados
                    </p>
                  </div>
                </div>
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
                  Beneficios
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">
                    Mejor comprensión del rendimiento de la infraestructura
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">
                    Resolución de problemas más rápido
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">Mayor escalabilidad</p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">
                    Reducción de tiempos de inactividad
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">
                    Optimización de Recursos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">
                    Mayor Eficiencia Operativa
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">
                    Toma de Decisiones Informada
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">Mejora Continua</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de beneficios finales */}
          <div className="mt-24">
            <div className="text-center ">
              <p className="text-3xl font-semibold text-[#39506D] max-w-7xl mx-auto">
                ¿Cómo lo hacemos?
              </p>
              <p className="text-lg text-gray-700 max-w-7xl mx-auto mt-4">
                Implementamos herramientas open source consolidadas como
                estándares en los departamentos de TI de organizaciones líderes.
              </p>
            </div>

            {/* Mockup de dashboards */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-20 mb-4 py-12">
              {herrramientas.map((herramienta) => (
                <div key={herramienta.alt}>
                  <Image
                    src={herramienta.img}
                    alt={herramienta.alt}
                    width={herramienta.width}
                    height={herramienta.height}
                  />
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 max-w-7xl mx-auto mt-4">
              Te acompañamos en la implementación de tu entorno de monitoreo,
              ocupándonos de todo el proceso: relevamiento, despliegue e
              integración completa de la solución.
            </p>

            <p className="text-lg text-gray-700 max-w-7xl mx-auto mt-4">
              Zabbix y Grafana se posicionan entre las herramientas de
              observabilidad más reconocidas en el sector. Ofrecen capacidades
              avanzadas para monitoreo, análisis y visualización de datos en
              tiempo real, mejorando la gestión y el rendimiento de la
              infraestructura IT.
            </p>
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
        </div>
      </div>
    </div>
  );
}
