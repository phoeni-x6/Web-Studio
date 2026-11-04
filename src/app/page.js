import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Packages from "@/components/home/Packages";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Packages />
      <Projects />
      <Contact />
    </main>
  );
}