import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import Productos from '@/components/productos';
import { Services } from '@/components/Services';
import { Partner } from '@/components/Partner';
import { NavDemo } from '@/components/NavDemo';
export default function Home() {
  return (
    <div className="min-h-screen   relative overflow-hidden ">
      <div className="h-[10vh] sm:h-0"></div>
      <NavDemo />
      <Hero />
      <Partner />
      <Services />
      <About />
      <Productos />
      <Contact />
    </div>
  );
}
