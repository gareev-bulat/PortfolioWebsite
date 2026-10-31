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
        <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(169,179,201,0.2)" strokeWidth="14" />
        <circle
          cx="80" cy="80" r="68" fill="none" stroke="#A9B3C9" strokeWidth="14"
          strokeDasharray={`${easyLen} ${C - easyLen}`}
          strokeDashoffset={0}
          transform="rotate(-90 80 80)"
        />
        <circle
          cx="80" cy="80" r="68" fill="none" stroke="#F98128" strokeWidth="14"
          strokeDasharray={`${medLen} ${C - medLen}`}
          strokeDashoffset={-easyLen}
          transform="rotate(-90 80 80)"
        />
        <circle
          cx="80" cy="80" r="68" fill="none" stroke="#F5F7FA" strokeWidth="14"
          strokeDasharray={`${hardLen} ${C - hardLen}`}
          strokeDashoffset={-(easyLen + medLen)}
          transform="rotate(-90 80 80)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-3xl font-medium text-paper">{total}</span>
        <span className="text-xs text-mute">solved</span>
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
    <section id="leetcode" className="mx-auto max-w-[1440px] px-5 py-20 lg:px-14">
      <div className="label text-accent">04 / Practice</div>
      <h2 className="h-sec mb-10 mt-3">LeetCode</h2>

      <div>
        <div className="rounded-[20px] border border-line bg-surface p-8">
          {!data ? (
            <div className="py-10 text-center text-mute">Loading…</div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-10">
              <div className="flex flex-col items-center gap-3">
                <Ring easy={data.easy} medium={data.medium} hard={data.hard} total={data.total} />
                <div className="flex gap-4 font-mono text-sm">
                  <span className="flex items-center gap-1.5">
                    <i className="w-2.5 h-2.5 rounded-sm bg-mute inline-block" />
                    {data.easy} easy
                  </span>
                  <span className="flex items-center gap-1.5">
                    <i className="w-2.5 h-2.5 rounded-sm bg-accent inline-block" />
                    {data.medium} med
                  </span>
                  <span className="flex items-center gap-1.5">
                    <i className="w-2.5 h-2.5 rounded-sm bg-paper inline-block" />
                    {data.hard} hard
                  </span>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="label mb-3 text-mute">Recently solved</div>
                <ul className="flex flex-col gap-2">
                  {data.recent.map((p) => (
                    <li key={p.titleSlug}>
                      <Link
                        href={`https://leetcode.com/problems/${p.titleSlug}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl bg-ink-deep px-4 py-2.5 transition-colors hover:text-accent"
                      >
                        <span className="text-sm font-medium">{p.title}</span>
                        <span className="text-xs text-mute">
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