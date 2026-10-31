import ProjectCard from './projectCard'
import type { ToolKey } from './projectCard'

type PortfolioItem = {
    name: string,
    image?: string,
    tools: ToolKey[],
    date: string,
    description: string,
    id: number,
}

const ITEMS: PortfolioItem[] = [
    {
        name: "Brodie Dance",
        tools: ['Python', 'LiveKit', 'Gemini'],
        date: "October 2026",
        description: "AI dance coach you call on FaceTime, with no app to install. Tracks your whole body with pose tracking, scores each part against the original dance, and coaches you by voice in real time. Built by a team of five; 2nd place at IvyHacks 2026 (UPenn) and launched to real users.",
        id: 5,
    },
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
        date: "May - June 2026",
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

const Portfolio = () => (
  <section id="projects" className="mx-auto max-w-[1440px] px-5 py-20 lg:px-14">
    <div className="label text-accent">02 / Projects</div>
    <h2 className="h-sec mb-10 mt-3">Things I&apos;ve built</h2>

    <div className="border-b border-line">
      {ITEMS.map((item, i) => (
        <ProjectCard
          key={item.id}
          index={i + 1}
          name={item.name}
          image={item.image}
          tools={item.tools}
          date={item.date}
          description={item.description}
        />
      ))}
    </div>
  </section>
)

export default Portfolio
