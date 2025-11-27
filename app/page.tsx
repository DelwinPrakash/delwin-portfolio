"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    stack: string[];
    githubUrl: string;
    liveUrl: string;
    isLive: boolean;
}

export default function Home() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const stack: string[] = ["FullStack", "App", "Blockchain"];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % stack.length);
                setFade(true);
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, [stack.length]);

    const projects: Project[] = [
        {
            title: "Rusty-Type",
            description: "Terminal based typing speed test application built with Rust.",
            imageUrl: "/thumbnail/rusty-type.png",
            stack: ['Rust', 'cli'],
            githubUrl: "https://github.com/delwinprakash/rusty-type.sol",
            liveUrl: "https://crate.io/crates/rusty-type",
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
    ];

    const skills: string[] = [
        "Anchor",
        "AngularJS",
        "Appwrite",
        "C",
        "Docker",
        "ExpressJS",
        "Figma",
        "Git",
        "Java",
        "JavaScript",
        "MongoDB",
        "NodeJS",
        "Postman",
        "Python",
        "React Native",
        "ReactJS",
        "Rust",
        "SQL",
        "Solana",
        "Solidity",
        "Supabase",
        "TailwindCSS",
        "TypeScript",
        "Web3.js"
    ];

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden text-foreground selection:bg-primary/30">

            <Section className="relative z-10 flex flex-col items-center justify-center min-h-dvh text-center">
                <div className="space-y-6 animate-in fade-in zoom-in duration-1000">
                    <h2 className="text-lg sm:text-xl font-mono text-primary tracking-widest uppercase">
                        Hello, I&apos;m
                    </h2>
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight">
                        Delwin <span className="text-muted-foreground">Prakash</span>
                    </h1>

                    <div className="h-12 sm:h-16 flex items-center justify-center">
                        <h3 className={`gradient-move animate-gradient-move text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-[length:300%_100%] bg-clip-text text-transparent transition-opacity duration-500 ${fade ? 'opacity-90' : 'opacity-0'}`}>
                            {stack[index]} Developer
                        </h3>
                    </div>

                    <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
                        Building digital experiences with modern technologies. Passionate about clean code, user-centric design, and scalable architecture.
                    </p>

                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </Section>

            <Section>
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold">Recent Works</h2>
                    <Link href="/projects" className="text-primary hover:underline underline-offset-4">
                        View All &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex flex-col h-full overflow-hidden group">
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4 bg-muted">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.isLive && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="secondary" className="bg-black border-1 hover:bg-white hover:text-black">Live Demo</Button>
                                        </a>
                                    )}
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Button size="sm" variant="outline" className="bg-black text-white border-white hover:bg-white hover:text-black">GitHub</Button>
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A collection of tools and technologies I use to build robust applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <Card key={index} className="flex items-center justify-center p-4 hover:border-primary/50 transition duration-300 ease-in-out">
                            <span className="font-medium">{skill}</span>
                        </Card>
                    ))}
                </div>
            </Section>
        </div >
    );
}
