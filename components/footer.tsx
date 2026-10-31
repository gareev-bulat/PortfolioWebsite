import Link from "next/link";

const Footer = () => (
  <footer className="label mx-auto w-full flex max-w-[1440px] flex-wrap justify-between gap-3 px-5 py-8 lg:px-14">
    <div>© 2026 Bulat Gareev · Drexel CS &apos;29</div>
    <div className="flex flex-wrap gap-x-6">
      <Link href="https://github.com/gareev-bulat" className="py-2 hover:text-accent">GitHub</Link>
      <Link href="https://www.linkedin.com/in/bulat-gareev-295a95338/" className="py-2 hover:text-accent">LinkedIn</Link>
      <Link href="#top" className="py-2 hover:text-accent">Back to top</Link>
    </div>
  </footer>
);

export default Footer;
