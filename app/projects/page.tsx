"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
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

export default function Projects() {
    const projects: Project[] = [
        {
            title: "Rusty-Type",
            description: "Terminal based typing speed test application built with Rust.",
            imageUrl: "/thumbnail/rusty-type.png",
            stack: ['Rust', 'cli'],
            githubUrl: "https://github.com/delwinprakash/rusty-type.sol",
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
            description: "My personal portfolio showcasing my work. This portfolio",
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

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden text-foreground selection:bg-primary/30 pt-20">

            <Section className="relative z-10">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="p-1 text-4xl sm:text-5xl font-bold tracking-tight mb-4 gradient-move animate-gradient-move text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-[length:300%_100%] bg-clip-text text-transparent">My Projects</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A collection of projects I&apos;ve worked on, ranging from web applications to blockchain dApps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
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
        </div>
    );
}