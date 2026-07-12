"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 40, prefix: "~", label: "returns processed weekly at URBN" },
  { value: 30, suffix: "+", label: "applications tracked with my own tool" },
  { value: 50, suffix: "+", label: "attendees at my Sprint Review demo" },
];

const Counter = ({ stat, start }: { stat: Stat; start: boolean }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const duration = 1200;
    const t0 = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out
      setN(Math.round(stat.value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, stat.value]);

  return (
    <span className="font-display text-4xl sm:text-5xl">
      {stat.prefix}
      {n}
      {stat.suffix}
    </span>
  );
};

const Impact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="impact">
      <h2 className="font-display text-3xl text-white text-center sm:text-3xl lg:text-5xl p-10">
        Impact
      </h2>

      <div ref={ref} className="max-w-4xl mx-auto px-6 mb-20">
        <div className="flex flex-wrap justify-center gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="w-[240px] rounded-3xl border-[7px] border-brand-700 bg-brand-teal text-brand-700 px-4 py-6 flex flex-col items-center text-center gap-2 cursor-pointer pendulum-hover transition-all duration-500 hover:bg-brand-tealLight"
            >
              <Counter stat={stat} start={visible} />
              <p className="text-xs sm:text-sm leading-tight font-semibold opacity-80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
