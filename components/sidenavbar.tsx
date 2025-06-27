import React from 'react';
import Link from "next/link";


const SideNavBar = () => {
  return (
    <div className='fixed left-5 top-1/2 -translate-y-1/2 h-[150px] w-[150px] flex flex-col justify-center'>
        <ul className='list-disc list-inside space-y-4 text-white items-center'>
            <li><Link href="#hero">HERO</Link></li>
            <li><Link href="#aboutme">ABOUT ME</Link></li>
            <li><Link href="#portfolio">PORTFOLIO</Link></li>
            <li><Link href="#connect">CONNECT</Link></li>
        </ul>

    </div>
  )
}

export default SideNavBar;