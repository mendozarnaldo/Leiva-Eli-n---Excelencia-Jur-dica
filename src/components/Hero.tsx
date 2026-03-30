import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full object-cover opacity-40" 
          src="https://69c5fe16e3b8dec4aa3614f1.imgix.net/Fondo%20de%20pantalla/WhatsApp%20Image%202026-03-27%20at%2013.32.12.png"
          alt="Modern legal office"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 md:py-48">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8 }}
            className="inline-block h-px bg-tertiary-fixed-dim mb-8"
          ></motion.span>
          
          <motion.h1 
            className="font-headline text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-on-primary leading-tight tracking-tight mb-8 overflow-hidden"
          >
            {"Estudio Jurídico | Elian Leiva".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  color: "#D1C4A9", // A subtle gold/tertiary color
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  delay: 0.2 + i * 0.1, 
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className="inline-block mr-[0.25em] whitespace-nowrap cursor-default"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-headline text-xl md:text-2xl text-on-primary-container italic font-light mb-12 max-w-xl"
          >
            Defendemos tus derechos y garantías de manera eficaz y responsable.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a 
              className="bg-tertiary-fixed-dim text-primary px-10 py-4 rounded-sm font-label text-[0.85rem] font-bold uppercase text-center transition-all hover:bg-on-tertiary-container hover:text-white flex items-center justify-center" 
              href="https://wa.me/541162839500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2 -mr-[0.1em]">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="tracking-widest">Contacto</span>
              </div>
            </a>
            <a 
              className="border border-outline-variant/30 text-on-primary px-10 py-4 rounded-sm font-label text-[0.85rem] uppercase tracking-widest text-center transition-all hover:bg-white/10" 
              href="#areas"
            >
              Nuestros Servicios
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
