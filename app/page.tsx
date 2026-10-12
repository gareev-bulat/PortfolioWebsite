import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/marquee";
import NowStrip from "@/components/nowstrip";
import WorkExperience from "@/components/workexperience";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";
import LeetCode from "@/components/leetcode";
import Connect from "@/components/connect";

export default function Home() {
  return (
    <div>
      <section id="top" className="mx-auto max-w-[1440px] px-5 pb-14 pt-8 lg:px-14 lg:pt-14">
        <div className="label text-mute">Drexel CS &apos;29 · Philadelphia · Open to AI engineering roles</div>
        <h1 className="mt-4 font-display text-[clamp(60px,10.5vw,156px)] font-bold leading-[0.92] tracking-[-0.04em]">
          Bulat <span className="text-lime">Gareev</span>
        </h1>

        <div className="mt-14 flex flex-wrap items-start gap-x-14 gap-y-12">
          <div className="min-w-0 flex-[1_1_440px]">
            <p className="font-display text-[clamp(30px,3.4vw,48px)] font-bold leading-[1.08] tracking-[-0.03em]">
              I build AI-powered web &amp; mobile apps, and the evals that prove they work.
            </p>
            <p className="mt-6 max-w-[560px] text-mute">
              Android engineer at URBN, now a GenAI co-op at PhoenixTeam, building agent systems with real
              measurements behind them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link href="/docs/BulatGareevResume26-27.pdf" download className="btn btn-solid">Download CV</Link>
              <Link href="https://github.com/gareev-bulat" className="btn">GitHub</Link>
              <Link href="https://www.linkedin.com/in/bulat-gareev-295a95338/" className="btn">LinkedIn</Link>
              <Link href="#contact" className="btn">Email</Link>
            </div>
          </div>

          <div className="relative min-w-0 flex-[1_1_420px] pb-10 lg:pl-10">
            <div className="relative ml-auto aspect-[4/5] w-full max-w-[380px] border-2 border-paper shadow-hard">
              <Image src="/images/bulat_image.jpeg" alt="Bulat Gareev" fill priority sizes="380px" className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[290px] max-w-[85%] border-2 border-paper bg-ink">
              <div className="label flex justify-between border-b-2 border-paper px-3.5 py-2 text-[11px]">
                <span>agent.trace · sample</span><span className="text-lime">● run ok</span>
              </div>
              <div className="px-3.5 py-3 font-mono text-[12px] leading-[1.8]">
                <div><span className="text-mute">01</span> user → &quot;M5+ quakes this week?&quot;</div>
                <div><span className="text-mute">02</span> tool → <span className="text-lime">get_recent_earthquakes</span></div>
                <div><span className="text-mute">03</span> eval → grounded: <span className="text-lime">pass</span></div>
                <div><span className="text-mute">04</span> cost → $0.004 · 1.8s</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />
      <NowStrip />
      <WorkExperience />
      <Portfolio />
      <Skills />
      <LeetCode />
      <Connect />
    </div>
  );
}
