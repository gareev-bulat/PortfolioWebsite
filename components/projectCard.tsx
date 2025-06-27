import React from "react";
import Image from "next/image";
import Link from 'next/link'


const PATHS = {

  'ReactNative': '/images/icons/react-native.svg',
  'JavaScript': '/images/icons/javascript.svg',
  'GitLab': '/images/icons/gitlab.svg',
  'Firebase': '/images/icons/firebase.svg',
  'Git': '/images/icons/git.svg',
  'VSCode': '/images/icons/vscode.svg',
  'Figma': '/images/icons/figma.svg',
  'NextJs': '/images/icons/nextjs.png',
  'TypeScript': '/images/icons/typescript.svg',
  'Gemini': '/images/icons/gemini.svg',
  'MongoDB': '/images/icons/mongoDB.svg',
  'Java': '/images/icons/java.svg',
  'AndroidStudio': '/images/icons/android-studio.svg',
  'GitHub': '/images/icons/github.svg',
  'TailwindCSS': '/images/icons/tailwind.svg'

};

const GITHUB_links = {

  PawNav: 'https://github.com/gareev-bulat/PawNav.git',
  "HeadlineTrader": 'https://github.com/gareev-bulat/HeadlineTrader.git',
  "CurrencyConverter": 'https://github.com/gareev-bulat/HeadlineTrader.git',


}

type ToolKey = keyof typeof PATHS;


type CardProps = {
  name: string;
  image: string;
  tools: ToolKey[];
  dataFrame: string[];
};




const projectCard = ({ name, image, tools, dataFrame }: CardProps) => {
  return (
    <div className="w-[600px] h-[450px] rounded-3xl overflow-hidden ring-2 ring-white/50 hover:ring-white/80 ">
      <div className="relative w-full h-full bg-white flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={200}
          height={210}
          className="opacity-60 mb-20"
        />
        <div className="absolute left-5 bottom-2 flex flex-col">
          <div className="relative flex flex-row mb-2">
          <div className="text-3xl">{name}</div>
          {name in GITHUB_links && (
            <Link href={GITHUB_links[name as keyof typeof GITHUB_links]}>
              <Image className="-mt-3 ml-2" src={PATHS["GitHub"]} width={55} height={55} alt="GitHub" />
            </Link>
          )}
          </div>
          <div className="flex flex-row p-2 pt-0 gap-10">
            {tools.map((tool, index) => (
              <Image key={index} width={60} height={60} src={PATHS[tool as keyof typeof PATHS]} alt={tool}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
