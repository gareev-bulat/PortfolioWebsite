import React from 'react'
import ExperienceCard from './experienceCard';


type WorkItem = {
    name: string,
    image: string,
    position: string,
    id: number,

}

const ITEMS: WorkItem[] = [
    {
        name: "URBN, Nuuly",
        image: '/images/workIcons/urbn.jpg',
        position: "Android Engineer",
        id: 1,

    },
]


const WorkExperience = () => {
  return (
    <section id="workexperience">
    <h2 className="text-3xl text-white text-center sm:text-3xl lg:text-5xl p-10">Work Experience</h2>

    <div className='grid justify-center gap-10 mb-20'>
        {ITEMS.map((item) => (      
            <ExperienceCard key={item.id} name={item.name} image={item.image} position={item.position} />
        ))}
    </div>
    
    </section>
  )
}

export default WorkExperience;