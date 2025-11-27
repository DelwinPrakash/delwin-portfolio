"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

export default function About() {
    return (
        <div className="relative w-full min-h-screen overflow-x-hidden text-foreground selection:bg-primary/30 pt-20">

            <Section className="relative z-10">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-move animate-gradient-move text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-[length:300%_100%] bg-clip-text text-transparent">About Me</h1>
                        <p className="text-muted-foreground text-lg">
                            A glimpse into my journey, passion, and what drives me.
                        </p>
                    </div>

                    <div className="grid gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        <Card className="p-8 sm:p-10">
                            <h2 className="text-2xl font-bold mb-4 text-primary">The Developer</h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Hi, I&apos;m Delwin Prakash, a 21-year-old Computer Science undergraduate passionate about creating impactful digital experiences. I specialize in web and mobile app development, blending functionality with clean design to build intuitive and responsive applications. My journey in tech has been driven by curiosity and a constant desire to learn, pushing me to explore new tools, frameworks, and technologies that solve real-world problems.
                            </p>
                        </Card>

                        <Card className="p-8 sm:p-10">
                            <h2 className="text-2xl font-bold mb-4 text-accent">The Visionary</h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Beyond development, I&apos;m deeply interested in the future of the internet, particularly Web3 and blockchain. As the co-founder of Web3Enclave, a student-led club focused on decentralized technology, I’ve helped organize events, lead discussions, and build a community around innovation and learning. I&apos;m always open to collaborating on exciting projects, sharing knowledge, and growing alongside like-minded builders.
                            </p>
                        </Card>
                    </div>

                    <div className="pt-12">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
                        </div>
                        <div className="flex justify-center gap-8">
                            <a href="mailto:dev.delwin@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                <Image src="/logo/gmail-48.png" alt="Gmail" width={40} height={40} />
                            </a>
                            <a href="https://x.com/PrakashDelwin" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                <Image src="https://img.icons8.com/color/48/twitterx--v1.png" alt="X" width={40} height={40} />
                            </a>
                            <a href="https://github.com/DelwinPrakash" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                <Image src="https://img.icons8.com/fluency/48/github.png" alt="Github" width={40} height={40} />
                            </a>
                            <a href="https://www.linkedin.com/in/DelwinPrakash" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                <Image src="/logo/linkedin-48.png" alt="LinkedIn" width={40} height={40} />
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}