import { motion } from 'motion/react';

export default function Bio() {
  return (
    <section className="py-32 bg-surface" id="nosotros">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5 z-0"
          >
            <img 
              className="w-full aspect-[4/5] object-cover object-top rounded-sm" 
              src="https://69c5fe16e3b8dec4aa3614f1.imgix.net/foto%20de%20perfil%20leiva/FotoPerfil.png"
              alt="Dr. Leiva Elián"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-2/5 bg-surface-container-lowest p-12 md:p-20 md:-ml-24 z-10 shadow-sm"
          >
            <label className="font-label text-[0.75rem] uppercase tracking-[0.2em] text-on-tertiary-container mb-6 block">Trayectoria</label>
            <h2 className="font-headline text-4xl mb-8 leading-tight">Dr. Leiva Elián</h2>
            
            <div className="space-y-6 text-on-surface-variant leading-relaxed font-light">
              <p>Con más de una década de experiencia en el ámbito jurídico, el Dr. Leiva Elián se ha distinguido por una práctica basada en la ética inquebrantable y el estudio pormenorizado de la jurisprudencia.</p>
              <p>Egresado con honores, su visión de la abogacía combina la tradición legal con las herramientas tecnológicas actuales, permitiendo una resolución de conflictos eficiente y cercana al cliente.</p>
              
              <div className="pt-8 flex items-center gap-6">
                <img 
                  className="w-16 h-16 rounded-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD1ZA6biB66D7dkUoUxZytVO2jxo9eUL48-yDVlJ6ZfsFd85__8jR6hPDfH3OXQ1tFw4cFc795Wi-xSATkg_Fie8kS1Opr0mDWgsJ-uoPCh0At8Xpw4PfNEqobtVSsHO9uNmpIa5tkskw4OApSs8TCzPzoSSnajQ4UKKjJzWGD_n6TmxEBzNYxKpUN0szNLLD7nzKlDSstwBhG3VvIvg17N5A6r1ZvipVS5LELcoRYDY8m47MAhDbJtgPwFKLzTZ2XD2nbaOodILo"
                  alt="Colegio de Abogados"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-primary font-bold text-sm">Colegio de Abogados</p>
                  <p className="text-xs uppercase tracking-widest text-on-tertiary-container">Matrícula Profesional activa</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
