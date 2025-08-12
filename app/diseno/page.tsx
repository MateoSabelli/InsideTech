import { Button } from '@/components/ui/button';
import { Services } from '@/components/Services';
import { Clientes } from '@/components/Partner';
import Navbar2 from '@/components/pagina2/navbar2';

export default function Diseño() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Blue Bar */}
      <Navbar2 />
      {/* Hero Section */}

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
      <section className="py-16 px-4  bg-gray-50" id="nosotros">
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
      <section className="py-12 px-4 bg-gray-50" id="servicios">
        <Services />
      </section>

      {/* Productos Section */}

      <section className="py-16   bg-gray-50" id="clientes">
        <Clientes />
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
