import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-brand-700 rounded-b-3xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 sm:h-header">
        <Link href="/" className="mr-4">
          <Image src="/images/logo.png" width={44} height={44} alt="logo" />
        </Link>

        <div className="flex-1" />

        <nav className="flex gap-6 sm:gap-10 text-brand-200 text-sm sm:text-base tracking-wide">
          <Link href="/" className="hover:text-brand-teal transition">HOME</Link>
          <Link href="/experience" className="hover:text-brand-teal transition">EXPERIENCE</Link>
          <Link href="/hobbies" className="hover:text-brand-teal transition">HOBBIES</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;