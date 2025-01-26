"use client";
import Image from 'next/image'
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const clients = [
  { id: 1, name: 'Client 1', logo: '/Centralpuerto.svg' },
  { id: 2, name: 'Client 2', logo: '/BBVA.svg' },
  { id: 3, name: 'Client 3', logo: '/Aluar.svg' },
  { id: 4, name: 'Client 4', logo: '/Ledesma.png' },
  { id: 5, name: 'Client 5', logo: '/Bunge.svg' },
  { id: 5, name: 'Client 5', logo: '/GrupoProvincia.png' },
  { id: 5, name: 'Client 5', logo: '/Galeno.png' },
  { id: 5, name: 'Client 5', logo: '/Aconcagua.png' },
  { id: 5, name: 'Client 5', logo: '/Sanatorio.png' },
  { id: 5, name: 'Client 5', logo: '/Arcos.png' },
  { id: 5, name: 'Client 5', logo: '/Bancor.png' },
  { id: 5, name: 'Client 5', logo: '/Diagnostico.png' },
]

export function InfiniteGallery() {
  return (
    <section className="pb-32  " id="clientes">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600-500/20 blur-[150px] rounded-full animate-blob" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="w-full overflow-hidden  pt-10">
      <div className="flex animate-scroll items-center ">
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div key={`${client.id}-${index}`} className="flex-shrink-0  mx-16">
            <Image
              src={client.logo}
              alt={client.name}
              width={160}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>

    
    
  )
}

