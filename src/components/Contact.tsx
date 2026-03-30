import { MapPin, Mail, PhoneCall, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section className="py-32 bg-primary text-on-primary" id="contacto">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-5xl mb-10 leading-tight">Realiza tu consulta</h2>
            <p className="text-on-primary-container text-xl mb-16 italic font-light">
              "Su tranquilidad legal comienza con un asesoramiento honesto."
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <MapPin className="text-tertiary-fixed-dim w-6 h-6 mt-1" />
                <div>
                  <h5 className="font-label uppercase tracking-widest text-xs mb-2">Ubicación</h5>
                  <a 
                    href="https://maps.app.goo.gl/3ZsJDdrNsPRwXv7R7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-headline hover:text-tertiary-fixed-dim transition-colors"
                  >
                    Garibaldi 204, Oficina 8 <br />Quilmes, Buenos Aires, Argentina
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Mail className="text-tertiary-fixed-dim w-6 h-6 mt-1" />
                <div>
                  <h5 className="font-label uppercase tracking-widest text-xs mb-2">Email</h5>
                  <a 
                    href="mailto:Leivaelian1@gmail.com"
                    className="text-lg font-headline underline underline-offset-8 decoration-tertiary-fixed-dim/30 hover:text-tertiary-fixed-dim transition-colors"
                  >
                    Leivaelian1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Instagram className="text-tertiary-fixed-dim w-6 h-6 mt-1" />
                <div>
                  <h5 className="font-label uppercase tracking-widest text-xs mb-2">Instagram</h5>
                  <a 
                    href="https://www.instagram.com/estudiojuridicoleiva/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-headline hover:text-tertiary-fixed-dim transition-colors"
                  >
                    @estudiojuridicoleiva
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center gap-2">
                  <PhoneCall className="text-tertiary-fixed-dim w-6 h-6" />
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 fill-tertiary-fixed-dim"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-label uppercase tracking-widest text-xs mb-2">Teléfono / WhatsApp</h5>
                  <a 
                    href="https://wa.me/541162839500" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-headline hover:text-tertiary-fixed-dim transition-colors"
                  >
                    +54 11 6283-9500
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-surface-container-lowest p-8 md:p-10 text-on-surface"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="group">
                <label className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-2 transition-colors group-focus-within:text-on-tertiary-container">Nombre Completo</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-on-tertiary-container px-0 py-2 text-lg placeholder:text-outline-variant transition-all" 
                  placeholder="Juan Pérez" 
                  type="text" 
                />
              </div>

              <div className="group">
                <label className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-2 transition-colors group-focus-within:text-on-tertiary-container">Correo Electrónico</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-on-tertiary-container px-0 py-2 text-lg placeholder:text-outline-variant transition-all" 
                  placeholder="juan@ejemplo.com" 
                  type="email" 
                />
              </div>

              <div className="group">
                <label className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-2 transition-colors group-focus-within:text-on-tertiary-container">Asunto</label>
                <select className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-on-tertiary-container px-0 py-2 text-lg transition-all appearance-none">
                  <option>Derecho Penal</option>
                  <option>Derecho Civil</option>
                  <option>Derecho Laboral</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="group">
                <label className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-2 transition-colors group-focus-within:text-on-tertiary-container">Mensaje</label>
                <textarea 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-on-tertiary-container px-0 py-2 text-lg placeholder:text-outline-variant transition-all resize-none" 
                  placeholder="¿Cómo podemos ayudarle?" 
                  rows={3}
                ></textarea>
              </div>

              <button 
                type="button"
                onClick={() => {
                  const name = (document.querySelector('input[placeholder="Juan Pérez"]') as HTMLInputElement)?.value;
                  const message = (document.querySelector('textarea[placeholder="¿Cómo podemos ayudarle?"]') as HTMLTextAreaElement)?.value;
                  const subject = (document.querySelector('select') as HTMLSelectElement)?.value;
                  const text = `Hola, mi nombre es ${name}. Asunto: ${subject}. Mensaje: ${message}`;
                  window.open(`https://wa.me/541162839500?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="bg-primary text-on-primary py-3 px-8 rounded-sm font-label uppercase text-xs hover:bg-primary-container transition-all mt-4 flex items-center justify-center mx-auto w-fit"
              >
                <div className="flex items-center gap-2 -mr-[0.3em]">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="tracking-[0.3em]">Enviar por WhatsApp</span>
                </div>
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 h-[450px] w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700 border border-outline-variant/20"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.434316377827!2d-58.2566418!3d-34.7214619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e6907476837%3A0x69680373876837!2sGaribaldi%20204%2C%20B1878%20Quilmes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1711480000000!5m2!1ses-419!2sar" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Leiva Elián"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
