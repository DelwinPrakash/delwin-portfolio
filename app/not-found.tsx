"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-dvh w-full bg-grid-pattern text-black flex flex-col items-center justify-center p-4 select-none relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-neo-yellow border-4 border-black rotate-6 pointer-events-none z-0" />
      <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-neo-coral rounded-full border-4 border-black pointer-events-none z-0" />
      <div className="absolute top-1/4 -right-12 w-28 h-28 bg-neo-blue border-4 border-black rotate-[35deg] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -left-16 w-32 h-32 bg-neo-green rounded-full border-4 border-black pointer-events-none z-0" />

      {/* Main Card */}
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Shadow */}
        <div className="absolute inset-0 bg-black border-4 border-black translate-x-3 translate-y-3 pointer-events-none"></div>

        {/* Content Box */}
        <div className="relative bg-neo-cream border-4 border-black p-6 md:p-8 flex flex-col items-center text-center">
          {/* Warning Icon */}
          <div className="w-20 h-20 bg-neo-coral border-4 border-black flex items-center justify-center mb-6 shadow-neo-sm rotate-[-4deg]">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>

          {/* Error Code */}
          <h1 className="font-syne font-black text-6xl uppercase tracking-tighter text-black mb-2">
            404
          </h1>

          {/* Title */}
          <h2 className="font-syne font-black text-xl uppercase tracking-tight text-black mb-4">
            Route Not Found
          </h2>

          {/* Description */}
          <p className="font-mono text-xs font-bold text-black/70 mb-8 uppercase leading-relaxed max-w-xs">
            The requested address was not found on this server. It might have been moved, deleted, or never existed.
          </p>

          {/* Go Home Button */}
          <Link
            href="/"
            className="w-full py-3.5 bg-neo-yellow hover:bg-neo-green border-3 border-black font-syne font-black text-sm uppercase tracking-wider shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer text-center block"
          >
            Go Back Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
