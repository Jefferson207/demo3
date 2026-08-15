import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return <a href="#contacto" aria-label="Contactar por WhatsApp" className="whatsapp-float fixed bottom-4 right-4 z-40 grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(0,0,0,.34)] lg:bottom-7 lg:right-7 lg:size-16"><MessageCircle className="size-6 lg:size-8" strokeWidth={2.4} /></a>;
}
