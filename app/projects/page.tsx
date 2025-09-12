"use client"

import Footer from "@/components/Footer";
import Particles from "@/components/Particles/Particles";
import Card from "@/components/ui/Card";

export default function Projects(){
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
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4 px-3">
                    <Card
                        imageUrl="/thumbnail/chatapp.png"
                        title="Journal.sol"
                        stack={['Solana', 'Anchor', 'NextJs', 'Wallet Adapter', 'Tailwind']}
                        githubUrl="https://github.com/delwinprakash/journal.sol"
                        liveUrl="https://journal-sol-one.vercel.app"
                        isLive={true}
                    />
                    <Card
                        imageUrl="/thumbnail/chatapp.png"
                        title="ChatApp"
                        stack={['React Native', 'Supabase']}
                        githubUrl="https://github.com/delwinprakash/chatapp"
                        liveUrl="https://drive.google.com/drive/folders/1SDkq3SCXQDbxpLhrU2QdRqZ3IKfrgzNK?usp=sharing"
                        isLive={true}
                    />
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
                <div className="w-full px-3">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}