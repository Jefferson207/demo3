import { MenuCatalog } from '@/components/MenuCatalog';
import { Header } from '@/components/Header';
import { SocialRail } from '@/components/SocialRail';
import { WhatsAppButton } from '@/components/WhatsAppButton';
export const metadata = { title: 'Carta | El Pulpo Bebé', description: 'Explora la carta de pescados, mariscos y parrillas de El Pulpo Bebé.' };
export default function CartaPage() { return <><Header /><SocialRail /><WhatsAppButton /><main className="min-h-screen bg-[linear-gradient(135deg,#004F9F,#003B70)]"><MenuCatalog /></main></>; }
