import Impact from "./impact";

type WorkItem = {
  period: string;
  position: string;
  company: string;
  bullets: string[];
};

const ITEMS: WorkItem[] = [
  {
    period: "Sept 2026 – Mar 2027",
    position: "GenAI Value Engineer Co-op",
    company: "PhoenixTeam",
    bullets: [],
  },
  {
    period: "Sept 2025 – Mar 2026",
    position: "Android Engineer Co-op",
    company: "URBN · Nuuly",
    bullets: [
      "Built and shipped production Android features in Kotlin and Jetpack Compose across two warehouse systems (Phantom Returns, Packing V2, No Fingerprint workflows).",
      "Architected and built a self-service returns Android application from scratch using MVVM, including app scaffolding, Gradle configuration, and CI/CD setup — processing ~40 self-service returns per week at the URBN office mailroom.",
      "Integrated Android clients with backend REST services and USB barcode-scanner hardware via Android BroadcastReceiver, coroutines, and Kotlin Flows for real-time scanner input.",
      "Collaborated with cross-functional backend and UX engineers within Agile sprint cycles; presented a demo at Sprint Review to 50+ executives, stakeholders, product owners, and engineers.",
    ],
  },
];

const WorkExperience = () => (
  <section id="experience" className="bg-paper text-ink">
    <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-14">
      <div className="label">01 / Experience</div>
      <h2 className="h-sec mb-10 mt-3">Where I&apos;ve worked</h2>

      <div className="border-b-2 border-ink">
        {ITEMS.map((item) => (
          <div key={item.company} className="flex flex-wrap gap-x-12 gap-y-4 border-t-2 border-ink py-9">
            <div className="label w-full text-sm lg:w-60 lg:shrink-0">{item.period}</div>
            <div className="min-w-0 flex-1 basis-[480px]">
              <h3 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[40px]">
                {item.position}
              </h3>
              <div className="label mt-2 text-sm text-[#B3261E]">{item.company}</div>
              {item.bullets.length > 0 && (
                <ul className="mt-4 max-w-[720px] list-disc space-y-2 pl-5">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <Impact />
    </div>
  </section>
);

export default WorkExperience;
