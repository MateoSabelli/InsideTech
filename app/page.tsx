import Hero2 from '@/components/pagina2/Hero2';
import Productos2 from '@/components/pagina2/Productos2';
import { Services } from '@/components/Services';
import { Clientes } from '@/components/Partner';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
// import { FaPlus } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      <Hero2 />

      {/* <section className="py-8 px-4 bg-[#F0F3F7]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto items-center justify-center">
          <div className="flex flex-row items-center justify-center space-x-4">
            <FaPlus className="text-gray-500 text-4xl" />
            <div className="text-start">
              <div className="text-4xl font-bold text-[#6AA2CC]">20</div>
              <div className="text-lg text-black font-semibold">Años</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center space-x-4">
            <FaPlus className="text-gray-500 text-4xl" />
            <div className="text-start">
              <div className="text-4xl font-bold text-[#6AA2CC]">500</div>
              <div className="text-lg text-black font-semibold">Proyectos</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center space-x-4">
            <FaPlus className="text-gray-500 text-4xl" />
            <div className="text-start">
              <div className="text-4xl font-bold text-[#6AA2CC]">100</div>
              <div className="text-lg text-black font-semibold">Clientes</div>
            </div>
          </div>
        </div>
      </section> */}
      <Clientes />

      <Services />
      <Productos2 />
      {/* <section className="px-4 bg-[#F0F3F7] h-[12vh]  ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto items-center justify-center h-full">
          <div className="flex flex-row items-center justify-center space-x-4">
            <FaPlus className="text-gray-500 text-3xl" />
            <div className="text-start">
              <div className="text-2xl font-bold text-[#6AA2CC]">20</div>
              <div className="text-lg text-gray-500 font-semibold">Años</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center space-x-4">
            <FaPlus className="text-gray-500 text-3xl" />
            <div className="text-start">
              <div className="text-2xl font-bold text-[#6AA2CC]">500</div>
              <div className="text-lg text-gray-500 font-semibold">
                Proyectos
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center space-x-4">
            <FaPlus className="text-gray-500 text-3xl" />
            <div className="text-start">
              <div className="text-2xl font-bold text-[#6AA2CC]">100</div>
              <div className="text-lg text-gray-500 font-semibold">
                Clientes
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16  px-4 " id="nosotros">
        {' '}
        {/* py-16 */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-start justify-start">
                <h2 className="text-3xl  max-w-7xl mx-auto font-semibold text-[#39506D] mb-8">
                  Nosotros
                </h2>
                <p className="text-gray-600 mb-4 text-center">
                  {' '}
                  {/* text-justify */}
                  Con más de 20 años de experiencia en el mercado tecnológico,
                  acompañamos a las organizaciones en el logro de sus objetivos
                  de negocio. Diseñamos, desarrollamos e implementamos
                  soluciones tecnológicas, innovadoras y de alta calidad.
                </p>
                <p className="text-gray-600 mb-6 text-center">
                  {' '}
                  {/* text-justify */}
                  Empresas líderes confían en nosotros, no solo por nuestra
                  capacidad técnica, sino también por el respaldo y el
                  compromiso que ofrecemos como socio estratégico, mediante un
                  modelo de trabajo basado en el desarrollo de relaciones de
                  confianza con clientes y proveedores.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <Image
                  src="/home/homeInfo.png"
                  alt="Nosotros"
                  width={700}
                  height={700}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl  max-w-7xl mx-auto font-semibold text-[#39506D] my-8">
                  Nuestra visión
                </h2>
                <p className="text-gray-600 mb-4 text-justify">
                  Ser reconocidos como un socio tecnológico estratégico de
                  referencia en Latinoamérica, por la calidad de nuestros
                  servicios, el compromiso con nuestros clientes y nuestra
                  capacidad de generar valor sostenido en cada proyecto.
                </p>
              </div>
              <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-4 rounded-full h-[40px] w-auto ">
                Ver brochure
              </Button>
            </div>

            {/* Right Column - Por qué elegir */}
            <div className="flex flex-col items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl text-center max-w-7xl mx-auto font-semibold text-[#39506D] mb-8">
                  ¿Por qué elegirnos?
                </h2>
                <p className="text-gray-600 mb-8 text-center">
                  En InsideTech combinamos experiencia, conocimiento y
                  compromiso para ofrecer soluciones tecnológicas de alto valor,
                  adaptadas a las necesidades específicas de cada cliente. Estas
                  son algunas razones por las que nuestros clientes nos eligen:
                </p>
              </div>

              <div className="relative">
                {/* Línea vertical centrada */}
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-[#6AA2CC]"></div>

                {/* Flecha hacia abajo al final de la línea */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-[#6AA2CC]"></div>
                </div>

                {/* Elementos del timeline */}
                <div className="space-y-8">
                  {/* 1 - Izquierda */}
                  <div className="relative">
                    {/* número */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1">
                      <div className="w-10 h-10 bg-[#6AA2CC] rounded-full flex items-center text-xl justify-center text-white font-bold">
                        1
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 items-start">
                      <div></div>
                      <div className="text-left pl-8 space-y-2">
                        <p className="text-[#6AA2CC] font-semibold">
                          EXPERIENCIA <br /> COMPROBADA
                        </p>
                        <p className="text-gray-700 text-base max-w-xs ml-auto">
                          Contamos con un{' '}
                          <span className=" text-[#39506D]">
                            equipo de colaboradores{' '}
                          </span>
                          altamente capacitados.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2 - Derecha */}
                  <div className="relative">
                    {/* número */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1">
                      <div className="w-10 h-10 bg-[#6AA2CC] rounded-full flex items-center text-xl justify-center text-white font-bold">
                        2
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 items-start">
                      <div className="text-right pr-8 space-y-2">
                        <p className="text-[#6AA2CC] font-semibold">
                          CONOCIMIENTO DEL MERCADO
                        </p>
                        <p className="text-gray-700 text-base">
                          Nuestros colaboradores poseen una{' '}
                          <span className=" text-[#39506D]">
                            sólida trayectoria{' '}
                          </span>
                          en el mercado de infraestructura y servicios IT.
                        </p>
                      </div>
                    </div>
                    <div></div>
                  </div>

                  {/* 3 - Izquierda */}

                  <div className="relative">
                    {/* número */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1">
                      <div className="w-10 h-10 bg-[#6AA2CC] rounded-full flex items-center text-xl justify-center text-white font-bold">
                        3
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 items-start">
                      <div></div>
                      <div className="text-left pl-8 space-y-3">
                        <p className="text-[#6AA2CC] font-semibold">
                          MEJORES PRÁCTICAS DE LA INDUSTRIA
                        </p>
                        <p className="text-gray-700 text-base">
                          Aplicamos{' '}
                          <span className=" text-[#39506D]">
                            estándares y procedimientos{' '}
                          </span>
                          basados en las mejores prácticas para la gestión de
                          servicios y soporte.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* número */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1">
                      <div className="w-10 h-10 bg-[#6AA2CC] rounded-full flex items-center text-xl justify-center text-white font-bold">
                        4
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 items-start">
                      <div className="text-right pr-8 space-y-3">
                        <p className="text-[#6AA2CC] font-semibold">
                          DISPONIBILIDAD DE COLABORADORES CALIFICADOS
                        </p>
                        <p className="text-gray-700 text-base">
                          Contamos con un{' '}
                          <span className=" text-[#39506D] font-semibold">
                            equipo de especialistas{' '}
                          </span>
                          con amplia experiencia.
                        </p>
                        <span className="h-6"></span>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-4 rounded-full h-[40px] w-auto ">
                CONTÁCTANOS PARA TU PROYECTO
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* <Productos2 /> */}

      <section className="max-w-7xl mx-auto rounded-3xl bg-[#6AA2CC]/70 h-[35vh] flex flex-col items-center justify-center mb-16">
        <h4 className="text-[#39506D] text-3xl font-semibold  py-4">
          ¿Querés formar parte de nuestro equipo?
        </h4>
        <Button className="bg-[#39506D] hover:bg-[#39506D]/90 font-semibold text-lg text-white px-8 py-3 mt-4 rounded-full h-[40px] w-auto ">
          Envianos tu CV
        </Button>
      </section>
    </div>
  );
}
