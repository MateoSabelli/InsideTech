"use client";
import Image from 'next/image'
const clients = [
  { id: 1, name: 'Client 1', logo: '/Centralpuerto.svg' },
  { id: 2, name: 'Client 2', logo: '/BBVA.svg' },
  { id: 3, name: 'Client 3', logo: '/Aluar.svg' },
  { id: 4, name: 'Client 4', logo: '/Ledesma.png' },
  { id: 5, name: 'Client 5', logo: '/Bunge.svg' },
  { id: 6, name: 'Client 5', logo: '/GrupoProvincia.png' },
  { id: 7, name: 'Client 5', logo: '/Galeno.png' },
  { id: 8, name: 'Client 5', logo: '/Aconcagua.png' },
  { id: 9, name: 'Client 5', logo: '/Sanatorio.png' },
  { id: 10, name: 'Client 5', logo: '/Arcos.png' },
  { id: 11, name: 'Client 5', logo: '/Bancor.png' },
  { id: 12, name: 'Client 5', logo: '/Diagnostico.png' },
]

export function InfiniteGallery() {
  return (
    <section className="py-12 flex flex-col md:flex-row  items-center justify-center mx-auto gap-10 " id="clientes">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600-500/20 blur-[150px] rounded-full animate-blob" />
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Clientes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-6">
            Empresas que confían en nosotros
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-lg">
            Descubre por qué las empresas líderes eligen a InsideTech como su socio tecnológico de confianza.
          </p>
        </div>
      </div> */}
        {/* <div className="md:text-start text-center mb-16 "> 
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Clientes
          </span>
          <h2 className="text-3xl md:text-lg font-bold text-secondary dark:text-white mb-6">
            Empresas que confían en nosotros
          </h2>
          <p className="text-muted max-w-lg mx-auto text-md">
            Descubre por qué las empresas líderes eligen a InsideTech como su socio tecnológico de confianza.
          </p>
        </div> */}
        <div className="w-full overflow-hidden flex flex-col justify-center items-center">
        {/* <span className='h-[0.5px] w-full bg-gray-700'></span> */}
          <div className="flex animate-scroll items-center ">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div key={`${client.id}-${index}`} className="flex-shrink-0 mx-10">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={100}
                />
              </div>
            ))}
          </div>
          {/* <span className='h-[0.5px] w-full bg-gray-700'></span> */}
        </div>
    </section>

    
    
  )
}

