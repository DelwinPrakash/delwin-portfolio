"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

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
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, [stack.length]);

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden text-foreground selection:bg-primary/30">

            {/* Hero Section */}
            <Section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
                <div className="space-y-6 animate-in fade-in zoom-in duration-1000">
                    <h2 className="text-lg sm:text-xl font-mono text-primary tracking-widest uppercase">
                        Hello, I&apos;m
                    </h2>
                    <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tight">
                        Delwin <span className="text-muted-foreground">Prakash</span>
                    </h1>

                    <div className="h-12 sm:h-16 flex items-center justify-center">
                        <h3 className={`text-2xl sm:text-4xl lg:text-5xl font-bold gradient-text transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                            {stack[index]} Developer
                        </h3>
                    </div>

                    <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
                        Building digital experiences with modern technologies. Passionate about clean code, user-centric design, and scalable architecture.
                    </p>

                    {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link href="/projects">
                            <Button size="lg" className="w-full sm:w-auto">View Projects</Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">About Me</Button>
                        </Link>
                    </div> */}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </Section>

            {/* Featured Projects Preview */}
            <Section>
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold">Featured Work</h2>
                    <Link href="/projects" className="text-primary hover:underline underline-offset-4">
                        View All &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder Projects - In a real scenario, map from data */}
                    <Card className="group cursor-pointer">
                        <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-medium">View Case Study</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Project Alpha</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            A decentralized exchange aggregator built on Solana using Next.js and Anchor.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Next.js</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Solana</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">TypeScript</span>
                        </div>
                    </Card>

                    <Card className="group cursor-pointer">
                        <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-medium">View Case Study</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">E-Commerce Dashboard</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            Comprehensive analytics dashboard for online retailers with real-time data visualization.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Tailwind</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Recharts</span>
                        </div>
                    </Card>

                    <Card className="group cursor-pointer">
                        <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white font-medium">View Case Study</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Portfolio v1</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            The previous iteration of this portfolio, showcasing my early work and growth.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">HTML/CSS</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">JavaScript</span>
                        </div>
                    </Card>
                </div>
            </Section>

            {/* Skills Section */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A collection of tools and technologies I use to build robust applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Solana", "Rust", "Docker", "AWS", "Git", "Figma"].map((skill) => (
                        <Card key={skill} className="flex items-center justify-center p-4 hover:border-primary/50 transition duration-300 ease-in-out">
                            <span className="font-medium">{skill}</span>
                        </Card>
                    ))}
                </div>
            </Section>
        </div >
    );
}
