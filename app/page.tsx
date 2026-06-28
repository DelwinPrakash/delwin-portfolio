import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-[#030303] min-h-screen flex flex-col">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Connect />
      <Contact />
    </main>
  );
}
