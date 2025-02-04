import { About } from "@/components/About";
import { InfiniteGallery } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Integrales";
import Productos from "@/components/productos";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    
    <div className="min-h-screen   relative overflow-hidden ">
      {/* Blur effect */}
        <Hero />
        <InfiniteGallery />
        <Services />
        <Productos />
        <About />
        <Contact />
        
      
    </div>
  );
}