"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type LeetCodeData = {
  total: number;
  easy: number;
  medium: number;
  hard: number;
  recent: { title: string; titleSlug: string; timestamp: string }[];
};

const Ring = ({ easy, medium, hard, total }: { easy: number; medium: number; hard: number; total: number }) => {
  const C = 2 * Math.PI * 68; 
  const solved = easy + medium + hard;
  const seg = (n: number) => (solved === 0 ? 0 : (n / solved) * C);

  const easyLen = seg(easy);
  const medLen = seg(medium);
  const hardLen = seg(hard);

  return (
    <div className="relative w-[160px] h-[160px] shrink-0">
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(0,49,53,0.15)" strokeWidth="14" />
        <circle
          cx="80" cy="80" r="68" fill="none" stroke="#FBE9D0" strokeWidth="14"
          strokeDasharray={`${easyLen} ${C - easyLen}`}
          strokeDashoffset={0}
          transform="rotate(-90 80 80)"
        />
        <circle
          cx="80" cy="80" r="68" fill="none" stroke="#003135" strokeWidth="14"
          strokeDasharray={`${medLen} ${C - medLen}`}
          strokeDashoffset={-easyLen}
          transform="rotate(-90 80 80)"
        />
        <circle
          cx="80" cy="80" r="68" fill="none" stroke="#E64833" strokeWidth="14"
          strokeDasharray={`${hardLen} ${C - hardLen}`}
          strokeDashoffset={-(easyLen + medLen)}
          transform="rotate(-90 80 80)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-3xl text-brand-700">{total}</span>
        <span className="text-xs text-brand-700/70">SOLVED</span>
      </div>
    </div>
  );
};

const LeetCode = () => {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setData)
      .catch(() => setFailed(true));
  }, []);

  if (failed) return null;

  return (
    <section id="leetcode">
      <h2 className="font-display text-3xl text-white text-center sm:text-3xl lg:text-5xl p-10">
        LeetCode
      </h2>

      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="rounded-3xl border-[7px] border-brand-700 bg-brand-teal text-brand-700 p-8 cursor-pointer pendulum-hover transition-all duration-500 hover:bg-brand-tealLight">
          {!data ? (
            <div className="text-center py-10 opacity-60">Loading…</div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-10">
              <div className="flex flex-col items-center gap-3">
                <Ring easy={data.easy} medium={data.medium} hard={data.hard} total={data.total} />
                <div className="flex gap-4 text-sm font-semibold">
                  <span className="flex items-center gap-1.5">
                    <i className="w-2.5 h-2.5 rounded-sm bg-brand-200 inline-block" />
                    {data.easy} easy
                  </span>
                  <span className="flex items-center gap-1.5">
                    <i className="w-2.5 h-2.5 rounded-sm bg-brand-700 inline-block" />
                    {data.medium} med
                  </span>
                  <span className="flex items-center gap-1.5">
                    <i className="w-2.5 h-2.5 rounded-sm bg-brand-1000 inline-block" />
                    {data.hard} hard
                  </span>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="text-sm font-bold mb-3 opacity-70">RECENTLY SOLVED</div>
                <ul className="flex flex-col gap-2">
                  {data.recent.map((p) => (
                    <li key={p.titleSlug}>
                      <Link
                        href={`https://leetcode.com/problems/${p.titleSlug}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center bg-brand-700 text-brand-200 rounded-xl px-4 py-2.5 hover:bg-brand-1000 transition-colors"
                      >
                        <span className="text-sm font-semibold">{p.title}</span>
                        <span className="text-xs opacity-60">
                          {new Date(Number(p.timestamp) * 1000).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeetCode;