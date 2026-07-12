import ProjectCard from './projectCard'
import type { ToolKey } from './projectCard'

type PortfolioItem = {
    name: string,
    image: string,
    tools: ToolKey[],
    date: string,
    description: string,
    id: number,
}

const ITEMS: PortfolioItem[] = [
    {
        name: "Nomiyo",
        image: '/images/projectIcons/Nomiyo_project.png',
        tools: ['ReactNative', 'TypeScript', 'LiveKit', 'Firebase'],
        date: "June 2026 - Present",
        description: "Real-time live video app where city guides broadcast their location and viewers \"portal in\" for 1-on-1 conversations. Sub-second streaming via a WebRTC SFU, with a Firebase backend minting role-scoped JWT tokens.",
        id: 0,
    },
    {
        name: "CoopCompass",
        image: '/images/projectIcons/CoopCompass_project.png',
        tools: ['NextJs', 'TypeScript', 'TailwindCSS', 'Python', 'Supabase', 'VSCode'],
        date: "May - July 2026",
        description: "Full-stack co-op application tracker, extended with a multi-agent AI pipeline (CrewAI + Claude API) that autonomously discovers, scores, and tailors postings. Cut inference cost ~3x through model benchmarking and caching.",
        id: 2,
    },
    {
        name: "RESET",
        image: '/images/projectIcons/RESET_project.png',
        tools: ['Swift', 'SwiftUI', 'Xcode', 'Groq'],
        date: "April - May 2026",
        description: "A minimalist iOS app that interrupts overthinking loops in under 60 seconds. Type one repeating thought, get a personalized AI reset, close the app and return to life.",
        id: 1,
    },
    {
        name: "PawNav",
        image: '/images/projectIcons/PawNav_project.png',
        tools: ['ReactNative', 'JavaScript', 'GitLab', 'Firebase', 'VSCode', 'Figma'],
        date: "January - June 2025",
        description: "Mobile app for animal shelter navigation, built in React Native with a Firebase backend. Screens and user flows prototyped in Figma before development.",
        id: 3,
    },
    {
        name: "HeadlineTrader",
        image: '/images/projectIcons/HeadlineTrader_project.png',
        tools: ['NextJs', 'TypeScript', 'TailwindCSS', 'Gemini', 'MongoDB', 'VSCode'],
        date: "April 2025",
        description: "AI trading sentiment platform built at DrexelHacks (MLH). Converts news headlines into structured buy/hold/sell signals via Gemini, executing trades through the Alpaca Paper API.",
        id: 4,
    }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="font-display text-3xl text-white text-center sm:text-3xl lg:text-5xl p-10">Portfolio</h2>

      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[6px] top-3 bottom-3 w-[2px] bg-brand-teal/50" />

          {ITEMS.map((item, i) => (
            <div key={item.id} className="relative mb-10 last:mb-0">
              <div
                className={`absolute -left-8 sm:-left-10 top-8 w-[14px] h-[14px] rounded-full border-2 border-brand-200 ${
                  i === 0 ? "bg-brand-1000" : "bg-brand-teal"
                }`}
              />
              <div className="text-brand-tealLight text-sm mb-2">{item.date}</div>
              <ProjectCard
                name={item.name}
                image={item.image}
                tools={item.tools}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio