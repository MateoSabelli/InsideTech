import { ServiceLayout } from '@/components/ServiceLayout';

export default function ConsultoriaPage() {
  return (
    <ServiceLayout
      title="Consultoría e Implementación de Infraestructura"
      subtitle="Servicios"
      description="Asegura un entorno tecnológico estable y escalable. Nuestros expertos diseñan e implementan infraestructuras on-premise, híbridas o en la nube, ajustadas a las necesidades y crecimiento de tu organización."
      features={[
        {
          title: 'Evaluación de entornos existentes',
          description:
            'Análisis detallado de tu infraestructura actual para identificar oportunidades de mejora.',
        },
        {
          title: 'Arquitectura e implementación',
          description:
            'Diseño e implementación de soluciones on-premise, cloud o híbridas según tus necesidades.',
        },
        {
          title: 'Optimización de redes y servidores',
          description:
            'Mejora del rendimiento y la eficiencia de tu infraestructura actual.',
        },
        {
          title: 'Migraciones a nuevos entornos',
          description:
            'Transición segura y eficiente a nuevas plataformas o tecnologías.',
        },
      ]}
    />
  );
}
