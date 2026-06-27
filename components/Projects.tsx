"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  isLive: boolean;
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: "EXPNX",
      description: "Expense tracker app for android with automated SMS expense logging and AI-powered spending insights using MVVM, Jetpack Compose, and Room.",
      imageUrl: "/thumbnail/EXPNX.png",
      stack: ['Kotlin', "Jetpack Compose", "MVVM", "Room", "Coroutines"],
      githubUrl: "https://github.com/DelwinPrakash/EXPNX",
      liveUrl: "https://expnx.delwin.xyz/",
      isLive: true
    },
    {
      title: "Tip.sol",
      description: "Tip.sol is a decentralized platform for instantly tipping creators with fast, low-fee SOL payments on the Solana blockchain.",
      imageUrl: "/thumbnail/tip.sol.png",
      stack: ['React-Native', "Expo", 'Nativewind', 'Solana', "TypeScript", 'Solana Wallet Adapter'],
      githubUrl: "https://github.com/delwinprakash/tip.sol",
      liveUrl: "https://drive.google.com/drive/folders/1zzEA-a7uvQMQkMIfpMbOHBisFKnyKKTE?usp=drive_link",
      isLive: true
    },
    {
      title: "Rusty-Type",
      description: "Terminal based typing speed test application built with Rust.",
      imageUrl: "/thumbnail/rusty-type.png",
      stack: ['Rust', 'cli'],
      githubUrl: "https://github.com/delwinprakash/rusty-type",
      liveUrl: "https://crates.io/crates/rusty-type",
      isLive: true
    },
    {
      title: "Journal.sol",
      description: "A decentralized journaling application on Solana.",
      imageUrl: "/thumbnail/journal-sol.png",
      stack: ['Solana', 'Anchor', 'Next.js', 'Wallet Adapter', 'Tailwind'],
      githubUrl: "https://github.com/delwinprakash/journal.sol",
      liveUrl: "https://journal-sol-one.vercel.app",
      isLive: true
    },
    {
      title: "ChatApp",
      description: "Real-time chat application with authentication.",
      imageUrl: "/thumbnail/chatapp.png",
      stack: ['React Native', 'Supabase'],
      githubUrl: "https://github.com/delwinprakash/chatapp",
      liveUrl: "https://drive.google.com/drive/folders/1SDkq3SCXQDbxpLhrU2QdRqZ3IKfrgzNK?usp=sharing",
      isLive: true
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing my work.",
      imageUrl: "/thumbnail/portfolio.png",
      stack: ['Next.js', 'TypeScript', 'Tailwind'],
      githubUrl: "https://github.com/delwinprakash/portfolio",
      liveUrl: "https://delwin.vercel.app/",
      isLive: true
    },
    {
      title: "E-Cleanse",
      description: "E-waste management platform.",
      imageUrl: "/thumbnail/ecleanse.png",
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      githubUrl: "https://github.com/DelwinPrakash/E-Cleanse",
      liveUrl: "",
      isLive: false
    },
    {
      title: "Todo App",
      description: "Simple and effective task management.",
      imageUrl: "/thumbnail/nativeTodo.png",
      stack: ['React Native', 'Expo', 'Tailwind'],
      githubUrl: "https://github.com/DelwinPrakash/react-native-todo",
      liveUrl: "",
      isLive: false
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-4 md:px-8 border-t-8 border-black text-black select-none overflow-hidden"
      style={{
        backgroundColor: "#FFF8D6",
        backgroundImage: "linear-gradient(to right, rgba(228, 255, 0, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(228, 255, 0, 0.12) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px"
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Title Badge */}
        <motion.div
          initial={{ rotate: 3, scale: 0.9, opacity: 0 }}
          whileInView={{ rotate: 1.5, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-neo-blue border-4 border-black p-4 md:p-6 mb-16 shadow-neo-md inline-block hover:rotate-0 transition-transform duration-200 text-center"
        >
          <h2 className="font-syne font-black text-3xl md:text-5xl uppercase tracking-tight text-white">
            Projects
          </h2>
          <p className="font-mono text-sm md:text-base font-bold mt-2 uppercase text-neo-yellow/80">
            A showcase of my work and technical experiments.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative flex flex-col"
              >
                {/* Neo-Brutalist shadow */}
                <div className="absolute inset-0 bg-black border-4 border-black translate-x-3 translate-y-3 transition-transform duration-200 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                
                {/* Project Card */}
                <div className="relative bg-neo-cream border-4 border-black p-5 flex flex-col h-full justify-between">
                  
                  <div className="flex flex-col">
                    {/* Window Title Bar */}
                    <div className="w-[calc(100%+2.5rem)] bg-neo-coral border-b-4 border-black -mx-5 -mt-5 p-2 flex items-center justify-between mb-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-neo-cream border border-black shadow-sm"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-neo-cream border border-black shadow-sm"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-neo-cream border border-black shadow-sm"></div>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">
                        {project.title.toLowerCase().replace(/\s+/g, "_")}.exe
                      </span>
                      <div className="w-4.5 h-4.5 border-2 border-white flex items-center justify-center text-[8px] text-white font-mono font-bold leading-none cursor-pointer">
                        X
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="h-44 bg-neo-yellow border-3 border-black mb-4 flex items-center justify-center overflow-hidden rotate-[-1deg] group-hover:rotate-0 transition-transform duration-200">
                      {project.imageUrl ? (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="font-syne font-bold text-neo-black text-xs uppercase tracking-wider">
                          {project.title}
                        </span>
                      )}
                    </div>

                    <h3 className="font-syne font-black text-xl mb-2">{project.title}</h3>
                    
                    <p className="font-mono text-xs text-black/80 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    {/* Stack tags */}
                    <div className="flex gap-2 flex-wrap mb-6">
                      {project.stack.map((tag, tagIdx) => (
                        <span 
                          key={tag} 
                          className={`px-2.5 py-1 bg-black text-neo-yellow font-mono text-[10px] font-bold border-2 border-black shadow-neo-sm ${
                            tagIdx % 2 === 0 ? "rotate-[2deg]" : "-rotate-[2deg]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons: Code and Live */}
                    <div className="grid grid-cols-2 gap-3 w-full">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2.5 bg-neo-blue text-white font-syne font-black text-center uppercase text-xs border-3 border-black shadow-neo-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-100 flex items-center justify-center gap-1.5"
                      >
                        Code
                      </a>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2.5 bg-neo-green text-black font-syne font-black text-center uppercase text-xs border-3 border-black shadow-neo-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-100 flex items-center justify-center gap-1.5"
                        >
                          Live
                        </a>
                      ) : (
                        <button
                          disabled
                          className="px-3 py-2.5 bg-gray-300 text-gray-600 font-syne font-black text-center uppercase text-xs border-3 border-black cursor-not-allowed opacity-50 flex items-center justify-center gap-1.5"
                        >
                          No Live
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Toggle Button */}
        {projects.length > 3 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 bg-neo-yellow text-black font-syne font-black text-center uppercase border-3 border-black shadow-neo-md hover:-translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-yellow-400 transition-all duration-100 flex items-center gap-2 cursor-pointer"
            >
              {showAll ? "Show Less" : "Show More"}
              <svg 
                className={`w-5 h-5 stroke-[3] fill-none stroke-current transition-transform duration-200 ${
                  showAll ? "rotate-180" : ""
                }`} 
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}