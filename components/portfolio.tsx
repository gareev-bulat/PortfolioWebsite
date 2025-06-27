import React from 'react'
import ProjectCard from './projectCard'
import type { ToolKey } from './projectCard'



type PortfolioItem = {
    name: string,
    image: string,
    tools: ToolKey[],
    data: string[],
    id: number,

}

const ITEMS: PortfolioItem[] = [
    {
        name: "PawNav",
        image: '/images/projectIcons/PawNav_project.png',
        tools: ['ReactNative', 'JavaScript', 'GitLab', 'Firebase', 'Git', 'VSCode', 'Figma'],
        data: ["January - June", '2025'],
        id: 1,

    },
    {
        name: "HeadlineTrader",
        image: '/images/projectIcons/HeadlineTrader_project.png',
        tools: ['NextJs', 'TypeScript', 'TailwindCSS', 'Gemini', 'MongoDB', 'VSCode'],
        data: ["April", '2025'],
        id: 2,

    },
    {
        name: "CurrencyConverter",
        image: '/images/projectIcons/CurrencyConverter_project.png',
        tools: ['Java', 'AndroidStudio', 'VSCode'],
        data: ["January - April", '2024'],
        id: 3,

    },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h2 className="text-3xl text-white text-center sm:text-3xl lg:text-5xl p-4">Portfolio</h2>
    <div className='flex items-start justify-center'>
    <div className='flex flex-col items-center gap-10 m-20'>
        {ITEMS.map((item) => (      
            <ProjectCard key={item.id} name={item.name} image={item.image} tools={item.tools} dataFrame={item.data} />
        ))}
    </div>
    </div>

  
    </section>
  )
}

export default Portfolio