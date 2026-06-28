"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DelwinLinks() {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://delwin.vercel.app/socials");
    setIsCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setIsCopied(false);
      setShowToast(false);
    }, 2000);
  };

  const links = [
    {
      name: "Portfolio Website",
      url: "https://delwin.vercel.app",
      icon: "/logo/dp.jpg",
      hoverBg: "hover:bg-neo-yellow hover:text-black",
    },
    {
      name: "X / Twitter",
      url: "https://x.com/PrakashDelwin",
      icon: "/logo/x.png",
      hoverBg: "hover:bg-neo-coral hover:text-black",
    },
    {
      name: "GitHub",
      url: "https://github.com/DelwinPrakash",
      icon: "/logo/github.png",
      hoverBg: "hover:bg-neo-green hover:text-black",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/DelwinPrakash",
      icon: "/logo/linkedin.png",
      hoverBg: "hover:bg-neo-blue hover:text-white",
    },
    {
      name: "Email",
      url: "mailto:dev.delwin@gmail.com",
      icon: "/logo/gmail.png",
      hoverBg: "hover:bg-neo-coral hover:text-black",
    },
    {
      name: "Telegram",
      url: "https://t.me/delwiiinnn",
      icon: "/logo/telegram.png",
      hoverBg: "hover:bg-neo-green hover:text-black",
    },
    {
      name: "Base",
      url: "https://base.app/profile/delwin",
      icon: "/logo/base.png",
      hoverBg: "hover:bg-neo-yellow hover:text-black",
    },
    {
      name: "MonkeyType",
      url: "https://monkeytype.com/profile/Delwi",
      icon: "/logo/monkeytype.svg",
      hoverBg: "hover:bg-neo-blue hover:text-white",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-grid-pattern text-black flex flex-col items-center py-16 px-4 select-none relative overflow-hidden">
      
      {/* Decorative Shapes */}
      {/* Top-Left: Tilted Yellow Square */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-neo-yellow border-4 border-black rotate-6 pointer-events-none z-0" />
      
      {/* Bottom-Right: Large Coral Circle */}
      <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-neo-coral rounded-full border-4 border-black pointer-events-none z-0" />

      {/* Top-Right: Blue Rotated Diamond */}
      <div className="absolute top-1/4 -right-12 w-28 h-28 bg-neo-blue border-4 border-black rotate-[35deg] pointer-events-none z-0" />

      {/* Bottom-Left: Green Circle */}
      <div className="absolute bottom-1/4 -left-16 w-32 h-32 bg-neo-green rounded-full border-4 border-black pointer-events-none z-0" />

      {/* Center-Right (desktop only): Small Coral Square */}
      <div className="absolute top-1/2 -right-6 w-16 h-16 bg-neo-coral border-4 border-black -rotate-12 pointer-events-none z-0 hidden md:block" />

      {/* Center-Left (desktop only): Small Yellow Pill */}
      <div className="absolute top-16 left-1/4 w-24 h-10 bg-neo-yellow border-4 border-black rounded-full rotate-12 pointer-events-none z-0 hidden lg:block" />


      {/* Main Container */}
      <div className="w-full max-w-md relative z-10 flex flex-col items-center">
        
        {/* Profile Card */}
        <div className="w-full relative mb-8">
          <div className="absolute inset-0 bg-black border-4 border-black translate-x-2 translate-y-2 pointer-events-none"></div>
          <div className="relative bg-neo-cream border-4 border-black p-6 flex flex-col items-center text-center">
            
            {/* Share / Copy Button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={handleCopy}
                className="w-10 h-10 border-3 border-black bg-white hover:bg-neo-yellow active:bg-neo-coral transition-colors flex items-center justify-center shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none cursor-pointer"
                title="Copy portfolio link"
              >
                {isCopied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neo-green"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>

            {/* Profile Image Frame */}
            <div className="relative w-24 h-24 border-4 border-black shadow-neo-md overflow-hidden bg-white rotate-[-3deg] hover:rotate-0 transition-transform duration-300 mb-4">
              <Image
                src="/logo/dp.jpg"
                alt="Delwin Prakash"
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            </div>

            <h1 className="font-syne font-black text-2xl uppercase tracking-tight text-black mb-1">
              Delwin Prakash
            </h1>
            <p className="font-mono text-xs font-bold text-black/60 uppercase">
              Developer & Web3 Builder
            </p>
          </div>
        </div>

        {/* Links List */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full relative group block"
            >
              {/* Shadow */}
              <div className="absolute inset-0 bg-black border-3 border-black translate-x-1.5 translate-y-1.5 transition-transform duration-100 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              {/* Button Container */}
              <div className={`relative bg-white border-3 border-black p-4 flex items-center justify-between transition-all duration-100 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none ${link.hoverBg}`}>
                <div className="flex items-center gap-4">
                  {/* Icon Wrapper */}
                  <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center overflow-hidden shrink-0 shadow-neo-sm">
                    <img
                      src={link.icon}
                      alt={link.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="font-syne font-bold text-sm uppercase tracking-wide">
                    {link.name}
                  </span>
                </div>

                {/* Arrow Icon */}
                <div className="w-6 h-6 flex items-center justify-center text-black font-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform group-hover:translate-x-1 transition-transform duration-150"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Back to Portfolio Link */}
        <a 
          href="/"
          className="mt-12 font-mono text-xs font-bold uppercase tracking-wider text-black/60 hover:text-black hover:underline decoration-2 underline-offset-4 flex items-center gap-1.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Portfolio
        </a>

      </div>

      {/* Copy Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 z-50 px-4 w-full max-w-xs"
          >
            <div className="absolute inset-0"></div>
            <div className="relative bg-neo-green border-3 border-black p-4 flex items-center justify-center gap-3 text-black">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-neo-sm">
                <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-mono text-[11px] font-black uppercase tracking-wider leading-none">
                Link copied to clipboard!
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
