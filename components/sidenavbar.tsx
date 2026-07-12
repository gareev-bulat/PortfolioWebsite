import React from 'react';
import Link from "next/link";

const SideNavBar = () => {
  return (
    <div className='fixed 
                    z-10 
                    bottom-0 
                    left-1/2 
                    transform 
                    -translate-x-1/2 
                    mb-8
                    px-6 py-3
                    md:px-8 md:py-4
                    rounded-full
                    bg-gradient-to-b from-brand-200/30 to-brand-500/20 
                    backdrop-blur-xl
                    border border-white/25
                    shadow-2xl shadow-black/20'>
        <ul className='flex flex-row gap-5 md:gap-7 text-white text-xs md:text-sm font-bold items-center'>
            <li><Link href="#hero" className="hover:text-brand-tealLight transition">HERO</Link></li>
            <li><Link href="#aboutme" className="hover:text-brand-tealLight transition">ABOUT</Link></li>
            <li><Link href="#workexperience" className="hover:text-brand-tealLight transition">WORK</Link></li>
            <li><Link href="#impact" className="hover:text-brand-tealLight transition">IMPACT</Link></li>
            <li><Link href="#portfolio" className="hover:text-brand-tealLight transition">PROJECTS</Link></li>
            <li><Link href="#leetcode" className="hover:text-brand-tealLight transition">LEETCODE</Link></li>
            <li><Link href="#connect" className="hover:text-brand-tealLight transition">CONNECT</Link></li>
        </ul>
    </div>
  )
}

export default SideNavBar;