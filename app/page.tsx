'use client';
import { useCallback, useState } from 'react';
import { Categories } from '@/components/Categories'; import { Contact, Footer } from '@/components/Contact'; import { Experience } from '@/components/Experience'; import { FeaturedDishes } from '@/components/FeaturedDishes'; import { Gallery } from '@/components/Gallery'; import { Header } from '@/components/Header'; import { Hero } from '@/components/Hero'; import { Preloader } from '@/components/Preloader';
import { OceanBubbles } from '@/components/OceanBubbles';
import { SectionBubbleTrail } from '@/components/SectionBubbleTrail';
import { SocialRail } from '@/components/SocialRail';
import { WhatsAppButton } from '@/components/WhatsAppButton';
const restaurantSchema={ '@context':'https://schema.org', '@type':'Restaurant', name:'El Pulpo Bebé', servesCuisine:['Seafood','Peruvian'], priceRange:'$$', address:{'@type':'PostalAddress',streetAddress:'Jr. Intisuyo 221, Urb. Maranga',addressLocality:'San Miguel',postalCode:'15088',addressRegion:'Lima',addressCountry:'PE'}, telephone:'+51-1-246-2644', openingHours:'Mo-Su 10:00-18:00' };
export default function Home(){const [loaded,setLoaded]=useState(false);const finish=useCallback(()=>setLoaded(true),[]);return <>{!loaded&&<Preloader onDone={finish}/>} {loaded&&<div><Header/><SocialRail/><WhatsAppButton/><main className="ocean-journey"><OceanBubbles count={70} className="!fixed z-0 opacity-[.8]"/><SectionBubbleTrail/><Hero/><Categories/><FeaturedDishes/><Experience/><Gallery/><Contact/></main><Footer/></div>}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(restaurantSchema)}}/></>}
