import HeroServices from '@/components/pagina2/Hero-Services';
import React from 'react';
import { CircleCheck, Lightbulb, RefreshCcw, Lock } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Automatizacion() {
  return (
    <div>
      <HeroServices
        title="Automatización"
        description="Automatiza y optimiza los procesos de TI para mejorar la eficiencia operativa."
      />
      <div className="max-w-7xl mx-auto px-4  py-16">
        <div className="text-start md:text-center mb-12">
          <h2 className="text-3xl max-w-4xl mx-auto font-semibold text-[#39506D] mb-12">
            Automatizá tus operaciones de TI incrementando la eficiencia y
            reduciendo costos
          </h2>
        </div>
        <div className="max-w-7xl mx-auto pt-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Columna izquierda - ¿Qué es Ansible? */}
            <div>
              <h3 className="text-3xl font-medium text-[#6AA2CC] mb-6">
                Ansible
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Es una potente herramienta de automatización de código abierto
                  y gestión de configuración que simplifica y acelera las
                  operaciones de TI.
                </p>
                <p className="text-lg">
                  Facilita la automatización de tareas, la administración de
                  infraestructura y la orquestación de flujos de trabajo,
                  optimizando la implementación de software y mejorando la
                  eficiencia operativa.
                </p>
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
                    <p className="text-gray-700 text-base">Escalabilidad</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      Reutilización de codigo
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">Agentless</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">Orquestación</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-[#EBBA55] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-base">
                      Elimina los errores manuales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sección de beneficios finales */}
          <div className="mt-20">
            <div className="text-start md:text-center ">
              <p className="text-3xl font-semibold text-[#6AA2CC] max-w-7xl mx-auto">
                ¿Por qué Ansible?
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 md:gap-24 py-16">
              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-6">
                  <CardHeader>
                    <Lightbulb className="w-10 h-10 text-[#39506D] " />
                    <CardTitle className="text-3xl font-medium text-[#39506D] mb-2">
                      Simple
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className=" font-medium text-[#524A4A] ">
                    <ul className="list-disc list-inside text-base">
                      <li>Lenguaje 100% legible (inglés).</li>
                      <li>Sin conocimientos de desarrollo.</li>
                      <li>Tareas ejecutadas en orden.</li>
                      <li>Reutilizable por otros equipos.</li>
                      <li>Rápida puesta en producción.</li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-6">
                  <CardHeader>
                    <RefreshCcw className="w-10 h-10 text-[#39506D]" />
                    <CardTitle className="text-3xl font-medium text-[#39506D] mb-2">
                      Poderoso
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="font-medium text-[#524A4A]">
                    <ul className="list-disc list-inside text-base">
                      <li>Despliegue de aplicaciones.</li>
                      <li>Manejo de configuración.</li>
                      <li>Orquestación (Workflows).</li>
                      <li>Automatización de las Redes.</li>
                      <li>Orquestación del ciclo de vida.</li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-6">
                  <CardHeader>
                    <Lock className="w-10 h-10 text-[#39506D]" />
                    <CardTitle className="text-3xl font-medium text-[#39506D] mb-2">
                      Sin agentes
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="font-medium ">
                    <ul className="list-disc list-inside text-base text-[#524A4A]">
                      <li>No necesita agentes.</li>
                      <li>Usa OpenSSH & WinRM.</li>
                      <li>No intrusivo.</li>
                      <li>Comienzo inmediato.</li>
                      <li>Más eficiente & Más seguro.</li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA final */}
          <div className="text-start md:text-center max-w-5xl mx-auto">
            <h3 className="text-start md:text-center text-3xl font-semibold max-w-6xl mx-auto text-[#39506D] mb-8">
              Con nuestros servicios de implementación de Ansible, tu
              organización incorporará soluciones eficientes y totalmente
              automatizadas que impulsarán la productividad y optimizarán tus
              operaciones de TI
            </h3>
          </div>

          {/* Cards de servicios (como la imagen) */}
          <div className="my-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-10">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Image
                      src="/automatizacion/icon1.png"
                      alt="Ansible"
                      width={100}
                      height={100}
                    />
                    <p className="text-[#39506D] font-medium text-lg leading-snug">
                      Servicios de <br />
                      implementación
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-10">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Image
                      src="/automatizacion/icon2.png"
                      alt="Ansible"
                      width={100}
                      height={100}
                    />
                    <p className="text-[#39506D] font-medium text-lg leading-snug">
                      Servicios de
                      <br />
                      administración
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-10">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Image
                      src="/automatizacion/icon3.png"
                      alt="Ansible"
                      width={100}
                      height={100}
                    />
                    <p className="text-[#39506D] font-medium text-lg leading-snug">
                      Servicios de
                      <br />
                      consultoría
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-10">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Image
                      src="/automatizacion/icon4.png"
                      alt="Ansible"
                      width={100}
                      height={100}
                    />
                    <p className="text-[#39506D] font-medium text-lg leading-snug">
                      Servicios de soporte
                      <br />
                      de TI
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="text-start md:text-center max-w-5xl mx-auto">
            <h3 className="text-3xl font-semibold max-w-6xl mx-auto text-[#39506D] mb-8">
              Te permitirá analizar, implementar e integrar Ansible sin
              problemas en tu infraestructura existente.
            </h3>
          </div>
        </div>
        <div className="md:pt-20 pt-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda - Productos */}
            <div>
              <div className="flex flex-row items-center justify-start gap-4 mb-4">
                <Image
                  src="/automatizacion/ansibleawx.png"
                  alt="Ansible AWX"
                  width={75}
                  height={75}
                />
                <h3 className="text-3xl font-medium text-[#6AA2CC] ">
                  Ansible AWX
                </h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Es la solución de código abierto que permite gestionar de
                  forma centralizada inventarios y playbooks de Ansible,
                  programar su ejecución y optimizar la automatización de TI.
                </p>
                <p className="text-lg">
                  Respaldado por Red Hat, AWX ofrece una interfaz web intuitiva
                  con funciones avanzadas como la ejecución programada y la
                  posibilidad de realizar rollbacks gracias a la integración con
                  repositorios Git.
                </p>
              </div>
              <div className="rounded-lg p-6 min-h-[400px] items-center justify-center  pt-20 hidden md:block">
                <Image
                  src="/automatizacion/dashboard.png"
                  alt="Dashboard de Ansible AWX"
                  width={450}
                  height={450}
                  className="rounded-lg "
                />
              </div>
            </div>

            {/* Columna derecha - Dashboard mockup */}
            <div>
              <div className="rounded-lg p-6 min-h-[400px] items-center justify-center flex">
                <Image
                  src="/automatizacion/dashboardawx.png"
                  alt="Dashboard de Ansible AWX"
                  width={500}
                  height={500}
                  className="rounded-lg "
                />
              </div>
              <div className="pt-12 ">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <Image
                    src="/automatizacion/ansible.png"
                    alt="Ansible AWX"
                    width={75}
                    height={75}
                  />
                  <h3 className="text-3xl font-medium text-[#6AA2CC] ">
                    Ansible Automation Platform
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    Proporciona un marco empresarial para diseñar y ejecutar la
                    automatización de TI en cualquier entorno.
                  </p>
                  <p className="text-lg">
                    Facilita que usuarios de toda la organización —incluyendo
                    equipos de desarrollo, operaciones, seguridad y redes—
                    puedan crear, compartir y gestionar la automatización de
                    forma colaborativa y eficiente.
                  </p>
                </div>
              </div>
              <div className="rounded-lg p-6 min-h-[400px] flex items-center justify-center md:hidden">
                <Image
                  src="/automatizacion/dashboard.png"
                  alt="Dashboard de Ansible AWX"
                  width={500}
                  height={500}
                  className="rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center max-w-5xl mx-auto pt-4 md:pt-28">
          <h3 className="text-3xl font-semibold max-w-6xl mx-auto text-[#39506D] mb-8">
            Contactanos y descubrí cómo Ansible puede transformar la gestión de
            tu infraestructura.
          </h3>
          <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-4 rounded-full h-[40px] w-[250px] ">
            Coordinar demo
          </Button>
        </div>
      </div>
    </div>
  );
}
