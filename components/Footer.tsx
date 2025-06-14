export default function Footer(){
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About me" },
        { href: "/projects", label: "Projects" },
    ];
    return(
        <footer className="bg-neutral-80 border-1 rounded-2xl border-red-600 font-pixelify text-xl flex flex-col justify-end py-2">
            <div className="bg-red-5 flex justify-between px-5 sm:px-10 pointer-events-auto">
                <ul className="space-y-5 flex flex-col">
                    {navLinks.map(({ href, label }) => (
                        <a key={href} href={href} className="text-white hover:text-blue-400 transition-colors">
                            {label}
                        </a>
                    ))}
                </ul>
                <ul className="space-y-5 flex flex-col items-end">
                    <a href="https://x.com/PrakashDelwin" className="text-white hover:text-blue-400 transition-colors">X</a>
                    <a href="https://github.com/DelwinPrakash" className="text-white hover:text-blue-400 transition-colors">GitHub</a>
                    <a href="mailto:dev.delwin@gmail.com" className="text-white hover:text-blue-400 transition-colors">Email</a>
                </ul>
            </div>
            <div className="flex justify-center">
                <p className="font-mono text-lg mt-2">&copy; 2025 - Delwin Prakash</p>
            </div>
        </footer>
    );
}