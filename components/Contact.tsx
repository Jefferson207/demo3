import { Clock3, MapPin, Phone } from 'lucide-react';
import { Brand } from './Brand';
import { SectionReveal } from './SectionReveal';

export function Contact() {
  return <section id="contacto" className="py-20">
    <div className="shell grid gap-10 lg:grid-cols-[1fr_1.15fr]">
      <SectionReveal><p className="eyebrow">Visítanos</p><h2 className="mt-3 font-display text-4xl font-black">Tu próxima mesa está aquí.</h2><div className="mt-8 space-y-5 text-sm text-white/70"><p className="flex gap-3"><MapPin className="shrink-0 text-electric" size={19}/>Jr. Intisuyo 221, Urb. Maranga<br />San Miguel, Lima 15088</p><p className="flex gap-3"><Clock3 className="shrink-0 text-electric" size={19}/>Lun – Dom · 10:00 a. m. – 6:00 p. m.</p><a className="flex gap-3 transition hover:text-white" href="tel:012462644"><Phone className="shrink-0 text-electric" size={19}/>01 246 2644</a></div></SectionReveal>
      <SectionReveal className="min-h-[300px] overflow-hidden rounded-3xl surface"><div className="grid h-full min-h-[300px] place-items-center bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,239,.2),transparent_2px),linear-gradient(120deg,rgba(255,255,255,.04),transparent)] bg-[size:20px_20px,auto]"><a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=Jr.+Intisuyo+221%2C+Urb.+Maranga%2C+San+Miguel%2C+Lima+15088" target="_blank" rel="noreferrer"><MapPin size={17} /> Abrir Google Maps</a></div></SectionReveal>
    </div>
  </section>;
}

export function Footer() {
  return <footer className="border-t border-white/10 bg-[#01131e] py-10"><div className="shell flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><Brand /><div className="text-sm text-white/45"><div className="mb-3 flex gap-4 text-white/70"><a href="#inicio">Inicio</a><a href="#carta">Carta</a><a href="#galeria">Galería</a><a href="#contacto">Contacto</a></div>© 2026 El Pulpo Bebé. Todos los derechos reservados.</div></div></footer>;
}
