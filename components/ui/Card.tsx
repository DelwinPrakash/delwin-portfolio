import React from 'react';
import Image from 'next/image';

type Card = {
    imageUrl: string;
    title: string;
    stack: string[];
    githubUrl: string;
    liveUrl: string;
    isLive: boolean;
};

const Card: React.FC<Card> = ({ imageUrl, title, stack, githubUrl, liveUrl, isLive }) => {
    return (
        <div className="flex flex-col backdrop-blur-xs shadow-md rounded-lg overflow-hidden max-w-s border border-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="relative h-32">
                <Image
                    src={imageUrl}
                    alt={`${title} preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
            </div>
            <div className="p-3">
                <h3 className="text-xl font-semibold mb-2 text-gray-300">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {stack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-900 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                            >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex justify-between px-4 py-1 mt-auto text-gray-300">
                <a href={githubUrl} target="_blank">
                    <p className="cursor-pointer hover:underline text-zinc-400">Code</p>
                </a>
                {isLive && 
                    <a href={liveUrl} target="_blank">
                        <p className="cursor-pointer hover:underline text-blue-500">Live</p>
                    </a>
                }
            </div>
        </div>
    );
};

export default Card;
