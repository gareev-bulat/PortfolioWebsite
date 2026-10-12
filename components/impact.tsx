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
    <span className="block font-display text-[clamp(64px,8vw,112px)] font-bold leading-[0.85] tracking-[-0.04em]">
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
    <div ref={ref} className="mt-16 flex flex-wrap gap-x-12 gap-y-8">
      {STATS.map((stat) => (
        <div key={stat.label} className="min-w-[240px] flex-1">
          <Counter stat={stat} start={visible} />
          <p className="label mt-3 text-[13px]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Impact;
