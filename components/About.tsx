"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section 
      id="about" 
      className="relative min-h-screen pt-15 pb-0 px-0 border-t-8 border-black text-black select-none overflow-hidden"
      style={{
        backgroundColor: "#E0F2FE",
        backgroundImage: "linear-gradient(to right, rgba(37, 99, 235, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(37, 99, 235, 0.12) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px"
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 md:px-8 w-full">
        
        {/* Section Title Badge */}
        <motion.div
          initial={{ rotate: -3, scale: 0.9, opacity: 0 }}
          whileInView={{ rotate: -1.5, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-neo-yellow border-4 border-black p-4 md:p-6 mb-16 shadow-neo-md inline-block hover:rotate-0 transition-transform duration-200 text-center"
        >
          <h2 className="font-syne font-black text-3xl md:text-5xl uppercase tracking-tight">
            About Me
          </h2>
          <p className="font-mono text-sm md:text-base font-bold mt-2 uppercase text-black/80">
            A glimpse into my journey, passion, and what drives me.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">
          
          {/* Left Column: Passport / Profile card */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 relative group"
          >
            {/* Neo-Brutalist offset shadow */}
            <div className="absolute inset-0 bg-black border-4 border-black translate-x-3 translate-y-3 transition-transform duration-200 group-hover:translate-x-4 group-hover:translate-y-4"></div>
            
            {/* Main Window */}
            <div className="relative bg-neo-cream border-4 border-black p-6 flex flex-col items-center">
              
              {/* Window Title Bar */}
              <div className="w-[calc(100%+3rem)] bg-neo-blue border-b-4 border-black -mx-6 -mt-6 p-3 flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-neo-coral border-2 border-black shadow-neo-sm"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-neo-yellow border-2 border-black shadow-neo-sm"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-neo-green border-2 border-black shadow-neo-sm"></div>
                </div>
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  profile_card.exe
                </span>
                <div className="w-4 h-4 border-2 border-white flex items-center justify-center text-[10px] text-white font-mono font-bold leading-none cursor-pointer">
                  X
                </div>
              </div>

              {/* Profile Image Frame */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 border-4 border-black shadow-neo-md overflow-hidden bg-neo-cream rotate-[2deg] hover:rotate-0 transition-transform duration-300 mb-8">
                <img 
                  src="/logo/dp.jpg" 
                  alt="Delwin Prakash" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Data Table */}
              <div className="w-full font-mono text-xs md:text-sm border-3 border-black divide-y-3 divide-black mb-8 bg-neo-cream/50">
                <div className="p-3 flex justify-between bg-neo-cream/20 items-center">
                  <span className="font-black text-neo-blue uppercase">NAME:</span>
                  <span className="font-bold text-black">Delwin Prakash</span>
                </div>
                <div className="p-3 flex justify-between bg-neo-cream/20 items-center">
                  <span className="font-black text-neo-blue uppercase">AGE:</span>
                  <span className="font-bold text-black">22 Years Old</span>
                </div>
                <div className="p-3 flex justify-between bg-neo-cream/20 items-center">
                  <span className="font-black text-neo-blue uppercase">ROLE:</span>
                  <span className="font-bold text-black">CS Graduate / Dev</span>
                </div>
                <div className="p-3 flex justify-between bg-neo-cream/20 items-center">
                  <span className="font-black text-neo-blue uppercase">FOCUS:</span>
                  <span className="font-bold text-black">Web & App Dev</span>
                </div>
              </div>

              {/* Download Resume Button */}
              <a 
                href="https://raw.githubusercontent.com/delwinprakash/resume/main/pdf/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-10 bg-neo-green text-black font-syne font-black text-center uppercase py-3.5 border-3 border-black shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-emerald-400 transition-all duration-100 flex items-center justify-center gap-2 mb-8"
              >
                <svg className="w-5 h-5 stroke-[3] fill-none stroke-current shrink-0" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>

            </div>
          </motion.div>

          {/* Right Column: The Developer & The Visionary Cards */}
          <div className="lg:col-span-7 flex flex-col gap-10 w-full">
            
            {/* The Developer Window */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="relative group w-full"
            >
              {/* Neo-Brutalist offset shadow */}
              <div className="absolute inset-0 bg-black border-4 border-black translate-x-3 translate-y-3 transition-transform duration-200 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              
              {/* Window Box */}
              <div className="relative bg-neo-cream border-4 border-black p-6 md:p-8 flex flex-col">
                
                {/* Title Ribbon */}
                <div className="w-[calc(100%+3rem)] md:w-[calc(100%+4rem)] bg-neo-coral border-b-4 border-black -mx-6 md:-mx-8 -mt-6 md:-mt-8 p-3.5 flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                  </div>
                  <span className="font-syne font-black text-sm md:text-base text-black uppercase tracking-wider">
                    THE DEVELOPER
                  </span>
                  <div className="w-4 h-4"></div>
                </div>

                {/* Content */}
                <p className="font-medium text-lg md:text-xl leading-relaxed text-black mb-8">
                  Hi, I'm <strong className="font-black underline decoration-neo-coral decoration-4 underline-offset-2">Delwin Prakash</strong>, a 22-year-old Computer Science graduate passionate about building impactful digital experiences. I specialize in web and mobile app development, creating intuitive and functional applications with clean, responsive designs.
                </p>

              </div>
            </motion.div>

            {/* The Visionary Window */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="relative group w-full"
            >
              {/* Neo-Brutalist offset shadow */}
              <div className="absolute inset-0 bg-black border-4 border-black translate-x-3 translate-y-3 transition-transform duration-200 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              
              {/* Window Box */}
              <div className="relative bg-neo-cream border-4 border-black p-6 md:p-8 flex flex-col">
                
                {/* Title Ribbon */}
                <div className="w-[calc(100%+3rem)] md:w-[calc(100%+4rem)] bg-neo-yellow border-b-4 border-black -mx-6 md:-mx-8 -mt-6 md:-mt-8 p-3.5 flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                  </div>
                  <span className="font-syne font-black text-sm md:text-base text-black uppercase tracking-wider">
                    THE VISIONARY
                  </span>
                  <div className="w-4 h-4"></div>
                </div>

                {/* Content */}
                <p className="font-medium text-lg md:text-xl leading-relaxed text-black">
                  Beyond development, I focus on <strong className="font-black underline decoration-neo-yellow decoration-4 underline-offset-2">Web3 and blockchain</strong>. As the co-founder of <strong className="font-black text-neo-blue hover:underline cursor-pointer">Web3Enclave</strong>, a student-led club focused on decentralized tech, I organize events, lead discussions, and collaborate with fellow builders to grow the community.
                </p>

              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 4. INFINITE SCROLLING MARQUEE BANNER */}
      <footer className="w-full border-t-4 border-black mt-20 flex flex-col z-20 overflow-hidden">
        {/* Row 1 (Left to Right) */}
        <div className="w-full bg-neo-yellow border-b-2 border-black py-3 overflow-hidden">
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="animate-marquee-reverse flex gap-8 text-lg md:text-xl font-syne font-black uppercase tracking-wider text-black select-none">
              {["Anchor", "AngularJS", "Appwrite", "C", "Docker", "ExpressJS", "Figma", "Git", "Java"].map((skill, idx) => (
                <span key={idx} className="flex items-center gap-8 shrink-0">
                  <span>{skill}</span>
                  <span>✦</span>
                </span>
              ))}
              {["Anchor", "AngularJS", "Appwrite", "C", "Docker", "ExpressJS", "Figma", "Git", "Java"].map((skill, idx) => (
                <span key={`dup-${idx}`} className="flex items-center gap-8 shrink-0">
                  <span>{skill}</span>
                  <span>✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 (Right to Left) */}
        <div className="w-full bg-neo-coral border-b-2 border-black py-3 overflow-hidden">
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="animate-marquee flex gap-8 text-lg md:text-xl font-syne font-black uppercase tracking-wider text-black select-none">
              {["JavaScript", "Kotlin", "MongoDB", "NodeJS", "Postman", "Python", "React Native", "ReactJS"].map((skill, idx) => (
                <span key={idx} className="flex items-center gap-8 shrink-0">
                  <span>{skill}</span>
                  <span>✦</span>
                </span>
              ))}
              {["JavaScript", "Kotlin", "MongoDB", "NodeJS", "Postman", "Python", "React Native", "ReactJS"].map((skill, idx) => (
                <span key={`dup-${idx}`} className="flex items-center gap-8 shrink-0">
                  <span>{skill}</span>
                  <span>✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3 (Left to Right) */}
        <div className="w-full bg-neo-green py-3 overflow-hidden">
          <div className="flex whitespace-nowrap overflow-hidden">
            <div className="animate-marquee-reverse flex gap-8 text-lg md:text-xl font-syne font-black uppercase tracking-wider text-black select-none">
              {["Rust", "SQL", "Solana", "Solidity", "Supabase", "TailwindCSS", "TypeScript", "Web3.js"].map((skill, idx) => (
                <span key={idx} className="flex items-center gap-8 shrink-0">
                  <span>{skill}</span>
                  <span>✦</span>
                </span>
              ))}
              {["Rust", "SQL", "Solana", "Solidity", "Supabase", "TailwindCSS", "TypeScript", "Web3.js"].map((skill, idx) => (
                <span key={`dup-${idx}`} className="flex items-center gap-8 shrink-0">
                  <span>{skill}</span>
                  <span>✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
