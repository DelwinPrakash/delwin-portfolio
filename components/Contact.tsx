"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage("All fields are required!");
      setStatus("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address!");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      setErrorMessage(error.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-4 md:px-8 border-t-8 border-black text-black select-none overflow-hidden bg-grid-pattern"
    >
      {/* Decorative Neo-Brutalist Shapes on Edges/Corners */}
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-neo-yellow border-4 border-black rotate-12 pointer-events-none z-0" />
      <div className="absolute -bottom-28 -right-28 w-64 h-64 bg-neo-blue rounded-full border-4 border-black pointer-events-none z-0" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        
        {/* Section Header Badge */}
        <motion.div
          initial={{ rotate: -1.5, scale: 0.9, opacity: 0 }}
          whileInView={{ rotate: -1, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-neo-coral border-4 border-black p-4 md:p-6 mb-12 shadow-neo-md text-center"
        >
          <h2 className="font-syne font-black text-3xl md:text-5xl uppercase tracking-tight text-white">
            Contact
          </h2>
        </motion.div>

        {/* Contact Form Container */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full relative"
        >
          {/* Shadow */}
          <div className="absolute inset-0 bg-black border-4 border-black translate-x-3 translate-y-3 pointer-events-none"></div>

          {/* Form Card */}
          <div className="relative bg-neo-cream border-4 border-black p-6 md:p-8 flex flex-col w-full">
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-neo-green border-3 border-black flex items-center justify-center mb-6 shadow-neo-sm">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="font-syne font-black text-2xl uppercase text-black mb-3">
                    Message Sent!
                  </h3>
                  <p className="font-mono text-sm font-bold text-black/70 mb-8 uppercase leading-relaxed max-w-sm">
                    Thanks for reaching out. I will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 bg-neo-yellow hover:bg-neo-green border-3 border-black font-syne font-black text-sm uppercase shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono font-black text-sm uppercase text-black">
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Your Name"
                      disabled={status === "sending"}
                      className="w-full font-mono font-bold text-sm bg-white border-3 border-black p-3 focus:bg-neo-yellow/10 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono font-black text-sm uppercase text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="your.email@example.com"
                      disabled={status === "sending"}
                      className="w-full font-mono font-bold text-sm bg-white border-3 border-black p-3 focus:bg-neo-yellow/10 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono font-black text-sm uppercase text-black">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Type your message here..."
                      rows={5}
                      disabled={status === "sending"}
                      className="w-full font-mono font-bold text-sm bg-white border-3 border-black p-3 focus:bg-neo-yellow/10 focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <div className="bg-neo-coral/20 border-3 border-black p-3 text-xs font-mono font-black uppercase text-black flex items-center gap-2">
                      <svg className="w-5 h-5 fill-current text-neo-coral shrink-0" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                      </svg>
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`w-full py-3.5 border-3 border-black font-syne font-black uppercase text-base tracking-wider transition-all shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:bg-neo-coral cursor-pointer flex items-center justify-center gap-2 ${
                      status === "sending"
                        ? "bg-gray-300 text-black/50 border-gray-400 cursor-not-allowed shadow-none"
                        : "bg-neo-yellow hover:bg-neo-green text-black"
                    }`}
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
}