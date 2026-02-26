"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFilePerson } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";

type CardProps = {
  name: string;
  image: string;
  position: string;
};

const ExperienceCard = ({ name, image, position }: CardProps) => {
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
              className="opacity-60"
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
                <li className="text-base">Developed production-ready Android features using Kotlin and Jetpack Compose, collaborating with Android Engineers, backend developers, and UX designers.</li>
                <li className="text-base">Collaborated with backend and UX teams to reduce requirement ambiguity and improve development efficiency</li>
                <li className="text-base"> Built an internal Android application to automate Nuuly packages’ return workflow, improving operational efficiency for employees</li>
                <li className="text-base">Implemented hardware integration for USB scanner devices via Android broadcast events</li>
            </ul>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
