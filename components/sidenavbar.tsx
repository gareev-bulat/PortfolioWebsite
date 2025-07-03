import React from 'react';
import Link from "next/link";


const SideNavBar = () => {
  return (
    <div className='fixed z-10 bottom-0 left-1/2 transform -translate-x-1/2 mb-20 p-5 px-10 h-auto rounded-lg flex flex-col justify-center bg-gradient-to-b from-brand-200 to-brand-500/20 backdrop-blur-md '>
        <ul className='flex flex-row space-x-10 text-white text-base items-center'>
            <li><Link href="#hero">HERO</Link></li>
            <li><Link href="#aboutme">ABOUT</Link></li>
            <li><Link href="#portfolio">PORTFOLIO</Link></li>
            <li><Link href="#connect">CONNECT</Link></li>
        </ul>

    </div>
  )
}

export default SideNavBar;