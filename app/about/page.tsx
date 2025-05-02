"use client"

import Footer from "@/components/Footer";
import GradientText from "@/components/GradientText/GradientText";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import AboutMessage from "@/components/ui/AboutMessage";

export default function About(){
    const message1 = "Hi, I'm Delwin, a dedicated and detail-oriented web developer with a passion for creating modern, responsive, and user-friendly web applications.";
    const message2 = "I'm pursuing Computer Science and Engineering at Government Engineering College Wayanad, while expanding my expertise in full-stack development and exploring advanced concepts in frontend architecture and user experience.";

    return(
        <div className="inset-0 flex mt-16 sm:mt-20 z-10 text-white pointer-events-none p-2 h-full flex-col">
            <div
                className="fixed min-h-full -z-10 overflow-hidden inset-0 bg-[linear-gradient(to_right,rgba(255,0,0,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,0,0.2)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:40px_40px]"
                // className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,255,0.4)_0.5px,_transparent_1px)] bg-[size:24px_24px] md:bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.4)_1px,_transparent_2px)] md:bg-[size:24px_24px]"
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
                    {/* <p className="text-lg leading-relaxed text-gray-400">
                        Hi, I'm Delwin, a dedicated and detail-oriented web developer with a passion for creating modern, responsive, and user-friendly web applications.
                    </p>

                    <div className="space-y-3">
                        <p className="text-lg leading-relaxed text-gray-400">
                            I'm pursuing Computer Science and Engineering at Government Engineering College Wayanad, while expanding my expertise in full-stack development and exploring advanced concepts in frontend architecture and user experience.
                        </p>
                    </div> */}
                </div>
                {/* <div>
                    <HorizontalScroll/>
                </div> */}
                {/* <AboutMessage/> */}
            </div>
            <Footer/>
        </div>
    );
}