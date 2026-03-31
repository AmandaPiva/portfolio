import { redirect } from "next/navigation";
import Header from "./components/landing-page/header";
import Contact from "./components/landing-page/contatc";
import AboutMe from "./components/landing-page/about-me";
import Stacks from "./components/landing-page/stacks";
import Projects from "./components/landing-page/projects";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Contact />
      <AboutMe />
      <Stacks />
      <Projects />
      {children}
    </>
  );
}
