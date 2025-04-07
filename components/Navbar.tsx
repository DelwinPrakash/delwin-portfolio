"use client";

export default function Navbar() {
    
    const navLinks = [
        { href: "#about-me", label: "About me" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
    ];
    
    return(
        <nav className={`space-mono-font sticky top-0 h-16 sm:h-20 flex items-center justify-center`}>
            <div className="flex items-center w-screen mx-2">
                <div className="flex items-center justify-center w-full space-x-12 sm:space-x-20">
                    {navLinks.map(({ href, label }) => (
                        <a key={href} href={href} className="hover:text-blue-400">
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
