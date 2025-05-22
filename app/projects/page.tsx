"use client"

import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";

export default function About(){
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full place-items-center mb-4">
                <Card
                    imageUrl="/thumbnail/portfolio.png"
                    title="Portfolio Website"
                    stack={['NextJS', 'Typescript', 'Tailwind']}
                    githubUrl="https://github.com/delwinprakash/portfolio"
                    liveUrl="https://delwin.vercel.app/"
                    isLive={true}
                    />
                <Card
                    imageUrl="/thumbnail/ecleanse.png"
                    title="E-Cleanse"
                    stack={['React', 'NodeJS', 'ExpressJS', 'MongoDB', 'Tailwind']}
                    githubUrl="https://github.com/DelwinPrakash/E-Cleanse"
                    liveUrl=""
                    isLive={false}
                    />
                <Card
                    imageUrl="/thumbnail/nativeTodo.png"
                    title="Todo App"
                    stack={['React Native', 'Expo', 'Tailwind']}
                    githubUrl="https://github.com/DelwinPrakash/react-native-todo"
                    liveUrl=""
                    isLive={false}
                />
            </div>

            <Footer/>
        </div>
    );
}