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
    perspective
    cursor-pointer ${flipped ? "" : "pendulum-hover"}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full preserve-3d transition-transform duration-500"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="absolute inset-0 backface-hidden bg-brand-teal rounded-3xl border-[7px] border-brand-700">
          <div className="w-full h-full flex items-center justify-center gap-6 px-6">
            <Image
              src={image}
              alt={name}
              width={200}
              height={210}
              className="opacity-90"
            />

            <div className="flex flex-col gap-8">
              <div className="flex flex-row gap-4 items-center">
                <FaBuilding className="text-brand-1000" size={36} />
                <div className="font-display text-3xl text-brand-700">{name}</div>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <BsFilePerson className="text-brand-1000" size={36} />
                <div className="text-3xl text-brand-700">{position}</div>
              </div>
            </div>
          </div>

          {!flipped && (
            <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-brand-700/60 animate-bounce">
              Click to flip
            </div>
          )}
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-700 text-brand-200 rounded-3xl border-[7px] border-brand-teal flex items-center justify-center px-8">
          <ul className="list-disc pl-6 space-y-5">
            {bullets.map((bullet, i) => (
              <li key={i} className="text-base">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;