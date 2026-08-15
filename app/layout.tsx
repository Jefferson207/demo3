import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'El Pulpo Bebé | Pescados, mariscos y parrillas',
  description: 'Una experiencia marina para compartir: pescados, mariscos y parrillas en El Pulpo Bebé.',
  openGraph: { title: 'El Pulpo Bebé', description: 'Sabor que viene del mar.', type: 'website' },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
