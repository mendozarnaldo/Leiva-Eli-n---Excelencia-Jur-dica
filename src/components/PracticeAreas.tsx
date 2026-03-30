import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PracticeAreas() {
  const areas = [
    {
      title: "Derecho Penal",
      description: `Defensa en causas penales. Asistencia en comisarías y fiscalías. 
Excarcelacion y morigeracion de prisión. 
Recursos de Apelacion, Casacion, y Extraordinarios ante la SCJBA y CSJN. 
Juicios orales. Etapa de ejecución. Representación de víctimas (querellas- particular damnificado).`,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Derecho Civil",
      description: "Asesoramiento integral en contratos, accidentes de tránsito, daños y perjuicios, sucesiones.",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Derecho Laboral",
      description: "Asesoramiento a trabajadores y empresas en cuestiones de derecho laboral, despidos, accidentes laborales, reclamos ante la ART.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 bg-surface-container-lowest" id="areas">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <label className="font-label text-[0.75rem] uppercase tracking-[0.2em] text-on-tertiary-container mb-4 block">Especialidades</label>
            <h2 className="font-headline text-4xl md:text-5xl leading-tight">Áreas de Práctica</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {areas.map((area, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  src={area.image}
                  alt={area.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-headline text-2xl mb-3 flex items-center justify-between">
                {area.title}
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-on-tertiary-container" />
              </h4>
              <p className="text-on-surface-variant font-light whitespace-pre-line">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
