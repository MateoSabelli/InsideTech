import { About } from "@/components/About";
import { InfiniteGallery } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavDemo } from "@/components/NavDemo";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    
    <div className="min-h-screen   relative overflow-hidden ">
      {/* Blur effect */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/40 blur-[150px] rounded-full animate-blob -z-0" />
        <NavDemo />
        <Hero />
        <InfiniteGallery />
        <Services />
        <About />
        <Contact />
        <Footer />
      
    </div>
  );
}