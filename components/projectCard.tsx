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
  index: number;
  name: string;
  image: string;
  tools: ToolKey[];
  date: string;
  description: string;
};

const projectCard = ({ index, name, image, tools, date, description }: CardProps) => {
  const repo = name in GITHUB_links ? GITHUB_links[name as keyof typeof GITHUB_links] : null;

  return (
    <article className="group flex flex-wrap items-start gap-x-10 gap-y-5 rounded-[20px] border-t border-line py-9 transition-all duration-200 hover:bg-surface sm:hover:px-6">
      <div className="w-full font-display text-4xl font-medium leading-none text-mute sm:w-[90px]">
        {String(index).padStart(2, "0")}
      </div>

      <div className="min-w-0 flex-1 basis-[400px]">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h3 className="font-display text-[clamp(30px,3.4vw,48px)] font-medium leading-none tracking-[-0.03em] transition-colors group-hover:text-accent">
            {name}
          </h3>
          {repo && (
            <Link
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${name} on GitHub`}
              className="inline-flex items-center rounded-full border-[1.5px] border-edge px-4 py-1.5 font-mono text-xs tracking-normal transition hover:border-accent hover:text-accent"
            >
              Code &#8599;
            </Link>
          )}
        </div>

        <div className="label mt-3 text-mute">{date}</div>

        <p className="mt-4 max-w-[620px] text-base font-normal leading-relaxed">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tools.map((tool, i) => (
            <div key={i} className="flex items-center justify-center rounded-xl bg-paper p-1.5">
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

      <Image
        src={image}
        alt={`${name} app icon`}
        width={140}
        height={170}
        className="shrink-0 self-start rounded-2xl border border-line object-cover"
      />
    </article>
  );
};

export default projectCard;
