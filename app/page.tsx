"use client";

import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles/Particles";

export default function Home() {
    return (
        <div className="relative w-full h-dvh overflow-hidden">
            <Navbar/>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Particles
                    particleColors={['#ffffff', '#ff0f11']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white pointer-events-none">
                <h1 className="text-4xl font-bold">Hey, I'm Delwin Prakash<br/>Web Developer</h1>
            </div>
        </div>
    );
}
