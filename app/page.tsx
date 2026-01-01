import About from "@/components/main/About";
import Encryption from "@/components/main/Encryption";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Education from "@/components/main/Education";
import Certifications from "@/components/main/Certifications";
import Achievements from "@/components/main/Achievements";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Experience/>
        <Education />
        <Skills />
        <Certifications />
        <Achievements />
        <Projects />
        <Encryption />
      </div>
    </main>
  );
}
