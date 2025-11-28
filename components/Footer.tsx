import Link from "next/link";

export default function Footer() {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
    ];

    return (
        <footer className="w-full py-8 border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex gap-6">
                        {navLinks.map(({ href, label }) => (
                            <Link key={href} href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {label}
                            </Link>
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground font-mono">
                        &copy; {new Date().getFullYear()} Delwin Prakash
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://x.com/PrakashDelwin" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        X (Twitter)
                    </a>
                    <a href="https://github.com/DelwinPrakash" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        GitHub
                    </a>
                    <a href="mailto:dev.delwin@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}