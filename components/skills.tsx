import Image from "next/image";

const GROUPS: [string, string][] = [
  ["Languages", "Python, TypeScript, JavaScript, Java, Kotlin, Swift"],
  ["Front end", "React, Next.js, HTML5, CSS3, Tailwind CSS"],
  ["Mobile", "React Native, Android Studio"],
  ["Back end & cloud", "Flask, Django, SQLite, Firebase"],
  ["AI", "Claude API, Gemini, Groq, CrewAI"],
  ["Tools", "Git, GitHub, VS Code, Android Studio, Figma, Agile/Scrum"],
];

const Skills = () => (
  <section id="skills" className="bg-lime text-ink">
    <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-14">
      <div className="label">03 / About &amp; Skills</div>
      <h2 className="h-sec mb-10 mt-3">What I work with</h2>

      <div className="grid border-t-2 border-ink lg:grid-cols-2">
        {GROUPS.map(([k, v], i) => (
          <div key={k} className={`border-b-2 border-ink py-7 ${i % 2 === 0 ? "lg:pr-6" : "lg:pl-6"}`}>
            <div className="label text-[13px]">{k}</div>
            <div className="mt-2 font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em]">{v}</div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-x-12 gap-y-10 lg:grid-cols-2">
        <article>
          <div className="label text-[13px]">Who I am</div>
          <p className="mt-3 max-w-[560px]">
            <span className="font-semibold">I’m a Computer Science student</span>
            {", "}at Drexel University who has been building mobile and web applications since high school. Most
            recently, I worked as an Android Engineering Co-op at Urban Outfitters, where I developed and shipped
            production features used by warehouse teams in their day-to-day operations.
          </p>
          <p className="mt-4 max-w-[560px]">
            I enjoy going to the gym, singing, and playing the guitar. I’m always seeking new connections in the Big
            Tech world!
          </p>
        </article>

        <article>
          <div className="label text-[13px]">Education</div>
          <ul className="mt-3 space-y-3">
            <li>
              <span className="font-semibold">Major: </span>BS in Computer Science
            </li>
            <li>
              <span className="font-semibold">Minor: </span>Data Science
            </li>
            <li className="flex items-center gap-2">
              <Image className="rounded-[5px]" src="/images/drexel_logo.png" width={30} height={30} alt="Drexel logo" />
              Drexel University
            </li>
            <li>
              <span className="font-semibold">Expected Graduation: </span>June 2029
            </li>
            <li>
              <span className="font-semibold">Current GPA: </span>3.63
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
);

export default Skills;
