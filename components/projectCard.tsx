import Image from "next/image";
import Link from "next/link";

const PATHS = {
  ReactNative: "/images/icons/react-native.svg",
  JavaScript: "/images/icons/javascript.svg",
  GitLab: "/images/icons/gitlab.svg",
  Firebase: "/images/icons/firebase.svg",
  Git: "/images/icons/git.svg",
  VSCode: "/images/icons/vscode.svg",
  Figma: "/images/icons/figma.svg",
  NextJs: "/images/icons/nextjs.png",
  TypeScript: "/images/icons/typescript.svg",
  Gemini: "/images/icons/gemini.svg",
  MongoDB: "/images/icons/mongoDB.svg",
  Java: "/images/icons/java.svg",
  AndroidStudio: "/images/icons/android-studio.svg",
  GitHub: "/images/icons/github.svg",
  TailwindCSS: "/images/icons/tailwind.svg",
  Swift: "/images/icons/swift.svg",
  SwiftUI: "/images/icons/swiftUI.svg",
  Kotlin: "/images/icons/kotlin.svg",
  Jetpack: "/images/icons/jetpack.svg",
  Supabase: "/images/icons/supabase.svg",
  React: "/images/icons/react.svg",
  Groq: "/images/icons/groq.svg",
  Xcode: "/images/icons/Xcode.svg",
  Python: "/images/icons/python.svg",
  LiveKit: "/images/icons/livekit.svg",
};

const GITHUB_links = {
  PawNav: "https://github.com/gareev-bulat/PawNav.git",
  HeadlineTrader: "https://github.com/gareev-bulat/HeadlineTrader.git",
  CurrencyConverter: "https://github.com/gareev-bulat/Currency-Converter.git",
  CoopCompass: "https://github.com/gareev-bulat/Co-Op-Compass.git",
  RESET: "https://github.com/gareev-bulat/RESET.git",
  Nomiyo: "https://github.com/gareev-bulat/Nomiyo.git",
};

export type ToolKey = keyof typeof PATHS;

type CardProps = {
  name: string;
  image: string;
  tools: ToolKey[];
  description: string;
};

const projectCard = ({ name, image, tools, description }: CardProps) => {
  return (
    <div className="w-full rounded-3xl border-[7px] border-brand-700 bg-brand-teal text-brand-700 p-6 cursor-pointer pendulum-hover transition-all duration-500 hover:bg-brand-tealLight">
      <div className="flex flex-col sm:flex-row gap-6">
        <Image
          src={image}
          alt={name}
          width={140}
          height={170}
          className="rounded-2xl object-cover shrink-0 self-start"
        />

        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-3">
            <div className="font-display text-2xl sm:text-3xl">{name}</div>
            {name in GITHUB_links && (
              <Link
                href={GITHUB_links[name as keyof typeof GITHUB_links]}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${name} on GitHub`}
                className="animate-bounce flex items-center gap-1.5 bg-brand-700 hover:bg-brand-1000 text-brand-200 rounded-full px-3 py-1.5 transition-colors"
              >
                <Image
                  src={PATHS["GitHub"]}
                  width={20}
                  height={20}
                  alt=""
                  className="invert"
                />
                <span className="text-xs font-semibold">Code</span>
              </Link>
            )}
          </div>

          <p className="text-sm sm:text-base leading-relaxed font-normal">
            {description}
          </p>

          <div className="flex flex-row flex-wrap gap-4 mt-1">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/90 rounded-lg p-1.5 flex items-center justify-center"
              >
                <Image
                  width={28}
                  height={28}
                  src={PATHS[tool as keyof typeof PATHS]}
                  alt={tool}
                  title={tool}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
