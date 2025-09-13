import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { CircleCheck } from 'lucide-react';

export default function Redhat() {
  return (
    <div className="">
      <HeroServices
        title="Red Hat"
        description="Red Hat es un líder mundial en soluciones de software de código abierto para empresas."
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl max-w-4xl mx-auto font-semibold text-[#39506D] mb-12">
            Ofrecemos una amplia gama de servicios que permiten a las
            organizaciones construir, implementar y gestionar aplicaciones en
            diferentes entornos
          </h2>
        </div>
        <div className="max-w-7xl mx-auto pt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda - ¿Qué es Zabbix? */}
            <div>
              <h3 className="text-3xl font-medium text-[#6AA2CC] mb-6">
                ¿Qué es Red Hat?
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Ofrece la plataforma más avanzada para ejecutar cargas de
                  trabajo críticas, respaldada por el soporte empresarial que tu
                  organización requiere. Sus soluciones escalables y flexibles
                  se adaptan y evolucionan al ritmo de las necesidades de tu
                  negocio.
                </p>
                <p className="text-lg">
                  En InsideTech, contamos con la experiencia para evaluar tus
                  requerimientos específicos y diseñar soluciones a medida,
                  aprovechando todo el potencial de las tecnologías Red Hat.
                </p>
              </div>

              <div className="rounded-lg py-8 flex items-start justify-start ">
                <Image
                  src="/redhat/dashboard.png"
                  alt="Dashboard de Grafana mostrando métricas en tiempo real"
                  width={450}
                  height={450}
                  className="rounded-lg "
                />
              </div>
            </div>

            {/* Columna derecha - Dashboard mockup */}
            <div>
              <div>
                <div className="mb-8">
                  <h4 className="text-3xl font-medium text-[#6AA2CC] mb-4">
                    Principales beneficios
                  </h4>
                  <p className="text-gray-700 text-base">
                    La tecnología abierta se basa en soluciones y estándares de
                    código libre o compartido, que permiten su uso, modificación
                    y distribución fomentando la colaboración y la innovación.
                  </p>
                </div>
                <p className="text-gray-700 text-base font-semibold">
                  Ventajas de utilizar Red Hat:
                </p>
                <div className="space-y-4 mt-8">
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      Soporte empresarial de primer nivel.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      Estabilidad y confiabilidad.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      Seguridad reforzada.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      Escalabilidad y alto rendimiento.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      Compatibilidad certificada.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      Automatización y eficiencia operativa.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      Flexibilidad en entornos híbridos y multinube.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de productos Red Hat */}
          <div className="mt-20 space-y-16">
            {/* Sistemas Operativos Empresariales */}
            <div className="bg-white rounded-lg grid grid-cols-2 gap-6 items-center justify-center">
              <div>
                <h3 className="text-3xl font-semibold text-[#6AA2CC] mb-6">
                  Sistemas Operativos Empresariales
                </h3>
                <p className="text-gray-700 text-base mb-4  leading-relaxed ">
                  Red Hat Enterprise Linux (RHEL) es el sistema operativo líder
                  de Red Hat, diseñado para ofrecer una base sólida, estable y
                  segura para aplicaciones empresariales. Reconocido por su
                  fiabilidad, alto rendimiento y avanzadas capacidades de
                  seguridad, RHEL es la elección preferida en entornos
                  corporativos críticos.
                </p>
                <p className="text-gray-700 text-base leading-relaxed ">
                  RHEL proporciona una plataforma para desplegar aplicaciones en
                  servidores físicos, máquinas virtuales y entornos de
                  contenedores. Ofrece funciones avanzadas de seguridad,
                  herramientas de gestión de sistemas y soporte empresarial de
                  largo plazo.
                </p>
              </div>

              <div className="flex items-center justify-center gap-6 mb-6">
                <Image
                  src="/redhat/enterprise.png"
                  alt="Red Hat Enterprise Linux"
                  width={400}
                  height={300}
                  className="rounded-lg "
                />
              </div>
            </div>

            {/* Contenedores y Orquestación */}
            <div className="bg-white rounded-lg grid grid-cols-2 gap-6 items-center justify-center">
              <div className="flex items-center justify-center gap-6 mb-6 ">
                <Image
                  src="/redhat/openshift.png"
                  alt="Red Hat Enterprise Linux"
                  width={400}
                  height={300}
                  className="rounded-lg "
                />
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-[#6AA2CC] mb-6">
                  Contenedores y Orquestación
                </h3>
                <p className="text-gray-700 text-base mb-4 ">
                  Una plataforma de contenedores, basada en Kubernetes, que
                  facilita a las organizaciones el desarrollo, despliegue y
                  gestión de aplicaciones en contenedores de manera ágil y
                  eficiente.
                </p>
                <p className="text-gray-700 text-base ">
                  OpenShift ofrece una plataforma integral para la orquestación
                  de contenedores, incorporando capacidades de automatización,
                  gestión de clústeres y seguridad avanzada. Ayuda a las
                  organizaciones a modernizar sus aplicaciones y adoptar
                  metodologías de desarrollo ágiles.
                </p>
              </div>
            </div>

            {/* Automatización y Gestión */}
            <div className="bg-white rounded-lg grid grid-cols-2 gap-6 items-center justify-center">
              <div>
                <h3 className="text-3xl font-semibold text-[#6AA2CC] mb-6">
                  Automatización y Gestión
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  Red Hat brinda a las organizaciones la capacidad de
                  automatizar tareas de TI en toda su infraestructura, abarcando
                  desde la configuración de sistemas hasta el despliegue de
                  aplicaciones.
                </p>
                <p className="text-gray-700 text-base ">
                  Ansible ofrece una plataforma de automatización de TI que
                  integra orquestación de flujos de trabajo, gestión de
                  inventarios y ejecución de tareas. Ayuda a las organizaciones
                  a optimizar la eficiencia operativa y minimizar los errores
                  humanos.
                </p>
              </div>
              <div className="flex items-center justify-center gap-6 mb-6">
                <Image
                  src="/redhat/ansible.png"
                  alt="Red Hat Enterprise Linux"
                  width={400}
                  height={300}
                  className="rounded-lg "
                />
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className=" text-center max-w-5xl mx-auto pt-4 md:pt-28">
            <h3 className="text-3xl font-semibold max-w-6xl mx-auto text-[#39506D] mb-8">
              Contactanos para una demo personalizada y descubrí cómo Red Hat
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
