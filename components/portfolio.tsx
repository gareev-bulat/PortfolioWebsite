import React from 'react'
import ProjectCard from './projectCard'
import type { ToolKey } from './projectCard'



type PortfolioItem = {
    name: string,
    image: string,
    tools: ToolKey[],
    date: string,
    id: number,

}

const ITEMS: PortfolioItem[] = [
    {
        name: "PawNav",
        image: '/images/projectIcons/PawNav_project.png',
        tools: ['ReactNative', 'JavaScript', 'GitLab', 'Firebase', 'Git', 'VSCode', 'Figma'],
        date: "January - June 2025",
        id: 1,

    },
    {
        name: "HeadlineTrader",
        image: '/images/projectIcons/HeadlineTrader_project.png',
        tools: ['NextJs', 'TypeScript', 'TailwindCSS', 'Gemini', 'MongoDB', 'VSCode'],
        date: "April 2025",
        id: 2,

    },
    {
        name: "CurrencyConverter",
        image: '/images/projectIcons/CurrencyConverter_project.png',
        tools: ['Java', 'AndroidStudio', 'VSCode'],
        date: "January - April 2024",
        id: 3,

    },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h2 className="text-3xl text-white text-center sm:text-3xl lg:text-5xl p-10">Portfolio</h2>
    <div className='grid justify-center gap-10 mb-20'>
        {ITEMS.map((item) => (      
            <ProjectCard key={item.id} name={item.name} image={item.image} tools={item.tools} date={item.date} />
        ))}
    </div>
  

  
    </section>
  )
}

export default Portfolio