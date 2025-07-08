import Image from "next/image";
import Link from "next/link";
import Aboutme from "@/components/aboutme";
import Portfolio from "@/components/portfolio";
import Connect from "@/components/connect";
import SideNavBar from "@/components/sidenavbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 min-h-screen">
      <section id="hero">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-20
                        flex flex-col md:flex-row items-center justify-between
                        py-12 relative">
          <SideNavBar />

          <div className="relative flex flex-col items-center mb-8 md:mb-0">
            <div
              className="absolute inset-0 flex justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-full h-[200px] sm:h-[300px]
                              bg-white/20 rounded-full blur-2xl" />
            </div>

            <Image
              src="/images/bulat_image.jpeg"
              alt="profile picture"
              width={400}
              height={400}
              priority
              className="rounded-full object-cover
                         w-32 h-32
                         sm:w-48 sm:h-48
                         md:w-56 md:h-56
                         lg:w-64 lg:h-64"
            />

            <Link
              href="/docs/BulatGareevResume.pdf"
              download
              className="mt-4 inline-flex items-center space-x-2
                         bg-brand-500 hover:bg-brand-700 text-white
                         rounded-full px-4 py-1 sm:py-3 lg:py-4 transition"
            >
              <Image
                src="/images/download_icon.png"
                alt="download icon"
                width={24}
                height={24}
              />
              <span className="text-sm sm:text-base">Download my CV</span>
            </Link>
          </div>

          <div className="flex flex-col text-white text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              Bulat Gareev
            </h2>
            <p className="mt-2 text-md sm:text-md lg:text-xl">
              I build interactive web & mobile apps
            </p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
              <Link className="bg-white text-black hover:bg-brand-1000 hover:text-white
                              px-3 py-1 md:px-4 md:py-2 rounded transition text-sm sm:text-base" href="mailto:gareevbulich63@gmail.com">
         
                  Gmail
              
              </Link>
              <Link href="https://github.com/gareev-bulat" className="bg-white text-black hover:bg-brand-0 hover:text-white
                              px-3 py-1 md:px-4 md:py-2 rounded transition text-sm sm:text-base">
               
                  GitHub
        
              </Link>
              <Link className="bg-white text-black hover:bg-brand-300 hover:text-white
                              px-3 py-1 md:px-4 md:py-2 rounded transition text-sm sm:text-base" href="https://www.linkedin.com/in/bulat-gareev-295a95338/">
  
                  LinkedIn

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
