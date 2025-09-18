import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import Image from 'next/image';
import { CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DevOps() {
  return (
    <div>
      <HeroServices
        title="DevOps"
        description="Potenciá tu capacidad de respuesta y generá valor empresarial"
      />
      <div className="max-w-3xl md:max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl max-w-6xl mx-auto font-semibold text-[#39506D] mb-12">
            Integrá, automatizá y optimizá tu ciclo de vida de software con
            soluciones adaptadas a tu organización
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center ">
          <div>
            <h4 className="text-3xl font-medium text-[#6AA2CC] mb-4 ">
              Para lograrlo
            </h4>
            <p className="text-lg">
              Trabajamos con tu empresa desde la planificación inicial de la
              plataforma que contenga las fases de codificación, compilación,
              pruebas y publicación, y en la puesta en marcha, las operaciones y
              la supervisión continua.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/devops/devops.png"
              alt="DevOps"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start justify-center">
            <div className="flex flex-col items-start justify-center">
              <div className="mt-8 max-w-3xl mx-auto">
                <h4 className="text-3xl font-medium text-[#6AA2CC] mb-4 ">
                  ¿Por qué es tan importante implementarlo en tu empresa?
                </h4>
                <div className="space-y-4">
                  <p className="text-lg">
                    La utilización de diferentes herramientas permite que los
                    flujos de trabajo de desarrollo y operaciones se vuelvan
                    tareas más optimizadas y colaborativas al automatizar tareas
                    que antes eran manuales.
                  </p>
                  <p className="text-lg ">
                    Uno de los beneficios más importantes que tiene DevOps es
                    lograr la satisfacción del cliente, prestar servicios en
                    menos tiempo y lograr una plataforma más estable y segura.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="space-y-4">
                <div className="mt-8">
                  <h3 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                    Beneficios claves
                  </h3>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Reducción de tiempos de entrega
                    </span>{' '}
                    <br />
                    Implementá software más rápido sin sacrificar calidad
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Mayor confiabilidad
                    </span>{' '}
                    <br />
                    Automatizá pruebas, despliegues y monitoreo para minimizar
                    errores
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Escalabilidad asegurada
                    </span>{' '}
                    <br />
                    Infraestructura ágil para crecer al ritmo de tu negocio
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Integración continua (CI/CD)
                    </span>{' '}
                    <br />
                    Actualizaciones constantes con mínimo impacto en la
                    operación
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 " />
                  <p className="text-gray-700 text-base">
                    <span className="font-medium text-[#6AA2CC]">
                      Cultura colaborativa
                    </span>{' '}
                    <br />
                    Alineá a tus equipos hacia objetivos comunes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-12">
          <h4 className="text-3xl font-medium text-[#6AA2CC] ">
            Integración Continua
          </h4>
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
            <div>
              <p className="text-lg ">
                <span className="font-bold text-[#39506D]">
                  Impulsamos tu proceso de Integración Continua
                </span>{' '}
                ayudándote a detectar y corregir errores de forma más ágil,
                elevar la calidad de tu software y acortar los tiempos de
                validación y despliegue de nuevas actualizaciones.
                <br /> <br /> Para lograrlo, implementamos y optimizamos el uso
                de herramientas especializadas en integración continua.
              </p>
            </div>
            <div className="flex items-center justify-center ">
              <Image
                src="/devops/services1.png"
                alt="DevOps"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className=" my-12">
          {/* <div className="grid lg:grid-cols-2 gap-12 items-center justify-center mb-6">
            <span></span>
            
          </div> */}
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
            <div className="flex items-center justify-center ">
              <Image
                src="/devops/services2.png"
                alt="DevOps"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div>
              <h4 className="text-3xl font-medium text-[#6AA2CC] mb-6">
                Despliegue Continuo
              </h4>
              <p className="text-lg ">
                <span className="font-bold text-[#39506D]">
                  Acelera la entrega de valor
                </span>{' '}
                reduciendo al mínimo el tiempo entre la implementación de
                cambios y su disponibilidad para los usuarios finales. <br />
                <br /> Para lograrlo, trabajamos con un conjunto de herramientas
                especializadas que nos permiten automatizar, optimizar y
                garantizar despliegues confiables.
              </p>
            </div>
          </div>
        </div>

        <div className=" text-center max-w-5xl mx-auto pt-12">
          <h3 className="text-3xl font-semibold max-w-6xl mx-auto text-[#39506D] mb-8">
            Contáctanos y descubrí por qué DevOps puede acelerar tu desarrollo y
            optimizar tu operación de TI
          </h3>
          <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-4 rounded-full h-[40px] w-[250px] ">
            Solicitar reunión
          </Button>
        </div>
      </div>
    </div>
  );
}
