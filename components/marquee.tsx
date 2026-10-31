const TEXT = "Agents ✱ MCP ✱ Evals ✱ RAG ✱ Android ✱ Codeforces daily ✱ Tracing ✱ React Native ✱";

const Marquee = () => (
  <div aria-hidden="true" className="overflow-hidden bg-ink-deep text-accent">
    <div className="marquee-track font-display text-[20px] font-medium whitespace-nowrap py-3.5">
      <span className="pr-10">{TEXT}</span>
      <span className="pr-10">{TEXT}</span>
    </div>
  </div>
);

export default Marquee;
