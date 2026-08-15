import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return <a href="#contacto" aria-label="Contactar por WhatsApp" className="whatsapp-float fixed bottom-5 right-5 z-40 grid size-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(0,0,0,.34)] sm:bottom-7 sm:right-7"><MessageCircle size={31} strokeWidth={2.4} /></a>;
}
