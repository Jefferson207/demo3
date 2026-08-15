import Image from 'next/image';
import logo from '../logo.png';

export function Brand({ className = '' }: { className?: string }) {
  return <Image
    src={logo}
    alt="El Pulpo Bebé — Pescados, mariscos, parrillas y más"
    priority
    className={`h-auto w-[118px] object-contain sm:w-[135px] ${className}`}
  />;
}
