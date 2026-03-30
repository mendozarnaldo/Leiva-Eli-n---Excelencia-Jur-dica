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
            className="w-full md:w-3/5 z-0 overflow-hidden rounded-sm shadow-md"
          >
            <img 
              className="w-full h-full aspect-[4/5] object-cover scale-125 origin-center" 
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
            <label className="font-label text-[0.75rem] uppercase tracking-[0.2em] text-on-tertiary-container mb-6 block">Nuestro Estudio</label>
            <h2 className="font-headline text-4xl mb-8 leading-tight">Dr. Elian Leiva</h2>
            
            <div className="space-y-6 text-on-surface-variant leading-relaxed font-light">
              <p>En el Estudio Jurídico Elian Leiva nos especializamos en derecho penal, brindando asesoramiento y defensa tanto a personas imputadas como a víctimas de delitos.
Entendemos que enfrentar un proceso penal es una situación compleja y delicada. Por eso, ofrecemos un acompañamiento cercano, confidencial y personalizado desde el primer momento, diseñando estrategias jurídicas sólidas orientadas a obtener el mejor resultado para tu caso concreto.</p>
              <p>Asumimos tu defensa en todas las etapas del proceso penal, desde la investigación inicial, en etapa de juicio oral, o durante la ejecución de la pena, interviniendo con profesionalismo, responsabilidad y total compromiso.</p>
              
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
