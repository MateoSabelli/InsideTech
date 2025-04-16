"use client";
import { motion } from 'framer-motion';
import Image from 'next/image'

const clients = [
  { id: 1, name: 'Bancor', logo: '/svg/Bancor.svg' },
  { id: 2, name: 'Aconcagua', logo: '/svg/Aconcagua.svg' },
  { id: 3, name: 'Arcos Dorados', logo: '/svg/ArcosDorados.svg' },
  { id: 4, name: 'Diagnostico Maipu', logo: '/svg/Diagnostico.svg' },
  { id: 5, name: 'Galeno', logo: '/svg/galeno.svg' },
  { id: 6, name: 'GrupoProvincia', logo: '/svg/GrupoProvincia.svg' },
  { id: 7, name: 'BBVA', logo: '/svg/BBVA.svg' }
]

export function InfiniteGallery() {
  return (
    <section className="pb-28 " id="clientes">
      <div className=" container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-md font-semibold tracking-tight">
            Empresas que confían en nosotros
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center space-x-16 gap-y-8">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={50}
                className="grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

