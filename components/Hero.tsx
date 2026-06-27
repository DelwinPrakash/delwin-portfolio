"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");
  const [index, setIndex] = useState(0);
  const stack = ["FullStack", "App", "Blockchain"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stack.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [stack.length]);

  // Fix hydration mismatch issues by only rendering client animations/dynamic values on mount
  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const date = new Date();
      setTime(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-dvh bg-grid-pattern overflow-hidden flex flex-col font-space-grotesk text-black select-none">
      
      {/* 1. TOP HEADER / NAVIGATION */}
      <header className="w-full max-w-7xl mx-auto px-4 pt-6 z-20">
        <div className="bg-white border-4 border-black shadow-neo-md p-4 flex items-center justify-between">

          <div className="font-syne font-black text-2xl tracking-wider px-3 py-1 bg-neo-yellow border-2 border-black rotate-[-2deg] hover:rotate-0 transition-transform duration-200 cursor-pointer">
            DP.
          </div>

          {/* Navigation Links - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-6 font-bold text-lg">
            <a href="#about" className="hover:text-neo-blue hover:underline decoration-4 underline-offset-4 transition-colors">About</a>
            <a href="#projects" className="hover:text-neo-blue hover:underline decoration-4 underline-offset-4 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-neo-blue hover:underline decoration-4 underline-offset-4 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-neo-blue hover:underline decoration-4 underline-offset-4 transition-colors">Contact</a>
          </nav>

          {/* Available for Work Status Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-neo-green/20 border-2 border-black font-bold text-xs uppercase shadow-neo-sm">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neo-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-neo-green border border-black"></span>
              </span>
              <span className="hidden sm:inline">Available for Work</span>
            </div>

            {/* Time / OS widget */}
            {mounted && (
              <div className="hidden lg:block px-3 py-1 bg-neo-cream border-2 border-black font-mono text-xs font-bold uppercase shadow-neo-sm">
                {time}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 3. HERO CONTENT CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 md:py-16 flex items-center justify-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full">

            <div className="inline-flex items-center gap-2 bg-neo-coral text-white font-black text-sm uppercase px-4 py-1.5 border-3 border-black shadow-neo-sm rotate-[-2deg] mb-6 hover:rotate-0 transition-transform duration-200">
              HELLO, I'M
            </div>

            <h1 className="font-syne font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight uppercase leading-[0.9] text-black mb-6 select-none">
              Delwin <br />
              <span className="relative inline-block text-neo-blue bg-white px-4 py-2 my-2 border-4 border-black shadow-neo-md rotate-[1deg] hover:rotate-0 hover:text-red-600 transition-all duration-300">
                Prakash
              </span>
            </h1>

            {/* Role Title */}
            <div className="inline-block bg-neo-yellow text-black font-syne font-black text-2xl md:text-4xl uppercase px-6 py-4 border-3 border-black shadow-neo-sm rotate-[-1deg] hover:rotate-0 transition-transform duration-200 text-left">  
              <div className="relative">
                <div className="invisible select-none pointer-events-none whitespace-nowrap flex flex-col items-start gap-1">
                  <span>Blockchain</span>
                  <span className="text-neo-blue">Developer</span>
                </div>
                
                {/* Absolute overlay for the animating text */}
                <div className="absolute inset-0 flex flex-col items-start gap-1 justify-center">
                  {/* Animating line 1 */}
                  <div className="relative h-[1.2em] overflow-hidden w-full">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={index}
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -15, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-start w-full whitespace-nowrap text-left text-black"
                      >
                        {stack[index]}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  {/* Static line 2 */}
                  <span className="text-neo-blue">Developer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Description Notepad Card */}
          <div className="lg:col-span-5 flex justify-center items-center w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-md group">
              {/* Offset Shadow Card */}
              <div className="absolute inset-0 bg-black border-4 border-black translate-x-2.5 translate-y-2.5 transition-transform duration-200 group-hover:translate-x-3.5 group-hover:translate-y-3.5"></div>
              {/* Main Card */}
              <div className="relative bg-white border-4 border-black p-6 md:p-8">
                <p className="font-medium text-lg md:text-xl text-black leading-relaxed">
                  "Building digital experiences with modern technologies. Passionate about clean code, user-centric design, and scalable architecture."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

