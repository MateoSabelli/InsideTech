import { About } from "@/components/About";
import { InfiniteGallery } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    
    <div className="min-h-screen   relative overflow-hidden ">
      {/* Blur effect */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/40 blur-[150px] rounded-full animate-blob -z-0 hidden md:block" />
        <div className="h-[10vh] sm:h-0"></div>
        <Hero />
        <InfiniteGallery />
        <Services />
        <About />
        <Contact />
        
      
    </div>
  );
}