import React from 'react';

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
        <div className="flex flex-col bg-zinc-950 shadow-md rounded-lg overflow-hidden max-w-s w-full border border-gray-700 h-full">
            <img
                src={imageUrl}
                alt={`${title} preview`}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-300">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {stack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-900 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full"
                            >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex justify-between px-4 py-2 mt-auto text-gray-300 pointer-events-auto">
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
