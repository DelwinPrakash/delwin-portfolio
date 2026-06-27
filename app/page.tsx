import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full bg-[#030303] min-h-screen flex flex-col">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
