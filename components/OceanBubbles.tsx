'use client';
import { motion, useReducedMotion } from 'framer-motion';

export function OceanBubbles({ count = 12, className = '' }: { count?: number; className?: string }) {
  const reduced = useReducedMotion();
  return <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>{Array.from({ length: count }, (_, i) => {
    const size = 4 + (i % 5) * 4;
    return <motion.i key={i} className="absolute rounded-full border border-white/75 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.9),rgba(0,174,239,.35)_45%,rgba(255,255,255,.08))] shadow-[0_0_12px_rgba(91,214,255,.55)]" style={{ width: size, height: size, left: `${(i * 19 + 7) % 100}%`, bottom: `${-8 - (i % 4) * 18}%` }} animate={reduced ? {} : { y: [-10, -260 - (i % 5) * 50], x: [0, (i % 2 ? 12 : -12), 0], opacity: [0, .9, 0] }} transition={{ duration: 8 + (i % 6) * 1.3, delay: (i % 7) * .55, repeat: Infinity, ease: 'easeInOut' }} />;
  })}</div>;
}
