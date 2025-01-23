"use client";
import { motion } from "framer-motion";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  children?: React.ReactNode;
}

export const ServiceLayout = ({
  title,
  subtitle,
  description,
  features,
  children,
}: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-accent via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
                {title}
              </h1>
              <p className="text-muted max-w-3xl mx-auto text-lg">
                {description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {children}
          </div>
        </section>
      </main>
    </div>
  );
};