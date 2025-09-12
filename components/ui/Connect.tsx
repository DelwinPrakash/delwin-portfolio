import ScrollVelocity from "../ScrollVelocity/ScrollVelocity";
import Image from "next/image";

export default function Connect(){
    return(
        <div className="border-1 rounded-2xl border-red-600 font-pixelify text-xl flex flex-col justify-end mb-4 backdrop-blur-xs">
            <ScrollVelocity
                texts={["<Let's Connect/>", "<Let's Connect/>"]} 
                velocity={100} 
                className="gradient-text custom-scroll-text text-red-500 py-2 text-7xl"
            />
            <div className="flex justify-center gap-6 py-4">
                <a href="mailto:dev.delwin@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/logo/gmail-48.png"
                        alt="Gmail"
                        width={40}
                        height={40}
                        className="hover:scale-110 transition-transform"
                    />
                </a>

                <a href="https://x.com/PrakashDelwin" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://img.icons8.com/color/48/twitterx--v1.png"
                        alt="X"
                        width={40}
                        height={40}
                        className="hover:scale-110 transition-transform"
                    />
                </a>

                <a href="https://github.com/DelwinPrakash" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://img.icons8.com/fluency/48/github.png"
                        alt="Github"
                        width={40}
                        height={40}
                        className="hover:scale-110 transition-transform"
                    />
                </a>

                <a href="https://www.linkedin.com/in/DelwinPrakash" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/logo/linkedin-48.png"
                        alt="LinkedIn"
                        width={40}
                        height={40}
                        className="hover:scale-110 transition-transform"
                    />
                </a>
            </div>
        </div>
    );
}