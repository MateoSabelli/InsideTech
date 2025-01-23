"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import  ProductImage  from "@/components/ProductImage";
import { 
  Box, 
  ListChecks, 
  Bell, 
  BarChart3,
  ArrowRight
} from "lucide-react";
import { Contact } from "@/components/Contact";

export default function Assets() {
    const features = [
        {
          title: "Automatización de Flujos",
          description: "Define tareas, aprobaciones y escalados según reglas personalizadas.",
          icon: Box,
        },
        {
          title: "Gestión de Incidentes y Solicitudes",
          description: "Un solo panel para centralizar incidencias y requerimientos de los usuarios.",
          icon: ListChecks,
        },
        {
          title: "Portal de Autoservicio",
          description: "Facilita que los usuarios consulten una base de conocimiento y creen tickets rápidamente.",
          icon: BarChart3,
        },
        {
          title: "Reportes y Analíticas",
          description: "Accede a métricas sobre tiempos de resolución, SLA y backlog de tickets.",
          icon: Bell,
        },
      ];
  return (
    <div className="min-h-screen bg-white">
    
    <section className="pt-20  bg-gradient-to-b from-accent via-white to-white relative overflow-hidden z-0 h-screen flex items-center justify-center">
          <motion.div
            className="absolute w-[500px] h-[500px] -top-20 -left-20 rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(52, 211, 153, 0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              InvGate Service Desk
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              Eleva tu soporte de TI al siguiente nivel
              </h1>
              <p className="text-muted max-w-3xl mx-auto text-lg">
              Gestiona incidencias, solicitudes y problemas de forma ágil, con flujos de trabajo automatizados y una interfaz intuitiva.
              </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button
          size="lg"
          className="bg-primary hover:bg-mint-dark text-white px-8 py-3 rounded-lg text-lg animate-fadeIn"
        >
          Solicitar Demo
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
          </div>
            </motion.div>
          </div>
        </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-mint-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué es InvGate Service Desk?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700">
              InvGate Service Desk es una solución ITSM (IT Service Management) que unifica la gestión de tickets, 
              la automatización de procesos y la atención al usuario final, con buenas prácticas de ITIL. Su diseño 
              moderno y dashboards personalizables mejoran el trabajo de los ingenieros de sistemas y la experiencia 
              de soporte.
              </p>
            </div>
            <ProductImage
                src="/invgate-service-desk.png"
                alt="Panel de inventario"
                className="w-full h-[400px]"
              />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-8 hover:shadow-lg transition-shadow bg-white border-0 rounded-2xl">
                <div className="bg-primary/30 p-3 rounded-xl w-fit mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Button variant="ghost" className="text-mint hover:text-mint-dark p-0 flex items-center gap-2">
                  Conoce más <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Visualiza el Producto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <ProductImage
                src="/inventario.png"
                alt="Panel de inventario"
                className="w-full h-[300px]"
              />
              <h3 className="text-xl font-semibold">Panel de Inventario</h3>
              <p className="text-gray-600">Visualiza todos los activos descubiertos con filtros avanzados.</p>
            </div>
            <div className="space-y-4">
              <ProductImage
                src="/simplify-contract-management.png"
                alt="Detalles de activo"
                className="w-full h-[300px]"
              />
              <h3 className="text-xl font-semibold">Detalles de Activo</h3>
              <p className="text-gray-600">Información detallada de cada dispositivo y su historial.</p>
            </div>
            <div className="space-y-4">
              <ProductImage
                src="/identify-devices.png"
                alt="Alertas de licenciamiento"
                className="w-full h-[300px]"
              />
              <h3 className="text-xl font-semibold">Alertas de Licencias</h3>
              <p className="text-gray-600">Notificaciones de próximas expiraciones y renovaciones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">¿Por qué implementarlo con InsideTech?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Como Gold Sponsor de InvGate, InsideTech aporta soporte prioritario y experiencia 
            en implementaciones de gran escala. Te guiamos desde la planificación inicial hasta 
            la integración completa con tus procesos de TI.
          </p>
          <Button size="lg" className="bg-black hover:bg-mint-dark text-white">
            Contáctanos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
      <Contact />
    </div>
  )
}
