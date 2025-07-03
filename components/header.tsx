import Image from "next/image";
import Link from "next/link";


function Header() {
  return (
    <header className="h-header mx-20 px-6 flex items-center rounded-b-3xl bg-[#002123]">
      <span className="hidden sm:inline">
      <Image
        src="/images/logo.png"
        className="m-4"
        width={60}
        height={60}
        alt="logo"
        priority
      />
      </span>
      <div className="flex-1" />
      <nav className="flex gap-10 md:gap-12 md:text-base_l lg:text-base_l tracking-widest text-white">
        <Link href="/">HOME</Link>
        <Link href="/experience">EXPERIENCE</Link>
        <Link href="/hobbies">HOBBIES</Link>
      </nav>
    </header>
  );
}

export default Header;
