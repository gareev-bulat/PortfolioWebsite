"use client";

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';


const SKILL_GROUPS = {
    "Languages": ["Python", "C++", "Java", "JavaScript", "TypeScript"],
    "FrontEnd": ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    "MobileDev": ["React Native", "Android Studio"],
    "BackEnd&Cloud": ["Flask", "Django", "SQLite", "Firebase"],
    "Tools": ["Git", "GitHub", "VSCode", "Android Studio", "Figma", "Agile/Scrum"],
}


const Aboutme = () => {

  const tabs = Object.keys(SKILL_GROUPS) as Array<keyof typeof SKILL_GROUPS>
  const [active, setActive] = useState(tabs[0]);

  return (
    <section>
      <h2 className="text-3xl text-white text-center sm:text-3xl lg:text-5xl p-4">
        About me
      </h2>
      <div className="flex flex-col items-center p-10 gap-10">
        <div className="flex flex-row gap-10">
          <article className="card">
            <h1 className="pb-10 text-base_l lg:text-lg">Who I Am</h1>
            <p className="mb-7 font-light text-base">
              <span className="text-brand-200 font-semibold">
                I’m Bulat Gareev
              </span>{""}
              ,a first-year Computer Science student. Ever since coding captured
              my attention in high school, I’ve been shipping both mobile apps
              and web projects
            </p>
            <p className="font-light text-base">
              When I’m not shipping side projects you’ll find me in the gym, on
              the mic, or jamming on guitar.
            </p>
          </article>
          <article className="card">
            <h1 className="pb-4 text-base_l lg:text-lg">Education</h1>

            <ul className="mt-5 space-y-5 font-semibold text-base_l">
              <li className="font-light">
                <span className="font-bold">Major: </span>BS in Computer Science
              </li>
              <li className="flex flex-row gap-2">
                <Image
                  className="rounded-[5px]"
                  src="/images/drexel_logo.png"
                  width={30}
                  height={30}
                  alt="drexel_logo"
                />
                Drexel University
              </li>
              <li className="font-light">
                <span className="font-bold">Expected Graduation: </span>June
                2029
              </li>
              <li className="font-light">
                <span className="font-bold">Current GPA: </span>3.64
              </li>
            </ul>
          </article>
        </div>
        <div className="flex flex-row gap-10">
          <article className="card pb-7 pt-7 pr-7 pl-5">
            <h1 className="pb-7 text-base_l lg:text-lg">Skills</h1>
            <div className="flex flex-1">
              <nav className="flex flex-col w-35 mr-6">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActive(tab)}
                    className={`text-left py-2 pl-4 pr-4 mb-1 rounded-l-md transition ${
                      active === tab
                        ? "bg-brand-700 text-white"
                        : "text-brand-1000 hover:text-brand-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
              <section className="flex-1">
                <ul className="list-disc list-inside ml-10 space-y-3 marker:text-brand-1000">
                  {SKILL_GROUPS[active].map((skill) => (
                    <li key={skill} className="text-base font-semibold">
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
          <article className="card">
            <h1 className="pb-8 text-base_l lg:text-lg">Values</h1>
            <ul className="list-none list-inside ml-2 space-y-5 marker:text-brand-500">
              <li className="font-light">
                <span className="text-base font-semibold text-brand-900">Continuous Learning</span> 
                <p className='pl-5 p-1'>I am always exploring new tools and best practices</p>
              </li>
              <li className="font-light">
                <span className="text-base font-semibold text-brand-900">Collaboration</span> 
                <p className='pl-5 p-1'>I believe great products come from open feedback and teamwork</p>
              </li>
              <li className="font-light">
                <span className="text-base font-semibold text-brand-900">Growth Mindset</span> 
                <p className='pl-5 p-1'>I welcome
                challenges as opportunities to level up</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;