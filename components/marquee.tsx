const TEXT = "Agents ✱ MCP ✱ Evals ✱ RAG ✱ Android ✱ Codeforces daily ✱ Tracing ✱ React Native ✱";

const Marquee = () => (
  <div aria-hidden="true" className="overflow-hidden border-y-2 border-ink bg-lime text-ink">
    <div className="marquee-track font-display text-[22px] font-bold uppercase whitespace-nowrap py-2.5">
      <span className="pr-10">{TEXT}</span>
      <span className="pr-10">{TEXT}</span>
    </div>
  </div>
);

export default Marquee;
