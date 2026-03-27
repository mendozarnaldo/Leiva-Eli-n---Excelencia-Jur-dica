import { UserRoundSearch, Eye, Video } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  const features = [
    {
      icon: <UserRoundSearch className="text-on-tertiary-container w-10 h-10" />,
      title: "Atención Personalizada",
      description: "Cada caso es único. Proporcionamos un enfoque artesanal a la defensa de sus derechos.",
      bgColor: "bg-surface-container-low"
    },
    {
      icon: <Eye className="text-on-tertiary-container w-10 h-10" />,
      title: "Transparencia",
      description: "Comunicación clara sobre los procesos y expectativas reales de cada litigio.",
      bgColor: "bg-surface-container"
    },
    {
      icon: <Video className="text-on-tertiary-container w-10 h-10" />,
      title: "Consulta Virtual",
      description: "Asesoramiento jurídico moderno y accesible desde la comodidad de su hogar u oficina.",
      bgColor: "bg-surface-container-high"
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-12 ${feature.bgColor} flex flex-col justify-between min-h-[320px]`}
            >
              <div className="mb-8">{feature.icon}</div>
              <div>
                <h3 className="font-headline text-2xl mb-4">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
