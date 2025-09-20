'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'Aconcagua',
    logo: '/Diagnostico.png',
    width: 150,
    height: 100,
  },
  {
    name: 'BBVA',
    logo: '/Sanatorio.png',
    width: 150,
    height: 100,
  },
  {
    name: 'Galeno',
    logo: '/Galeno.png',
    width: 100,
    height: 100,
  },
  {
    name: 'GrupoProvincia',
    logo: '/GrupoProvincia.png',
    width: 150,
    height: 100,
  },
  {
    name: 'Arcos Dorados',
    logo: '/Arcos.png',
    width: 150,
    height: 100,
  },
];

// Duplicamos los partners para el efecto infinito
const duplicatedPartners = [...partners, ...partners];

export const Clientes = () => {
  return (
    <section className=" bg-gray-200 overflow-hidden " id="clientes">
      <div className="max-w-7xl mx-auto flex flex-row gap-4 relative items-center justify-center h-[15vh]">
        <h2 className="text-xl md:text-lg font-semibold text-gray-600 dark:text-white w-[300px]">
          CONFÍAN EN NOSOTROS
        </h2>
        <div className=" w-full overflow-hidden flex items-center justify-center h-full">
          <motion.div
            className="flex items-center"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'reverse',
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0  dark:bg-gray-800/50 rounded-lg  flex items-center justify-center min-w-[250px] h-full"
              >
                <div className="relative w-full  flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
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
