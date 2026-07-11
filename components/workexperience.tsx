import ExperienceCard from './experienceCard';


type WorkItem = {
    name: string,
    image: string,
    position: string,
    bullets: string[],
    id: number,
}

const ITEMS: WorkItem[] = [
    {
        name: "URBN, Nuuly",
        image: '/images/workIcons/urbn.jpg',
        position: "Android Engineer",
        bullets: [
            "Built and shipped production Android features in Kotlin and Jetpack Compose across two warehouse systems (Phantom Returns, Packing V2, No Fingerprint workflows).",
            "Architected and built a self-service returns Android application from scratch using MVVM, including app scaffolding, Gradle configuration, and CI/CD setup — processing ~40 self-service returns per week at the URBN office mailroom.",
            "Integrated Android clients with backend REST services and USB barcode-scanner hardware via Android BroadcastReceiver, coroutines, and Kotlin Flows for real-time scanner input.",
            "Collaborated with cross-functional backend and UX engineers within Agile sprint cycles; presented a demo at Sprint Review to 50+ executives, stakeholders, product owners, and engineers.",
        ],
        id: 1,
    },
]


const WorkExperience = () => {
  return (
    <section id="workexperience">
    <h2 className="text-3xl text-white text-center sm:text-3xl lg:text-5xl p-10">Work Experience</h2>

    <div className='grid justify-center gap-10 mb-20'>
        {ITEMS.map((item) => (      
            <ExperienceCard key={item.id} name={item.name} image={item.image} position={item.position} bullets={item.bullets} />
        ))}
    </div>
    
    </section>
  )
}

export default WorkExperience;