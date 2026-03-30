import { Gavel, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary w-full pt-20 pb-10 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://69c5fe16e3b8dec4aa3614f1.imgix.net/logo%20de%20leiva/WhatsApp%20Image%202026-03-26%20at%2012.13.23.jpeg" 
              alt="Leiva Elián Logo" 
              className="h-40 w-auto object-contain rounded-sm brightness-90"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-on-primary/60 font-body text-sm leading-relaxed max-w-xs">
            Brindando soluciones legales con la precisión y el compromiso que su caso merece.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h6 className="text-tertiary-fixed-dim font-label text-[0.75rem] uppercase tracking-widest">Navegación</h6>
            <ul className="space-y-2">
              <li><a className="text-on-primary/60 hover:text-tertiary-fixed-dim text-sm transition-colors" href="#">Inicio</a></li>
              <li><a className="text-on-primary/60 hover:text-tertiary-fixed-dim text-sm transition-colors" href="#areas">Áreas</a></li>
              <li><a className="text-on-primary/60 hover:text-tertiary-fixed-dim text-sm transition-colors" href="#nosotros">Nosotros</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h6 className="text-tertiary-fixed-dim font-label text-[0.75rem] uppercase tracking-widest">Legal</h6>
            <ul className="space-y-2">
              <li><a className="text-on-primary/60 hover:text-tertiary-fixed-dim text-sm transition-colors" href="#">Privacidad</a></li>
              <li><a className="text-on-primary/60 hover:text-tertiary-fixed-dim text-sm transition-colors" href="#">Términos</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end justify-between">
          <div className="flex gap-4 mb-8">
            <a 
              className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-primary hover:bg-tertiary-fixed-dim hover:text-primary transition-all" 
              href="https://www.instagram.com/estudiojuridicoleiva/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-primary hover:bg-tertiary-fixed-dim hover:text-primary transition-all" 
              href="https://wa.me/541162839500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
          <p className="text-on-primary/40 font-label text-[0.7rem] uppercase tracking-[0.2em] md:text-right">
            © 2026 Leiva Elian. Excelencia Jurídica.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
        <div className="flex gap-8">
        </div>
        <span className="text-on-primary/30 text-[0.6rem] uppercase tracking-widest">Hecho con rigor legal</span>
      </div>
    </footer>
  );
}
