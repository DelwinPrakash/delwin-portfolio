"use client";

export default function Navbar() {
    
    const navLinks = [
        { href: "#about-me", label: "About me" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
    ];
    
    return(
        <nav className={`h-16 sm:h-20 flex items-center justify-center bg-transparent`}>
            <div className="flex items-center w-screen mx-2">
                <div className="flex items-center justify-center w-full space-x-12 sm:space-x-20 font-mono">
                    {navLinks.map(({ href, label }) => (
                        <a key={href} href={href} className="text-white hover:text-blue-400 transition-colors pointer-events-auto">
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
