import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import Hero2 from '@/components/pagina2/Hero2';
import Productos2 from '@/components/pagina2/Productos2';
import { Services } from '@/components/Services';
import { Clientes } from '@/components/Partner';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      <Hero2 />
      <Clientes />
      <Services />
      <About />
      <Productos2 />
      <Contact />
    </div>
  );
}
