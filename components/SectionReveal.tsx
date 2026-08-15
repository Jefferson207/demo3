'use client';
import { motion, useReducedMotion } from 'framer-motion';
export function SectionReveal({children,className=''}:{children:React.ReactNode;className?:string}){const reduced=useReducedMotion();return <motion.div initial={reduced?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.7,ease:'easeOut'}} className={className}>{children}</motion.div>}
