import { Button } from '@/components/ui/button';
import { Compare } from '@/components/ui/compare';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { Services } from '@/components/Services';
import { Partner } from '@/components/Partner';

export default function Diseño() {
  const productos = [
    {
      name: 'Grafana',
      image: '/Partners/grafana.svg',
    },
    {
      name: 'Red Hat',
      image: '/Partners/redhat.svg',
    },
    {
      name: 'IBM',
      image: '/Partners/IBM.svg',
    },
    {
      name: 'Ansible',
      image: '/hero/ansible.svg',
    },
    {
      name: 'Jenkins',
      image: '/hero/jenkins.svg',
    },
    {
      name: 'Kubernetes',
      image: '/hero/kubernetes.svg',
    },
    {
      name: 'Prometheus',
      image: '/hero/prometheus.svg',
    },
    {
      name: 'Nagios',
      image: '/Partners/nagios.svg',
    },
    {
      name: 'Docker',
      image: '/hero/docker.svg',
    },
    {
      name: 'AWS',
      image: '/hero/aws.svg',
    },
    {
      name: 'IBM2',
      image: '/Partners/IBM2.svg',
    },
    {
      name: 'Invgate',
      image: '/Partners/invgate.svg',
    },
    {
      name: 'Nagios',
      image: '/Partners/nagios.svg',
    },
    {
      name: 'Zabbix',
      image: '/Partners/zabbix.svg',
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Top Blue Bar */}
      <div className="flex flex-col sticky top-0 z-50 bg-white ">
        <div className="bg-blue-400 text-white py-3 px-4 pr-10 ">
          <div className="container mx-auto flex justify-end items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Facebook className="w-4 h-4" />
              <Instagram className="w-4 h-4" />
              <Linkedin className="w-4 h-4" />
            </div>
          </div>
        </div>
        {/* Navigation */}
        <nav className=" shadow-sm border-b mx-auto w-full max-w-7xl">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center space-x-2">
              <Image
                src="/INSIDETECH2.svg"
                alt="logo"
                width={150}
                height={150}
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Nosotros
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Servicios
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Productos
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Eventos
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Clientes
              </a>
            </div>
            <Button className="bg-gray-700 hover:bg-gray-800 text-white px-6">
              CONTÁCTANOS
            </Button>
          </div>
        </nav>
      </div>
      {/* Hero Section */}
      <section className="bg-[#282C34] text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-5xl md:text-6xl mx-auto text-start font-bold leading-tight">
              INNOVACIÓN Y TECNOLOGÍA QUE TRANSFORMAN TU NEGOCIO
            </h1>
            <p className="text-md mb-4 text-white">
              En InsideTech impulsamos la transformación digital de las
              organizaciones mediante soluciones tecnológicas innovadoras y
              estratégicas.
            </p>
            <Button className="bg-white  text-slate-800 hover:bg-gray-100 px-8 py-3 text-md font-semibold rounded-md">
              CONTÁCTANOS PARA TU PROYECTO
            </Button>
          </div>
          <div className="flex justify-center items-center w-full mx-auto">
            <Compare
              firstImage="https://assets.aceternity.com/code-problem.png"
              secondImage="https://assets.aceternity.com/code-solution.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
              slideMode="hover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">+</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">20</div>
                <div className="text-gray-600">Años</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">+</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">1000</div>
                <div className="text-gray-600">Proyectos</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">+</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">50</div>
                <div className="text-gray-600">Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4  bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Nosotros */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-blue-200 rounded-full p-3 text-center">
                Nosotros
              </h2>
              <p className="text-gray-600 mb-4">
                Con más de 20 años de experiencia en el mercado de TI,
                acompañamos a las organizaciones en el logro de sus objetivos de
                negocio, ofreciendo soluciones e implementando herramientas
                tecnológicas con criterios y conocimientos especializados.
              </p>
              <p className="text-gray-600 mb-6">
                Entendemos todos nuestros servicios como un todo por nuestro
                enfoque técnico, así también por el elemento y la experiencia
                que nos caracteriza, siempre con un modelo de trabajo basado en
                el desarrollo de soluciones con criterios y conocimientos
                especializados.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Nuestra visión
                </h3>
                <p className="text-gray-600">
                  Ser reconocidos como el socio tecnológico estratégico de
                  referencia en Latinoamérica por la calidad de nuestros
                  servicios, el compromiso con nuestros clientes y la innovación
                  constante que nos caracteriza en cada proyecto.
                </p>
              </div>
            </div>

            {/* Right Column - Por qué elegir */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-blue-200 rounded-full p-3 text-center">
                ¿Por qué elegir Inside Tech?
              </h2>
              <p className="text-gray-600 mb-8">
                En InsideTech combinamos experiencia, conocimiento y compromiso
                para ofrecer soluciones tecnológicas de alto valor, adaptadas a
                las necesidades específicas de cada cliente.
              </p>

              <div className="relative">
                {/* Línea vertical */}
                <div className="absolute left-4 h-full w-0.5 bg-blue-400"></div>

                {/* Elementos del timeline */}
                <div className="space-y-12 ml-12">
                  {/* Elemento 1 */}
                  <div className="relative">
                    <div className="absolute -left-12 -mt-2">
                      <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        EXPERIENCIA COMPROBADA
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Contamos con más de 20 años de experiencia ofreciendo
                        soluciones tecnológicas.
                      </p>
                    </div>
                  </div>

                  {/* Elemento 2 */}
                  <div className="relative">
                    <div className="absolute -left-12 -mt-2">
                      <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        CONOCIMIENTO DEL MERCADO
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Nuestro entendimiento profundo del mercado nos permite
                        ofrecer soluciones efectivas.
                      </p>
                    </div>
                  </div>

                  {/* Elemento 3 */}
                  <div className="relative">
                    <div className="absolute -left-12 -mt-2">
                      <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        MEJORES PRÁCTICAS DE LA INDUSTRIA
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Aplicamos metodologías y mejores prácticas para la
                        implementación exitosa.
                      </p>
                    </div>
                  </div>

                  {/* Elemento 4 */}
                  <div className="relative">
                    <div className="absolute -left-12 -mt-2">
                      <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        DISPONIBILIDAD DE COLABORADORES ESPECIALIZADOS
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Contamos con un equipo de especialistas con amplia
                        experiencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="px-8 py-3">
              Brochure
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              Coordinar una reunión
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-12 px-4 bg-gray-50">
        <Services />
      </section>

      {/* Productos Section */}
      <section className="py-16 px-4 bg-[#2B4158] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 ">Productos</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-gray-300  leading-relaxed ">
            Accedé a licencias, suscripciones y herramientas de software de
            primer nivel, gracias a nuestros socios estratégicos.
          </p>

          {/* Grid de iconos - Primera fila */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mb-6">
            {productos.map((producto) => (
              <div
                key={producto.name}
                className="bg-white p-4 rounded-lg aspect-square flex items-center justify-center"
              >
                <Image
                  src={producto.image}
                  alt={producto.name}
                  width={70}
                  height={70}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16   bg-gray-50">
        <Partner />
      </section>

      {/* Sección de Reclutamiento */}
      <section className="py-16 bg-[#6B89A7] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            ¿Querés formar parte del equipo?
          </h2>
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-6 text-lg font-medium"
          >
            Envianos tu CV
          </Button>
        </div>
      </section>
    </div>
  );
}
