import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SideNavBar from "@/components/sidenavbar";


const roboto = localFont({
  src: [
    {
      path: "../public/fonts/Roboto-Bold.ttf",
      weight: '700',
    },
    {
      path: "../public/fonts/Roboto-ExtraBold.ttf",
      weight: '900',
    },
    {
      path: "../public/fonts/Roboto-SemiBold.ttf",
      weight: '500',
    },
    {
      path: "../public/fonts/Roboto-Light.ttf",
      weight: '300',
    },
  ],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Bulat Gareev",
  description: "Welcome to my personal portfolio website!",
  icons: {
    icon: "/images/logo.png",

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[linear-gradient(180deg,_#003135_4%,_#024950_56%)]">
        <SideNavBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



