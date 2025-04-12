"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  MonitorCheck, 
  Cloud, 
  Terminal, 
  Shield, 
  Database, 
  GitBranch,
  HeadphonesIcon,
  Settings,
  Network
} from "lucide-react";

const products = [
  {
    title: "Monitoreo y Observabilidad",
    description: "Soluciones de monitoreo integral con Zabbix y Grafana para una visibilidad completa de tu infraestructura. Detecta y resuelve problemas antes de que afecten tu negocio.",
    icon: MonitorCheck,
    image: "/monitoring.jpg",
    span: true
  },
  {
    title: "Cloud & DevOps",
    description: "Servicios de nube y automatización con las mejores prácticas de DevOps para optimizar tu desarrollo y despliegue continuo. Implementamos soluciones escalables y seguras.",
    icon: Cloud,
    image: "/cloud-devops.jpg"
  },
  {
    title: "Desarrollo de Software",
    description: "Desarrollo de aplicaciones personalizadas y soluciones a medida que impulsan la innovación en tu negocio. Enfoque en calidad y metodologías ágiles.",
    icon: Terminal,
    image: "/software-dev.jpg"
  },
  {
    title: "Consultoría IT",
    description: "Asesoramiento estratégico para optimizar tu infraestructura tecnológica. Diseñamos soluciones personalizadas para potenciar tu negocio con las mejores prácticas del mercado.",
    icon: Settings,
    image: "/consulting.jpg",
    span: true
  },
  {
    title: "Soporte IT 24/7",
    description: "Servicio de soporte técnico integral disponible 24/7. Resolución proactiva de incidentes y mantenimiento preventivo para garantizar la continuidad de tu negocio.",
    icon: HeadphonesIcon,
    image: "/support.jpg",
    span: true
  },
  {
    title: "Seguridad IT",
    description: "Protección integral de tu infraestructura con soluciones de seguridad avanzadas y monitoreo continuo. Implementación de mejores prácticas y políticas de seguridad.",
    icon: Shield,
    image: "/security.jpg"
  },
  {
    title: "Gestión de Bases de Datos",
    description: "Administración y optimización de bases de datos para garantizar el máximo rendimiento y disponibilidad. Respaldos, recuperación y mantenimiento preventivo.",
    icon: Database,
    image: "/database.jpg"
  },
  {
    title: "Control de Versiones",
    description: "Implementación y gestión de sistemas de control de versiones para mantener tu código seguro y organizado. Integración con flujos de trabajo DevOps.",
    icon: GitBranch,
    image: "/version-control.jpg"
  },
  {
    title: "Migraciones",
    description: "Servicios especializados en migraciones de infraestructura, aplicaciones y datos. Transición segura a la nube o nuevos entornos con mínimo impacto operativo.",
    icon: Network,
    image: "/migrations.jpg",
    span: true
  }
];

export const Products = () => {
  return (
    <section className="py-20 relative" id="productos">
        <div className="absolute top-0 left-0 w-[200px] h-[200px]  blur-[150px] rounded-full blur-container -z-0 hidden md:block animate-blob" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Productos
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Soluciones Integrales de TI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofrecemos un conjunto completo de servicios y productos diseñados para transformar los desafíos tecnológicos en ventajas competitivas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${product.span ? 'lg:col-span-2' : ''}`}
            >
              <Card className="group bg-zinc-900 border-zinc-800 hover:border-primary/20 transition-all duration-300 h-full overflow-hidden">
                <CardHeader className="relative p-0">
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-zinc-900 to-zinc-900 group-hover:from-primary/30 transition-all duration-300" />
                    <product.icon className="w-16 h-16 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                  </div>
                  <div className="p-6">
                    <CardTitle className="text-white text-2xl group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};