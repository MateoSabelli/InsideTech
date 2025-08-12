'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'Aconcagua',
    logo: '/svg/Aconcagua.svg',
  },
  {
    name: 'BBVA',
    logo: '/svg/BBVA.svg',
  },
  {
    name: 'Galeno',
    logo: '/svg/galeno.svg',
  },
  {
    name: 'GrupoProvincia',
    logo: '/svg/GrupoProvincia.svg',
  },
  {
    name: 'Arcos Dorados',
    logo: '/svg/ArcosDorados.svg',
  },
];

// Duplicamos los partners para el efecto infinito
const duplicatedPartners = [...partners, ...partners];

export const Clientes = () => {
  return (
    <section className="container mx-auto overflow-hidden pt-5" id="clientes">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex flex-row gap-4">
        {/* <div className="text-start mb-16">
          <h2 className="text-3xl md:text-3xl font-semibold text-secondary dark:text-white mt-2">
            Empresas que confían en nosotros
          </h2>
        </div> */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'reverse',
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0  dark:bg-gray-800/50  rounded-lg p-8 flex items-center justify-center min-h-[120px] min-w-[250px]"
              >
                <div className="relative w-full h-[40px] flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain hover:filter-none transition-all duration-300"
                    priority
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
