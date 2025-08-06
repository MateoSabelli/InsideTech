"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden" id="contacto">
      {/* Fondo diagonal */}
      <div className="absolute top-0 right-0 w-[65%] h-full bg-primary skew-x-12 translate-x-32" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 py-20">
          {/* Información de Contacto */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-secondary dark:text-white">
              Contacto
            </h2>
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-medium text-secondary dark:text-white group-hover:text-primary transition-colors">
                    +54 11 4328-2662
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-medium text-secondary dark:text-white group-hover:text-primary transition-colors">
                    info@insidetech.com.ar
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-medium text-secondary dark:text-white group-hover:text-primary transition-colors">
                    Lavalle 416 | Piso 3
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Consultanos
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white border-0 h-12 text-lg"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white border-0 h-12 text-lg"
                />
              </div>
              <Input
                name="company"
                placeholder="Empresa"
                value={formData.company}
                onChange={handleChange}
                required
                className="bg-white border-0 h-12 text-lg"
              />
              <Textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white border-0 min-h-[150px] text-lg resize-none"
              />
              <Button
                type="submit"
                className="bg-white text-primary hover:bg-white/90 text-lg font-medium h-12 px-8"
              >
                ENVIAR
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};