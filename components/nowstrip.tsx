const ITEMS = [
  { k: "Now", t: "GenAI Co-op at PhoenixTeam", d: "Sept 2026 – Mar 2027" },
  { k: "Building", t: "Agent system: MCP server, tracing, evals", d: "In progress" },
  { k: "Practicing", t: "One Codeforces problem, every day", d: "Plus a note on the pattern I learned" },
];

const NowStrip = () => (
  <section aria-label="Currently" className="mx-auto grid max-w-[1440px] px-5 lg:grid-cols-3 lg:px-14">
    {ITEMS.map((i, idx) => (
      <div key={i.k} className={`border-b-2 border-paper py-10 ${idx > 0 ? "lg:pl-8" : ""} ${idx < 2 ? "lg:pr-8" : ""}`}>
        <div className="label text-lime">{i.k}</div>
        <div className="mt-2.5 font-display text-[28px] font-bold leading-[1.1] tracking-[-0.02em]">{i.t}</div>
        <div className="mt-2 text-mute">{i.d}</div>
      </div>
    ))}
  </section>
);

export default NowStrip;
