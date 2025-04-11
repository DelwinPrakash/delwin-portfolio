"use client";

import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles/Particles";
import GradientText from "@/components/GradientText/GradientText";

export default function Home() {
    return (
        <div className="relative w-full h-dvh overflow-hidden bg-transparent">
            {/* <div style={{ width: '100%', height: '100%', position: 'relative' }}> */}
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
            <div className="absolute inset-x-0 top-0 z-50 pointer-events-none">
                <Navbar />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white pointer-events-none">
                <GradientText 
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={15}
                    showBorder={false}
                    className="custom-class">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center p-2">Hey, I'm Delwin Prakash</h1>
                </GradientText>
                <GradientText 
                    colors={["#4079ff", "#40ffaa", "#4079ff", "#40ffaa", "#4079ff"]}
                    animationSpeed={15}
                    showBorder={false}
                    className="custom-class animate-gradient">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mt-2 p-1">FullStack Developer</h1>
                </GradientText>
            </div>
        </div>
    );
}
