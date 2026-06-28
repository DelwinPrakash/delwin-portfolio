"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}

export default function Connect() {
  const [copied, setCopied] = useState<string | null>(null);

  const socials: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/DelwinPrakash",
      handle: "@DelwinPrakash",
      color: "bg-white",
      hoverColor: "hover:bg-neo-yellow",
      icon: (
        <img src="/logo/github.png" alt="GitHub" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/delwinprakash/",
      handle: "delwinprakash",
      color: "bg-white",
      hoverColor: "hover:bg-neo-green",
      icon: (
        <img src="/logo/linkedin.png" alt="LinkedIn" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
      )
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/PrakashDelwin",
      handle: "@PrakashDelwin",
      color: "bg-white",
      hoverColor: "hover:bg-neo-coral",
      icon: (
        <img src="/logo/x.png" alt="X" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
      )
    },
    {
      name: "Email",
      url: "mailto:dev.delwin@gmail.com",
      handle: "dev.delwin@gmail.com",
      color: "bg-white",
      hoverColor: "hover:bg-neo-blue",
      icon: (
        <img src="/logo/gmail.png" alt="Email" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
      )
    },
    {
      name: "Telegram",
      url: "https://t.me/delwiiinnn",
      handle: "delwiiinnn",
      color: "bg-white",
      hoverColor: "hover:bg-neo-green",
      icon: (
        <img src="/logo/telegram.png" alt="Telegram" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
      )
    },
    {
      name: "Base",
      url: "https://base.app/profile/delwin",
      handle: "delwin",
      color: "bg-white",
      hoverColor: "hover:bg-neo-yellow",
      icon: (
        <img src="/logo/base.png" alt="Base" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
      )
    },
    {
      name: "MonkeyType",
      url: "https://monkeytype.com/profile/Delwi",
      handle: "Delwi",
      color: "bg-white",
      hoverColor: "hover:bg-neo-blue",
      icon: (
        <img src="/logo/monkeytype.svg" alt="MonkeyType" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
      )
    }
  ];

  const handleCopy = (text: string, platform: string) => {
    navigator.clipboard.writeText(text);
    setCopied(platform);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section
      id="connect"
      className="relative min-h-screen py-20 px-4 md:px-8 border-t-8 border-black text-black select-none overflow-hidden bg-[#FEF2F2]"
    >
      {/* Tilted Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(244, 63, 94, 0.12) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(244, 63, 94, 0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          transform: "rotate(4deg) scale(1.4)",
          transformOrigin: "center center"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Title Badge */}
        <motion.div
          initial={{ rotate: 2, scale: 0.9, opacity: 0 }}
          whileInView={{ rotate: 1.5, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-neo-yellow border-4 border-black p-4 md:p-6 mb-16 shadow-neo-md inline-block hover:rotate-0 transition-transform duration-200 text-center"
        >
          <h2 className="font-syne font-black text-3xl md:text-5xl uppercase tracking-tight text-black">
            Connect
          </h2>
          <p className="font-mono text-sm md:text-base font-bold mt-2 uppercase text-black/80">
            Let's build together. Find me online.
          </p>
        </motion.div>

        {/* Dual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-stretch">
          
          {/* Left Column: Desktop Social Explorer */}
          <motion.div 
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col relative"
          >
            <div className="absolute inset-0 bg-black border-4 border-black translate-x-3 translate-y-3 pointer-events-none"></div>
            <div className="relative bg-neo-cream border-4 border-black flex flex-col h-full">
              
              {/* Title Bar */}
              <div className="w-full bg-neo-blue text-white border-b-4 border-black p-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                </div>
                <span className="font-mono text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider truncate max-w-[180px] sm:max-w-none">
                  C:\Windows\system32\social_explorer.exe
                </span>
                <div className="w-5 h-5 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                  X
                </div>
              </div>

              {/* Grid of Shortcut Files */}
              <div className="p-4 sm:p-6 flex-1 grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 items-start">
                {socials.map((social) => (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={social.name}
                    className="flex flex-col items-center justify-center p-2 sm:p-3 border-2 border-transparent hover:border-black hover:bg-white transition-all duration-150 rounded cursor-pointer text-center group"
                  >
                    {/* Retro File Icon Wrapper */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 border-3 border-black shadow-neo-sm ${social.color} ${social.hoverColor} flex items-center justify-center transition-all duration-150 group-hover:-translate-y-1 group-hover:shadow-neo-md`}>
                      {social.icon}
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs font-black mt-2 text-black uppercase tracking-wide truncate max-w-[75px] sm:max-w-none">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Right Column: Retro Floppy Disk Badge */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col relative"
          >
            <div className="absolute inset-0 bg-black border-4 border-black translate-x-3 translate-y-3 pointer-events-none"></div>
            <div className="relative bg-neo-coral border-4 border-black flex flex-col h-full p-4 sm:p-6 items-center justify-between">
              
              {/* Top Floppy Disk Slide / Cover */}
              <div className="w-full flex justify-between items-start mb-6">
                <div className="w-2/3 h-12 sm:h-14 bg-gray-400 border-3 border-black flex items-center justify-around px-4"></div>
                <div className="w-8 h-8 bg-black border-2 border-black flex items-center justify-center">
                  <div className="w-4 h-4 bg-white/20"></div>
                </div>
              </div>

              {/* Floppy Label */}
              <div className="w-full bg-neo-cream border-3 border-black p-3 sm:p-4 flex flex-col flex-1 shadow-neo-sm">
                
                {/* Label Header */}
                <div className="border-b-2 border-black pb-2 mb-4">
                  <h3 className="font-syne font-black text-lg sm:text-xl uppercase tracking-tight text-black">
                    DELWIN PRAKASH
                  </h3>
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase text-black/60">
                    Ver 2.0 // Social Directory
                  </span>
                </div>

                {/* Account Details List - Scrollable, showing 4 items at a time */}
                <div className="flex flex-col gap-3 font-mono max-h-[305px] overflow-y-auto pr-1.5 custom-scrollbar">
                  {socials.map((social) => (
                    <div 
                      key={social.name}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white border-2 border-black p-2 md:p-3 hover:bg-neo-yellow/20 transition-colors"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="font-black text-neo-blue text-[9px] sm:text-[10px] uppercase">
                          {social.name}:
                        </span>
                        <span className="font-bold text-black text-xs sm:text-sm truncate">
                          {social.handle}
                        </span>
                      </div>
                      
                      {/* Action Button: Copy */}
                      <button
                        onClick={() => handleCopy(social.handle, social.name)}
                        className={`w-full sm:w-auto px-3 py-1 border-2 border-black font-black text-xs uppercase shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:bg-neo-green shrink-0 cursor-pointer ${
                          copied === social.name ? "bg-neo-green text-black" : "bg-neo-cream text-black"
                        }`}
                      >
                        {copied === social.name ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  ))}
                </div>

              </div>

              {/* Floppy Bottom Cutout indicator */}
              <div className="w-full flex justify-end mt-4">
                <div className="w-6 h-6 bg-black">M</div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}