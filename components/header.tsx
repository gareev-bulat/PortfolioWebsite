import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-[#002123]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 sm:h-header rounded-b-3xl">
        <Link href="/" className="mr-4">
          <Image src="/images/logo.png" width={48} height={48} alt="logo" />
        </Link>

        <div className="flex-1" />

        <nav className="flex gap-6 sm:gap-10 text-white text-sm sm:text-base tracking-wide">
          <Link href="/">HOME</Link>
          <Link href="/experience">EXPERIENCE</Link>
          <Link href="/hobbies">HOBBIES</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
