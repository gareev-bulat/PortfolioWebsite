import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import Aboutme from "@/components/aboutme";
import Portfolio from "@/components/portfolio";
import Connect from "@/components/connect";
import SideNavBar from "@/components/sidenavbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 min-h-screen">
      <section id="hero">
        <SideNavBar />
        <div className="flex flex-row justify-evenly m-20">
          <div
            className="absolute inset-0 flex justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-full h-[300px] bg-white/20 rounded-full blur-2xl"></div>
          </div>

          <div className="relative flex flex-col items-center">
            
              <Image
              className="rounded-[80px] overflow-hidden w-70 h-70 sm:w-80 sm:h-80 md:w-70 md:h-70 lg:w-80 lg:h-80 xl:w-100 xl:h-100"
              src="/images/bulat_image.jpeg"
              alt="profile picture"
              width={400}
              height={400}
              priority
            />
            
            <a
              className="inline-flex bg-brand-500 items-center space-x-2 rounded-full border border-white mt-3 py-1 px-6 hover:bg-brand-700"
              href="/docs/BulatGareevResume.pdf"
              download="BulatGareevResume.pdf"
            >
              <Image
                src="/images/download_icon.png"
                alt="download icon"
                width={35}
                height={35}
              />

              <span className="inline sm:hidden text-1xl sm:text-1xl md:text-1xl lg:text-2xl p-2 text-white"></span>
              <span className="hidden sm:inline text-1xl sm:text-1xl md:text-1xl lg:text-2xl p-2 text-white">
                Download my CV
              </span>
            </a>
          </div>

          <div className="flex flex-col text-white">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl p-4">
              Bulat Gareev
            </h2>
            <p className="text-1xl sm:text-2xl lg:text-2xl p-4">
              I built interactive web & mobile apps
            </p>
            <div className="flex flex-row gap-5 pl-4 mt-4">
              <Link
                href="mailto:gareevbulich63@gmail.com"
                className="inline-block bg-white hover:bg-brand-1000 rounded-md transition-colors duration-200 ease-in-out text-sm sm:text-md md:text-base lg:text-base"
              >
                <h3 className="text-black hover:text-white py-2 px-4">Gmail</h3>
              </Link>
              <Link
                href="https://github.com/gareev-bulat"
                className="inline-block bg-white hover:bg-brand-0 rounded-md transition-colors duration-200 ease-in-out text-sm sm:text-md md:text-base lg:text-base"
              >
                <h3 className="text-black hover:text-white py-2 px-4">
                  GitHub
                </h3>
              </Link>
              <Link
                href="https://www.linkedin.com/in/bulat-gareev-295a95338/"
                className="inline-block bg-white hover:bg-brand-300 rounded-md transition-colors duration-200 ease-in-out text-sm sm:text-md md:text-base lg:text-base"
              >
                <h3 className="text-black hover:text-white py-2 px-4">
                  LinkeldIn
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Aboutme />
      <Portfolio />
      <Connect />
    </div>
  );
}
