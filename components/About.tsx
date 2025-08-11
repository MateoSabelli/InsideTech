'use client';
//import { motion } from 'framer-motion';
//import { Target, MessageSquare, Rocket, LineChart } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

/* const values = [
  {
    icon: Target,
    title: '23 Años de Experiencia',
    description:
      'Pioneros en soluciones Linux y open source, transformando la infraestructura tecnológica de empresas globales.',
  },
  {
    icon: MessageSquare,
    title: 'Enfoque Personalizado',
    description:
      'Combinamos expertise técnico con un trato cercano, adaptando cada solución a tus necesidades específicas.',
  },
  {
    icon: Rocket,
    title: 'Innovación Constante',
    description:
      'Mantenemos la vanguardia en DevOps, Cloud y Contenedores, ofreciendo soluciones de última generación.',
  },
  {
    icon: LineChart,
    title: 'Resultados Comprobados',
    description:
      'Nuestra trayectoria y casos de éxito nos avalan como referentes en la industria tecnológica.',
  },
]; */

export const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-0 relative" id="nosotros">
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-primary/20 blur-[150px] rounded-full -z-0" />
      <div className="mx-auto px-4 sm:px-0 flex flex-row gap-12">
        <div className="flex flex-col justify-center items-start gap-4 w-5xl">
          <div className="mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Quiénes Somos
            </span>
            <h2 className="text-3xl md:text-3xl font-bold text-secondary dark:text-white mb-6">
              Sobre nosotros
            </h2>
            <p className="text-muted max-w-3xl text-md leading-relaxed">
              Desde hace más de dos décadas, somos el aliado tecnológico que
              impulsa la transformación digital de las organizaciones en
              Latinoamérica. Nuestra experiencia en el mercado de TI nos permite
              diseñar e implementar soluciones innovadoras, adaptadas a las
              necesidades de cada cliente, garantizando resultados tangibles y
              sostenibles. Combinamos un profundo conocimiento técnico con una
              visión estratégica, integrando todos nuestros servicios bajo un
              enfoque único que asegura calidad, eficiencia e innovación en cada
              proyecto.
            </p>
            <p className="text-secondary max-w-lg text-xl mt-4 font-bold">
              Nuestra Visión
            </p>
            <p className="text-muted max-w-3xl text-md leading-relaxed">
              Convertirnos en el socio tecnológico de referencia en
              Latinoamérica, reconocido por la excelencia de nuestros servicios,
              la cercanía y compromiso con nuestros clientes, y la capacidad de
              innovar de manera constante para generar valor en cada etapa del
              camino.
            </p>
            <Button className="mt-4">
              <Link href="/about">Leer más</Link>
            </Button>
          </div>
        </div>
        <div className="pr-6">
          <Image
            src="/about.png"
            alt="About"
            width={700}
            height={700}
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
