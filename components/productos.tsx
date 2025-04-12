import React from 'react'
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductImage from "@/components/ProductImage";
import { 
    LayoutDashboard, 
    Briefcase,
    Server,
    ArrowRight,
    Database
  } from "lucide-react";
import Link from 'next/link';

export default function Productos() {
    const products = [
        {
          title: "InvGate Service Desk",
          description: "Gestión de servicios de TI con automatización y buenas prácticas ITIL.",
          icon: Briefcase,
          link: "/invgateServiceDesk",
          image: "/invgate-service-desk.png"
        },
        {
          title: "InvGate Assets",
          description: "Gestión integral del ciclo de vida de activos de TI y software.",
          icon: LayoutDashboard,
          link: "/invgateAssets",
          image: "/operations.jpg"
        },
        {
          title: "Red Hat",
          description: "Soluciones empresariales de código abierto para infraestructura y cloud.",
          icon: Server,
          link: "/rhel-hero-img-ohs1.png",
          image: "/banner-redhat.png"
        },
        {
          title: "Zabbix + Grafana",
          description: "Monitoreo y visualización avanzada de infraestructura TI.",
          icon: Database,
          link: "/monitoring",
          image: "/placeholder.svg"
        }
      ];
  return (
    <section id="productos" className="py-20 relative ">
      <div className="absolute top-0 right-0 w-[200px] h-[200px]  blur-[150px] rounded-full blur-container -z-0 block animate-blob" />
    <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Nuestros Productos</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para la gestión, monitoreo y optimización de servicios de TI
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.title} className="p-6 hover:shadow-lg transition-shadow  border-0 rounded-2xl">
                
                <ProductImage
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <Button variant="ghost" asChild className="group">
                <Link href={product.link}>
                  Conoce más
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}
