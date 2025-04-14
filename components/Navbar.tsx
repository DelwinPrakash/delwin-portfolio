"use client";

export default function Navbar() {
    
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About me" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" }
    ];
    
    return(
        <nav className={`h-16 sm:h-20 flex items-center justify-center bg-transparent`}>
            <div className="flex items-center w-screen">
                <div className="flex items-center justify-around w-full space-x-5 text-center font-mono">
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
