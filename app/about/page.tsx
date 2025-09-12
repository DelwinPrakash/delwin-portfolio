"use client"

import Footer from "@/components/Footer";
import Particles from "@/components/Particles/Particles";
import AboutMessage from "@/components/ui/AboutMessage";
import Connect from "@/components/ui/Connect";

export default function About(){
    const message1 = "Hi, I'm Delwin Prakash — a 21-year-old Computer Science undergraduate passionate about creating impactful digital experiences. I specialize in web and mobile app development, blending functionality with clean design to build intuitive and responsive applications. My journey in tech has been driven by curiosity and a constant desire to learn, pushing me to explore new tools, frameworks, and technologies that solve real-world problems.";
    const message2 = "Beyond development, I'm deeply interested in the future of the internet — particularly Web3 and blockchain. As the co-founder of Web3Enclave, a student-led club focused on decentralized technology, I’ve helped organize events, lead discussions, and build a community around innovation and learning. I'm always open to collaborating on exciting projects, sharing knowledge, and growing alongside like-minded builders.";

    return(
        <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <Particles
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
            <div className="inset-0 flex flex-col items-center justify-center z-10 text-white mt-16 sm:mt-20 px-2">
                <div className="w-full space-y-5">
                <div className="space-y-5 md:flex gap-3 px-3">
                    <AboutMessage messageContent={message1}/>
                    <AboutMessage messageContent={message2}/>
                </div>
            </div>
            <div className="w-full px-3">
                <Connect/>
                <Footer/>
            </div>
            </div>
        </div >
    );
}