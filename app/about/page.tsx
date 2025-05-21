"use client"

import Footer from "@/components/Footer";
import GradientText from "@/components/GradientText/GradientText";
import AboutMessage from "@/components/ui/AboutMessage";
import Connect from "@/components/ui/Connect";

export default function About(){
    const message1 = "Hi, I'm Delwin Prakash — a 21-year-old Computer Science undergraduate passionate about creating impactful digital experiences. I specialize in web and mobile app development, blending functionality with clean design to build intuitive and responsive applications. My journey in tech has been driven by curiosity and a constant desire to learn, pushing me to explore new tools, frameworks, and technologies that solve real-world problems.";
    const message2 = "Beyond development, I'm deeply interested in the future of the internet — particularly Web3 and blockchain. As the co-founder of Web3Enclave, a student-led club focused on decentralized technology, I’ve helped organize events, lead discussions, and build a community around innovation and learning. I'm always open to collaborating on exciting projects, sharing knowledge, and growing alongside like-minded builders.";

    return(
        <div className="inset-0 flex mt-16 sm:mt-20 z-10 text-white pointer-events-none p-2 h-full flex-col">
            <div
                className="fixed min-h-full -z-10 overflow-hidden inset-0 bg-[linear-gradient(to_right,rgba(255,0,0,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,0,0.2)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:40px_40px]"
                style={{
                    animation: "gridMove 20s linear infinite",
                    backgroundPosition: "0 0",
                }}
            />
            <style jsx>{`
                @keyframes gridMove {
                    0% {
                        background-position: 0 0;
                    }
                    100% {
                        background-position: 40px 40px;
                    }
                }
            `}</style>
            <div className="w-full space-y-5">
                <GradientText 
                    colors={["#4079ff", "#40ffaa", "#4079ff", "#40ffaa", "#4079ff"]}
                    animationSpeed={15}
                    showBorder={false}>
                    <h1 className="text-3xl font-bold text-center p-1 font-pixelify">ABOUT ME</h1>
                </GradientText>
                <div className="space-y-5 md:flex gap-3">
                    <AboutMessage messageContent={message1}/>
                    <AboutMessage messageContent={message2}/>
                </div>
            </div>
            <Connect/>
            <Footer/>
        </div>
    );
}