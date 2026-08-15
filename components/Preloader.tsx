'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import logo from '../logo.png';
import { Brand } from './Brand';
import { OceanBubbles } from './OceanBubbles';

export const criticalImages = [
  '/images/hero-restaurant-premium.png',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
];

function LoaderOctopus({ progress, complete }: { progress: number; complete: boolean }) {
  return <motion.div className="absolute top-[calc(50%-21px)] z-10 sm:top-[calc(50%-26px)]" animate={{ left: `${progress}%`, y: complete ? 0 : [0, -3, 0], rotate: complete ? [0, 5, 0] : [-1.5, 1.5, -1.5], scale: complete ? [1, 1.15, 1] : 1 }} transition={complete ? { duration: .45, times: [0, .5, 1] } : { left: { duration: .28, ease: 'easeOut' }, y: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}>
    <div className="relative h-[42px] w-[48px] -translate-x-1/2 overflow-hidden sm:h-[52px] sm:w-[58px]"><Image src={logo} alt="" aria-hidden priority className="pointer-events-none absolute left-0 top-1/2 h-auto w-[112px] max-w-none -translate-y-1/2 sm:w-[132px]" /></div>
    {complete && <><i className="absolute -left-1 top-0 size-1.5 rounded-full bg-electric animate-ping" /><i className="absolute right-0 top-2 size-1 rounded-full bg-white/80 animate-ping [animation-delay:150ms]" /><i className="absolute left-2 -top-2 size-1 rounded-full bg-white/60 animate-ping [animation-delay:300ms]" /></>}
  </motion.div>;
}

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0); const [complete, setComplete] = useState(false); const [leaving, setLeaving] = useState(false);
  const reduced = useReducedMotion(); const settled = useRef(false);
  useEffect(() => {
    let alive = true; const startedAt = performance.now(); const resources = [...criticalImages, logo.src]; let loadedCount = 0;
    const update = () => { loadedCount += 1; if (alive) setProgress(value => Math.max(value, Math.min(82, Math.round((loadedCount / resources.length) * 82)))); };
    const assetLoads = resources.map(src => new Promise<void>(resolve => { const image = new window.Image(); image.onload = image.onerror = () => { update(); resolve(); }; image.src = src; }));
    const minDuration = new Promise<void>(resolve => window.setTimeout(resolve, reduced ? 0 : 2000));
    const visualTicker = window.setInterval(() => { const paced = Math.min(80, Math.round(((performance.now() - startedAt) / 2000) * 80)); if (alive) setProgress(value => Math.max(value, paced)); }, 90);
    Promise.all([Promise.all(assetLoads), document.fonts?.ready ?? Promise.resolve(), minDuration]).then(() => { if (!alive || settled.current) return; settled.current = true; window.clearInterval(visualTicker); setProgress(100); setComplete(true); window.setTimeout(() => setLeaving(true), reduced ? 50 : 650); });
    return () => { alive = false; window.clearInterval(visualTicker); };
  }, [reduced]);
  return <motion.div className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#003b82] water-light" animate={leaving ? { y: '-105%' } : { y: 0 }} transition={{ duration: reduced ? .1 : .8, ease: [0.76, 0, 0.24, 1] }} onAnimationComplete={() => { if (leaving) onDone(); }}>
    <OceanBubbles count={18} /><div className="relative w-[min(400px,78vw)] text-center"><motion.div animate={complete ? { scale: 1.045 } : {}} transition={{ duration: .35 }}><Brand className="w-full" /><p className="-mt-1 text-[10px] tracking-[.32em] text-white/50">SABOR QUE VIENE DEL MAR</p></motion.div><motion.div className="relative mt-10" animate={complete ? { opacity: 0 } : { opacity: 1 }} transition={{ delay: complete ? .38 : 0, duration: .2 }}><div className="h-[3px] overflow-hidden rounded-full bg-white/20"><motion.div className="h-full rounded-full bg-electric shadow-glow" animate={{ width: `${progress}%` }} transition={{ duration: .28, ease: 'easeOut' }} /></div><LoaderOctopus progress={progress} complete={complete} /><span className="mt-4 block text-xs font-bold tabular-nums tracking-wide text-white/75">{progress}%</span></motion.div></div>
  </motion.div>;
}
