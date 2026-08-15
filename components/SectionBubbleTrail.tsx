'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Burst = { id: number; left: number; size: number; delay: number; drift: number };

export function SectionBubbleTrail() {
  const [bursts, setBursts] = useState<Burst[]>([]); const activeSection = useRef(-1); const reduced = useReducedMotion();
  useEffect(() => {
    const identify = () => {
      const sections = [...document.querySelectorAll('main section')];
      const index = sections.reduce((best, section, current) => Math.abs(section.getBoundingClientRect().top - innerHeight * .28) < Math.abs(sections[best]?.getBoundingClientRect().top - innerHeight * .28) ? current : best, 0);
      if (index === activeSection.current) return;
      activeSection.current = index;
      const stamp = Date.now();
      setBursts(Array.from({ length: reduced ? 5 : 18 }, (_, i) => ({ id: stamp + i, left: 4 + ((i * 29 + index * 13) % 92), size: 7 + (i % 5) * 5, delay: i * .07, drift: i % 2 ? 28 : -28 })));
    };
    let frame = 0; const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(identify); };
    identify(); addEventListener('scroll', onScroll, { passive: true }); return () => { cancelAnimationFrame(frame); removeEventListener('scroll', onScroll); };
  }, [reduced]);
  return <div aria-hidden className="pointer-events-none fixed inset-0 z-20 overflow-hidden">{bursts.map(bubble => <motion.i key={bubble.id} initial={{ opacity: 0, y: 90, x: 0, scale: .5 }} animate={{ opacity: [0, .9, .38, 0], y: [90, 25, -180, -300], x: [0, bubble.drift, bubble.drift * 1.4], scale: [.5, 1, .9, .65] }} transition={{ duration: reduced ? .8 : 4.8, delay: bubble.delay, ease: 'easeOut' }} className="absolute bottom-[-24px] rounded-full border border-white/80 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.95),rgba(0,174,239,.35)_38%,rgba(0,80,170,.12)_70%)] shadow-[0_0_14px_rgba(91,214,255,.55)]" style={{ left: `${bubble.left}%`, width: bubble.size, height: bubble.size }} />)}</div>;
}
