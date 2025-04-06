"use client";

import { useEffect, useState } from "react";
import HamburgerMenu from "./icons/HamburgerMenu";
import Close from "./icons/Close";
// import GooeyNav from "./GooeyNav/GooeyNav";

export default function Navbar() {
    const [showNavBar, setShowNavBar] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => setIsOpen(!isOpen);
    
    // const controllNavBar = () => {
    // if (window.scrollY > lastScrollY) {
    //     setShowNavBar(false);
    // } else {
    //     setShowNavBar(true);
    // }
    // setLastScrollY(window.scrollY);
    // };

    // useEffect(() => {
    // window.addEventListener("scroll", controllNavBar);
    // return () => {
    //     window.removeEventListener("scroll", controllNavBar);
    // };
    // }, [lastScrollY]);

    const navLinks = [
        { href: "#about-me", label: "About me" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
    ];
    
    return(
        <nav className="h-screen">
            <header className={`${showNavBar ? "translate-y-0" : "-translate-y-full"} space-mono-font sticky top-0 z-50 backdrop-blur-xl backdrop-brightness-75 h-10 sm:h-16 flex items-center justify-center transition-transform duration-500 ${isOpen ? "translate-y-0" : ""}`}>
                <div className="flex items-center justify-end w-screen mx-4">
                    <div className="hidden sm:flex items-center justify-center w-full sm:space-x-10">
                        {navLinks.map(({ href, label }) => (
                            <a key={href} href={href} className="hover:text-blue-400">
                                {label}
                            </a>
                        ))}
                        {/* <GooeyNav
                            items={navLinks}
                            animationTime={600}
                            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                            timeVariance={300}
                        /> */}
                    </div>
              
                    <button className={`sm:hidden transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        onClick={toggleMenu}
                    >
                        {isOpen ? <Close /> : <HamburgerMenu />}
                    </button>
                </div>
            </header>
                
            <div className={`sm:hidden bg-stone-900 pb-16 space-mono-font fixed h-full w-screen text-white p-4 backdrop-blur-xl backdrop-brightness-75 z-50 transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <nav className="mx-1 flex flex-col items-center justify-center space-y-10 h-full">
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="block rounded-lg py-3 px-2 hover:bg-gray-900"
                        >
                            {label}
                        </a>
                    ))}
                    {/* <GooeyNav
                        items={navLinks}
                        animationTime={600}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                        timeVariance={300}
                    /> */}
                </nav>
            </div>
        </nav>
    );    
}
                        