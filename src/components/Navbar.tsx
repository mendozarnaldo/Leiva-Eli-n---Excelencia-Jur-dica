import { Gavel } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <header className="w-full top-0 sticky z-50 bg-surface/80 backdrop-blur-md transition-colors duration-300 border-b border-outline-variant/10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-3">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer active:opacity-70 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="https://69c5fe16e3b8dec4aa3614f1.imgix.net/logo%20de%20leiva/WhatsApp%20Image%202026-03-26%20at%2012.13.23.jpeg" 
            alt="Leiva Elian Logo" 
            className="h-16 w-auto object-contain rounded-sm"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="hidden md:flex items-center gap-10">
          <a className="text-primary border-b-2 border-tertiary-fixed-dim pb-1 font-headline tracking-tight font-light transition-colors duration-300" href="#">Inicio</a>
          <a className="text-on-surface-variant hover:text-on-tertiary-container font-headline tracking-tight font-light transition-colors duration-300" href="#areas">Áreas de Práctica</a>
          <a className="text-on-surface-variant hover:text-on-tertiary-container font-headline tracking-tight font-light transition-colors duration-300" href="#nosotros">Sobre Nosotros</a>
          <a className="text-on-surface-variant hover:text-on-tertiary-container font-headline tracking-tight font-light transition-colors duration-300" href="#contacto">Contacto</a>
        </div>

        <motion.a 
          href="#contacto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-on-primary px-6 py-2 rounded-sm font-label text-[0.75rem] uppercase tracking-widest hover:bg-primary-container transition-all cursor-pointer"
        >
          Consulta
        </motion.a>
      </nav>
    </header>
  );
}
