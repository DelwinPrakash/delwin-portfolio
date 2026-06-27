"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  points: string[];
  color: string;
  textColor: string;
  fileName: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
        company: "Capsys Business Solutions Pvt Ltd",
        role: "Web Developer",
        type: "Freelance",
        period: "May 2026",
        points: [
            "Developed and deployed a responsive corporate website using Next.js, React, and modern web technologies.",
            "Implemented server-side rendering (SSR) and optimized page performance for improved SEO and user experience.",
            "Managed deployment, testing, and maintenance of the website."
        ],
        color: "bg-neo-yellow",
        textColor: "text-black",
        fileName: "capsys_business.web"
    },
    {
      company: "Unicredit Consultants LLP",
      role: "Web Developer",
      type: "Freelance",
      period: "Apr 2026",
      points: [
        "Engineered a highly performant corporate platform using Next.js, React, and modern frontend tools.",
        "Leveraged server-side rendering (SSR) and optimized asset delivery to enhance SEO rank and user engagement.",
        "Directed version control, deployment pipelines, and post-launch maintenance workflows."
      ],
      color: "bg-neo-coral",
      textColor: "text-black",
      fileName: "unicredit_consultants.sh"
    },
    {
      company: "Aoctolabs (Web3 Startup)",
      role: "Front-End Developer",
      type: "Intern",
      period: "Oct 2024 – Nov 2024",
      points: [
        "Developed and deployed responsive UIs using ReactJS and Tailwind CSS, ensuring cross-device compatibility.",
        "Collaborated with the team to translate requirements into performant, interactive features."
      ],
      color: "bg-neo-blue",
      textColor: "text-white",
      fileName: "aoctolabs_web3.env"
    }
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen py-20 px-4 md:px-8 border-t-8 border-black text-black select-none overflow-hidden bg-[#F5F3FF]"
    >
      {/* Tilted Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(139, 92, 246, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(139, 92, 246, 0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          transform: "rotate(-6deg) scale(1.4)",
          transformOrigin: "center center"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Title Badge */}
        <motion.div
          initial={{ rotate: -2, scale: 0.9, opacity: 0 }}
          whileInView={{ rotate: -1, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-neo-green border-4 border-black p-4 md:p-6 mb-16 shadow-neo-md inline-block hover:rotate-0 transition-transform duration-200 text-center"
        >
          <h2 className="font-syne font-black text-3xl md:text-5xl uppercase tracking-tight text-black">
            Experience
          </h2>
          <p className="font-mono text-sm md:text-base font-bold mt-2 uppercase text-black/80">
            My professional career path and roles.
          </p>
        </motion.div>

        {/* Experience Cards Layout */}
        <div className="flex flex-col gap-12 w-full max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative w-full"
            >
              {/* Neo-Brutalist offset shadow */}
              <div className="absolute inset-0 bg-black border-4 border-black translate-x-3 translate-y-3 transition-transform duration-200 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              
              {/* Window Container */}
              <div className="relative bg-neo-cream border-4 border-black p-6 md:p-8 flex flex-col w-full">
                
                {/* Title Bar */}
                <div className={`w-[calc(100%+3rem)] md:w-[calc(100%+4rem)] ${exp.color} ${exp.textColor} border-b-4 border-black -mx-6 md:-mx-8 -mt-6 md:-mt-8 p-3 flex items-center justify-between mb-6`}>
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                  </div>
                  <span className="font-mono text-xs md:text-sm font-black tracking-wider uppercase">
                    {exp.fileName}
                  </span>
                  <div className="w-4.5 h-4.5 border-2 border-current flex items-center justify-center text-[9px] font-mono font-bold leading-none cursor-pointer">
                    X
                  </div>
                </div>

                {/* Job Metadata Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b-3 border-dashed border-black pb-4">
                  <div>
                    <h3 className="font-syne font-black text-2xl md:text-3xl text-black">
                      {exp.company}
                    </h3>
                    <p className="font-mono text-sm md:text-base font-bold text-neo-blue uppercase mt-1">
                      {exp.role} <span className="text-black/60">({exp.type})</span>
                    </p>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block px-3.5 py-1.5 bg-neo-yellow border-2 border-black font-mono text-xs md:text-sm font-black uppercase shadow-neo-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-4">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neo-green border-2 border-black flex items-center justify-center font-black font-mono text-xs text-black mt-0.5 shadow-neo-sm">
                        ✓
                      </span>
                      <p className="font-mono text-sm md:text-base text-black/90 leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}