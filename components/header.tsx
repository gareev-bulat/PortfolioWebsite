import Link from "next/link";

const LINKS = [
  ["#experience", "Experience"],
  ["#projects", "Projects"],
  ["#skills", "Skills"],
];

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-ink/90 backdrop-blur border-b border-paper/10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 lg:px-14">
        <Link href="/" aria-label="Back to top" className="font-display text-3xl font-bold tracking-[-0.06em]">
          BG<span className="text-lime">.</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 sm:gap-8 label">
          {LINKS.map(([href, text]) => (
            <Link key={href} href={href} className="hidden py-2 hover:text-lime transition sm:block">
              {text}
            </Link>
          ))}
          <Link href="#contact" className="py-2 text-lime">Contact ↗</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
