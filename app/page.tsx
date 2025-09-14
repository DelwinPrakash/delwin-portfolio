"use client";

import Particles from "@/components/Particles/Particles";
import { useEffect, useState } from "react";

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
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, [stack.length])

    return (
        <div className="relative w-full h-dvh overflow-hidden bg-transparent">
            <div className="absolute inset-0">
                <Particles
                    // particleColors={['#ffffff', '#ff0f11']}
                    particleColors={['#40ffaa', '#4079ff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white pointer-events-none">

                <h1 className="gradient-text text-3xl sm:text-5xl lg:text-6xl font-bold text-center p-2">Hey, I&apos;m Delwin Prakash</h1>
                
                <h1 className={`gradient-text text-3xl sm:text-5xl lg:text-6xl font-bold text-center mt-2 p-1 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                    {`${stack[index]} Developer`}
                </h1>
            </div>
        </div >
    );
}
