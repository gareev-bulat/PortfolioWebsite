"use client"


import React from 'react'
import { ReactTyped } from "react-typed";


const Hobbies = () => {
  return (
    <div className="flex items-center justify-center h-screen pb-20">
      <ReactTyped
        strings={["Coming Soon"]}
        typeSpeed={80}
        backDelay={5000}
        loop
        className="
          text-5xl
          sm:text-5xl
          md:text-7xl
          lg:text-7xl       
          font-bold
          bg-gradient-to-b   
          to-[#FBE9D0]
          from-[#003135]
          bg-clip-text       
          text-transparent  
        "
      />
    </div>
  );
};

export default Hobbies