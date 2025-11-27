"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/ui/Button";

export default function Navbar() {
    const location = usePathname();

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT" },
        { href: "/projects", label: "PROJECTS" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-16 sm:h-20 px-4 sm:px-8">
            <div className="glass rounded-full px-6 py-3 flex items-center space-x-8">
                <div className="flex items-center space-x-6 sm:space-x-8 font-mono text-sm sm:text-base">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "transition-colors duration-300 hover:text-primary pointer-events-auto",
                                location === href ? "text-primary font-bold" : "text-muted-foreground"
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
