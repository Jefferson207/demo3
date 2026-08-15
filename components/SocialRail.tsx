import { Instagram, Music2 } from 'lucide-react';

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: <span className="font-sans text-xl font-bold leading-none">f</span> },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: <Instagram size={20} strokeWidth={2.3} /> },
  { label: 'TikTok', href: 'https://www.tiktok.com/', icon: <Music2 size={20} strokeWidth={2.3} /> },
];

export function SocialRail() {
  return <aside aria-label="Redes sociales" className="social-rail fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/25 bg-black/60 px-2.5 py-4 shadow-2xl shadow-black/30 backdrop-blur-md lg:block">
    <div className="flex flex-col items-center gap-4">{socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} className="grid size-9 place-items-center rounded-full text-white/90 hover:bg-white hover:text-ocean">{link.icon}</a>)}</div>
  </aside>;
}
