'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Brand } from './Brand';

const links = [['Inicio', '/#inicio'], ['Carta', '/carta'], ['Nosotros', '/#nosotros'], ['Galería', '/#galeria'], ['Contacto', '/#contacto']];

export function Header() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const update = () => setScrolled(scrollY > 24); addEventListener('scroll', update); update(); return () => removeEventListener('scroll', update); }, []);
  return <header className="fixed inset-x-0 top-0 z-40"><nav className={`mx-auto flex h-[94px] w-full items-center justify-between px-5 transition-all lg:mt-3 lg:h-[104px] lg:w-[min(1240px,calc(100%-24px))] lg:rounded-full ${scrolled ? 'bg-ocean/90 shadow-xl shadow-black/10 backdrop-blur-xl lg:border lg:border-white/10' : ''}`}><a href="/#inicio"><Brand className="!w-[132px] sm:!w-[150px] lg:!w-[178px]" /></a><div className="hidden items-center gap-7 text-sm font-medium text-white/75 lg:flex">{links.map(([name, href]) => <a className="transition hover:text-white" href={href} key={name}>{name}</a>)}</div><a href="/#contacto" className="button button-primary hidden lg:inline-flex">Reservar</a><button aria-label="Abrir menú" onClick={() => setOpen(true)} className="grid size-11 place-items-center rounded-full border border-white/20 lg:hidden"><Menu size={22} /></button></nav><AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 grid place-items-center bg-ocean/98 backdrop-blur-xl"><button onClick={() => setOpen(false)} className="absolute right-6 top-6 grid size-11 place-items-center rounded-full border border-white/20"><X /></button><div className="flex flex-col items-center gap-7 text-3xl font-bold">{links.map(([name, href], index) => <motion.a initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }} onClick={() => setOpen(false)} href={href} key={name}>{name}</motion.a>)}<a onClick={() => setOpen(false)} href="/#contacto" className="button button-primary mt-3 text-base">Reservar mesa</a></div></motion.div>}</AnimatePresence></header>;
}
