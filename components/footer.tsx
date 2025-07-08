import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(180deg,#0FA4AF_0%,#895040_89%)] rounded-t-3xl mt-10">
      <div className="
          max-w-5xl mx-auto        
          px-4 sm:px-6 lg:px-20    
          py-8                    
          flex flex-col items-center
          space-y-2             
        ">
        <h3 className="
            text-xl sm:text-2xl    
            font-semibold
            tracking-widest
            text-white
            text-center
          ">
          BULAT GAREEV
        </h3>
        <p className="
            text-sm sm:text-base
            tracking-wider
            text-white
            text-center
          ">
          © 2025 Bulat Gareev
        </p>
        <p className="
            text-xs sm:text-sm
            tracking-wide
            text-white
            text-center
          ">
          All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer