import { About } from "@/components/About";
import { InfiniteGallery } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import Productos from "@/components/productos";
import { Services } from "@/components/Services";
import { Partner } from "@/components/Partner";
export default function Home() {
  return (
    
    <div className="min-h-screen   relative overflow-hidden ">
      {/* Blur effect */}
      
        <div className="h-[10vh] sm:h-0"></div>
        <Hero />
        <InfiniteGallery />
        <Services />
        <About />
        <Productos/>
        <Partner/>
        <Contact />
        
      
    </div>
  );
}