import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Box, CircleCheck } from 'lucide-react';

export default function Consultoria() {
  return (
    <div className="">
      <HeroServices
        title="Consultoría Cloud"
        description="Potencia, Flexibilidad y Escalabilidad en la Nube"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl max-w-4xl mx-auto font-semibold text-[#39506D] mb-12">
            Transformá tu negocio con la plataforma de servicios en la nube
            líder en el mundo
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda - Amazon Web Services */}
            <div>
              <h3 className="text-3xl font-medium text-[#6AA2CC] mb-6">
                Amazon Web Services
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Es la plataforma de nube más completa y adoptada a nivel
                  global, con más de 200 servicios disponibles desde centros de
                  datos en todo el mundo.
                </p>
                <p className="text-lg">
                  Ofrece a las empresas la agilidad, escalabilidad y seguridad
                  necesarias para innovar más rápido y optimizar sus
                  operaciones.
                </p>
              </div>
              <div className="rounded-lg py-12 flex items-center justify-start ">
                <Image
                  src="/consultoria/aws.png"
                  alt="Amazon Web Services"
                  width={450}
                  height={450}
                  className="rounded-lg "
                />
              </div>

              {/* Principales beneficios */}

              <div className="mt-8">
                <h3 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                  Por qué elegir AWS
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    Líder del mercado por más de una década.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    Ecosistema global de partners y desarrolladores.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    Soporte especializado 24/7.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    Compromiso con la innovación y la mejora continua.
                  </p>
                </div>
              </div>
            </div>

            {/* Columna derecha - Dashboard mockup */}
            <div>
              <div className="">
                <h3 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                  Beneficios
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Escalabilidad sin límites:
                    </span>{' '}
                    Ajustá recursos de forma automática según la demanda.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Reducción de costos:
                    </span>{' '}
                    Pagá solo por lo que se usa, sin grandes inversiones
                    iniciales.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Innovación acelerada:
                    </span>{' '}
                    Implementá nuevas aplicaciones y servicios en minutos.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Alta disponibilidad y rendimiento:
                    </span>{' '}
                    Infraestructura global con redundancia y baja latencia.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Seguridad de nivel empresarial:
                    </span>{' '}
                    Cumplimiento de estándares internacionales y cifrado
                    avanzado.
                  </p>
                </div>
              </div>
              <div className="mt-16">
                <h4 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                  Principales servicios
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Cómputo:
                      </span>{' '}
                      Amazon EC2, AWS Lambda, AWS Elastic Beanstalk.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Almacenamiento:
                      </span>{' '}
                      Amazon S3, EBS, Glacier.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Bases de Datos:
                      </span>{' '}
                      Amazon RDS, DynamoDB, Aurora.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        Redes y Entrega de Contenido:
                      </span>{' '}
                      Amazon CloudFront, VPC, Route 53.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      <span className="font-medium text-[#6AA2CC]">
                        DevOps y Herramientas de Desarrollo:
                      </span>{' '}
                      AWS CodePipeline, CloudFormation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de beneficios finales */}
          <div className="mt-12">
            {/* Mockup de dashboards */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-20 mb-4 ">
              <div className="rounded-lg  py-8 flex items-center justify-center">
                <Image
                  src="/consultoria/dashboard1.png"
                  alt="Dashboard de Zabbix mostrando métricas en tiempo real"
                  width={500}
                  height={300}
                  className="rounded-lg "
                />
              </div>
              <div className="rounded-lg  py-8 flex items-center justify-center">
                <Image
                  src="/consultoria/dashboard3.png"
                  alt="Dashboard de Zabbix mostrando métricas en tiempo real"
                  width={550}
                  height={400}
                  className="rounded-lg "
                />
              </div>
              <div className="rounded-lg  py-8 flex items-center justify-center">
                <Image
                  src="/consultoria/dashboard2.png"
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
              Contactanos y descubrí cómo AWS puede transformar la gestión de tu
              infraestructura
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
