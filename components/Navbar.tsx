"use client";

import { usePathname } from "next/navigation"; 

export default function Navbar() {
    
    const location = usePathname();

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/about", label: "ABOUT ME" },
        { href: "/projects", label: "PROJECTS" },
    ];
    
    return(
        <nav className={`h-16 sm:h-20 flex items-center justify-center bg-transparent`}>
            <div className="flex items-center w-screen">
                <div className="flex items-center justify-evenly w-full space-x-5 text-center font-mono">
                    {navLinks.map(({ href, label }) => (
                        <a key={href} href={href} className={`${location === href ? "text-white" : "text-gray-500"} hover:text-blue-400 transition-colors pointer-events-auto`}>
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
