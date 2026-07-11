"use client";

import { useState } from "react";
import Image from "next/image";
import { BsFilePerson } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";

type CardProps = {
  name: string;
  image: string;
  position: string;
  bullets: string[];
};

const ExperienceCard = ({ name, image, position, bullets }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`
    w-[500px] 
    h-[450px] 
    sm:w-[500px] 
    md:w-[700px] 
    lg:w-[700px] 
    rounded-3xl 
    overflow-hidden 
    ring-2
     ring-white/50
      hover:ring-white/80
      cursor-pointer ${flipped ? "" : "pendulum-hover"}`}
    >
      <div
        className="w-full h-full bg-white flex flex-row items-center justify-stretch gap-20 px-6"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="absolute w-full h-full backface-hidden bg-white rounded-3xl ring-2 ring-white/50 flex items-center justify-center gap-6">

            {!flipped && (
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 
                  text-sm text-black/60 
                  animate-bounce">
    Click to flip 
  </div>
)}
            <Image
              src={image}
              alt={name}
              width={200}
              height={210}
              className="opacity-90"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-row gap-4">
                <FaBuilding color="orange" size={36} />
                <div className="text-3xl">{name}</div>
              </div>

              <div className="flex flex-row gap-4">
                <BsFilePerson color="orange" size={36} />
                <div className="text-3xl">{position}</div>
              </div>
            </div>
          </div>

          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white text-black rounded-3xl flex items-center justify-center">
        
            <ul className="list-disc pl-6 space-y-5">
                {bullets.map((bullet, i) => (
                  <li key={i} className="text-base">{bullet}</li>
                ))}
            </ul>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
