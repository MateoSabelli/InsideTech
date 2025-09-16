import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import Image from 'next/image';
import { Box, CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Consultoria() {
  return (
    <div className="">
      <HeroServices
        title="Consultoría"
        description="Maximiza los recursos tecnológicos de tu empresa"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl max-w-7xl mx-auto font-semibold text-[#39506D] mb-12">
            Ofrecemos asesoramiento estratégico y soluciones para ayudar a{' '}
            <br /> las organizaciones a optimizar sus sistemas y procesos,{' '}
            <br /> mejorando su eficiencia y productividad
          </h2>
        </div>
        <div className="pt-12">
          <div>
            <h3 className="text-3xl font-medium text-[#6AA2CC] mb-6">
              Plataforma Unix
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-base">
                Servicios brindados por especialistas certificados y con amplia
                experiencia en plataformas UNIX. 
              </p>
              <p className="text-base font-semibold text-black pt-1">
                Algunas de las tareas y productos soportados sobre la
                plataforma:
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start pt-8">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Instalación y configuración de servidores UNIX.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Administración y Soporte.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Análisis de performance y tuning.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Análisis y deploy de virtualización.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Análisis de escalabilidad (Capacity Planning).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Generación de políticas de backup y contingencia.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Análisis de seguridad y auditorías.
                </p>
              </div>
            </div>

            {/* Columna derecha - Dashboard mockup */}
            <div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                  <p className="text-gray-700 text-base">
                    Migraciones integrales entre plataforma.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                  <p className="text-gray-700 text-base">
                    Reingeniería de procesos.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                  <p className="text-gray-700 text-base">
                    Automatización de tareas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                  <p className="text-gray-700 text-base">Clusters.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                  <p className="text-gray-700 text-base">RRHH y HelpDesk.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                  <p className="text-gray-700 text-base">
                    Capacitación integral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12">
          <div>
            <h3 className="text-3xl font-medium text-[#6AA2CC] mb-6">
              Virtualización
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-base">
                La implementación de una plataforma virtualizada permite mejorar
                la eficiencia y disponibilidad de recursos de IT y aplicaciones
                maximizando la utilización del hardware y reduciendo
                considerablemente los costos de adquisición y mantenimiento de
                la infraestructura.
              </p>
              <p className="text-base ">
                En la actualidad, la virtualización es un tema común en todas
                las organizaciones, ya sea porque se piensa implementarla o
                porque cuenta con soluciones instaladas. Sea cual fuere el
                estado de avance, se presentan distintas alternativas donde
                InsideTech puede colaborar ofreciendo servicios integrales de
                deploy y management sobre las siguientes plataformas de
                virtualización:
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center pt-8 max-w-5xl mx-auto">
            <div className="space-y-3 flex flex-col items-start justify-center w-1/3">
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Red Hat Enterprise Virtualization
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">VMware vSphere</p>
              </div>
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  KVM (Kernel Virtual Machine)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">Plataforma UNIX</p>
              </div>
            </div>

            {/* Columna derecha - Dashboard mockup */}
            <div className="rounded-lg  flex items-center justify-center">
              <Image
                src="/consultoria/virtualizacion.png"
                alt="Virtualizacion"
                width={700}
                height={700}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="pt-12 ">
          <div>
            <h3 className="text-3xl font-medium text-[#6AA2CC] mb-6">
              Base de datos
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-base">
                Contamos con un equipo especializado de DBA en tecnologías
                Oracle, PostgreSQL y MySQL para apoyar a nuestros clientes en la
                búsqueda de soluciones, ofreciéndoles una amplia gama de
                servicios:
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center max-w-5xl mx-auto pt-8">
            <div className="space-y-3 flex flex-col items-start justify-center">
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Instalación y administración.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Configuración de entornos en Alta Disponibilidad.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Análisis de performance, tuning y Health Checks.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">Monitoreo preventivo.</p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Implementación de políticas de seguridad y auditoría.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Implementación de políticas de Backup y Recovery.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Migración de entornos y upgrades.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Capacitación y Educación integral.
                </p>
              </div>
            </div>

            {/* Columna derecha - Dashboard mockup */}
            <div className="rounded-lg p-6 flex items-center justify-center">
              <Image
                src="/consultoria/basededatos.png"
                alt="Base de datos"
                width={150}
                height={700}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="py-12">
          <div>
            <h3 className="text-3xl font-medium text-[#6AA2CC] mb-6">
              Open Source
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-base">
                Somos pioneros en entornos Linux y soluciones Open Source.
                Brindamos una amplia gama de servicios que permiten reducir el
                costo de licenciamiento en software utilizando tecnologías y
                productos maduros de la comunidad utilizados en miles
                de clientes de primera línea. 
              </p>
              <p className="text-base text-[#6AA2CC] font-semibold">
                Nos especializamos en la implementación, operación y gestión de
                dichas plataformas:
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-5xl mx-auto pt-8">
            <div className="space-y-3 flex flex-col items-start justify-between w-auto">
              <div className="flex items-start justify-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Servicios de Correo Electrónico y Mensajería Instantánea.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Soluciones de Antivirus y AntiSpam Corporativo.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Soluciones de filtrado y control de acceso – Firewalls y
                  Proxies.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Redes privadas virtuales (VPN) – Site to Site y Teleworking.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Soluciones de Monitoreo y Análisis de performance.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Clusters y Alta Disponibilidad.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Soluciones Web RedHat JBoss EAP, Tomcat y Apache.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-[#EBBA55] flex-shrink-0" />
                <p className="text-gray-700 text-base">
                  Servidores de Dominio, Archivos e Impresión.
                </p>
              </div>
            </div>

            {/* Columna derecha - Dashboard mockup */}
            <div className="rounded-lg p-6 flex items-center justify-center">
              <Image
                src="/consultoria/opensource.png"
                alt="Open Source"
                width={150}
                height={700}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className=" text-center max-w-5xl mx-auto pt-16">
            <h3 className="text-3xl font-semibold max-w-6xl mx-auto text-[#39506D] mb-8">
              Contactanos y descubrí cómo estas plataformas pueden optimizar y
              mejorar tu operación de TI
            </h3>
            <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-4 rounded-full h-[40px] w-[250px] ">
              Solicitar reunión
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
