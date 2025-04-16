"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "IBM",
    logo: "/Partners/IBM2.svg",
  },
  {
    name: "Invgate",
    logo: "/Partners/invgate.svg",
  },
  {
    name: "Red Hat",
    logo: "/Partners/redhat.svg",
  },
  {
    name: "Zabbix",
    logo: "/Partners/zabbix.svg",
  },
  {
    name: "Grafana",
    logo: "/Partners/grafana.svg",
  },
];

// Duplicamos los partners para el efecto infinito
const duplicatedPartners = [...partners, ...partners];

export const Partner = () => {
  return (
    <section className="py-20 overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mt-2">
            Trabajamos con los mejores
          </h2>
        </div>

        <div className="relative w-full">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 bg-white dark:bg-gray-800/50 shadow-md rounded-lg p-8 flex items-center justify-center min-h-[120px] min-w-[250px]"
              >
                <div className="relative w-full h-[40px] flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={50}
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
