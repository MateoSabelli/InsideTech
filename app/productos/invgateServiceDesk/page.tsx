"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProductImage from "@/components/ProductImage";
import { 
  ArrowRight,
  CheckCircle,
  Ticket,
  Settings,
  BarChart
} from "lucide-react";
import { Contact } from "@/components/Contact";

export default function Assets() {
    const features = [
      {
        title: "Gestión de Tickets",
        description: "Sistema intuitivo para manejo de incidentes y solicitudes",
        icon: Ticket,
      },
      {
        title: "Automatización",
        description: "Flujos de trabajo automatizados para mayor eficiencia",
        icon: Settings,
      },
      {
        title: "Análisis y Reportes",
        description: "Métricas detalladas y reportes personalizables",
        icon: BarChart,
      },
    ];

    const benefits = [
      {
        number: "+50%",
        description: "Reducción en tiempo de respuesta",
      },
      {
        number: "98%",
        description: "Satisfacción de usuarios",
      },
      {
        number: "24/7",
        description: "Soporte disponible",
      },
    ];

    const productFeatures = [
      {
        title: "Panel de Inventario",
        description: "Visualiza todos los activos descubiertos con filtros avanzados.",
        image: "/inventario.png",
      },
      {
        title: "Detalles de Activo",
        description: "Información detallada de cada dispositivo y su historial.",
        image: "/simplify-contract-management.png",
      },
      {
        title: "Alertas de Licencias",
        description: "Notificaciones de próximas expiraciones y renovaciones.",
        image: "/identify-devices.png",
      },
    ];

  return (
    <div className="min-h-screen">
    {/* Hero Section */}
    <section className="pt-24 pb-16 relative overflow-hidden">
      <motion.div
        className="absolute w-[800px] h-[800px] -top-40 -left-40 rounded-full mix-blend-multiply opacity-20"
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
      <motion.div
        className="absolute w-[600px] h-[600px] top-40 right-0 rounded-full mix-blend-multiply opacity-20"
        
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <motion.span 
              className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              InvGate Service Desk
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-6">
              Gestión de servicios IT simplificada
            </h1>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Automatiza la gestión de tickets, optimiza procesos IT y mejora la experiencia de soporte con una solución integral ITSM basada en ITIL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Solicitar Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-4 py-3 rounded-xl text-lg border-2 hover:bg-gray-50 w-full sm:w-auto transition-all duration-300"
                >
                  Ver características
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ProductImage
                src="/invgate-service-desk.png"
                alt="InvGate Service Desk Dashboard"
                className="w-full rounded-2xl shadow-2xl"
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg backdrop-blur-sm bg-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">Resolución automática</p>
                    <p className="text-sm text-gray-600">Reduce tiempo de respuesta</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Estadísticas Section */}
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.h3 
                className="text-5xl font-bold text-primary mb-3"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {benefit.number}
              </motion.h3>
              <p className="text-gray-600 text-lg">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Características Section */}
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Características Principales
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre las herramientas que hacen de InvGate Service Desk la solución perfecta para tu equipo de IT
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-3 rounded-xl w-fit mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Visualización del Producto */}
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Visualiza el Producto
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explora las diferentes funcionalidades que ofrece InvGate Service Desk
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productFeatures.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <ProductImage
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <motion.div
        className="absolute w-[800px] h-[800px] -top-40 -left-40 rounded-full mix-blend-multiply opacity-20"
        style={{
          background: "radial-gradient(circle at center, #ffffff 0%, transparent 70%)",
          filter: "blur(60px)",
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
        <div className="text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ¿Por qué implementarlo con InsideTech?
          </motion.h2>
          <motion.p 
            className="text-xl mb-12 max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Como Gold Sponsor de InvGate, InsideTech aporta soporte prioritario y experiencia 
            en implementaciones de gran escala. Te guiamos desde la planificación inicial hasta 
            la integración completa con tus procesos de TI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contáctanos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    <Contact />
  </div>
  )
}
