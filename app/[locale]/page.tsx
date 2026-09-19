// Sections
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
    </main>
  );
}
