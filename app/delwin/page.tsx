"use client";

import Image from "next/image";

import { useState } from "react";

export default function DelwinLinks() {
    const [isCopied, setIsCopied] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("https://delwin.vercel.app");
        setIsCopied(true);
        setShowToast(true);
        setTimeout(() => {
            setIsCopied(false);
            setShowToast(false);
        }, 2000);
    };

    const links = [
        {
            name: "Delwin Prakash",
            url: "https://delwin.vercel.app",
            icon: "/logo/dp.jpg",
        },
        {
            name: "X",
            url: "https://x.com/PrakashDelwin",
            icon: "/logo/x.png",
        },
        {
            name: "Github",
            url: "https://github.com/DelwinPrakash",
            icon: "/logo/github.png",
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/DelwinPrakash",
            icon: "/logo/linkedin.png",
        },
        {
            name: "Email",
            url: "mailto:dev.delwin@gmail.com",
            icon: "/logo/gmail.png",
        },
        {
            name: "Telegram",
            url: "https://t.me/DelwinPrakash",
            icon: "/logo/telegram.png",
        },
    ];

    return (
        <div className="min-h-screen w-full text-white flex flex-col items-center py-16 px-4">
            <div className="w-full max-w-md flex justify-end items-center mb-8 px-4">
                <div
                    onClick={handleCopy}
                    className="w-10 h-10 rounded-full bg-gray-900/70 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
                >
                    {isCopied ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-500"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-center mb-5 space-y-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-800">
                    <Image
                        src="/logo/dp.jpg"
                        alt="Profile"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-1">Delwin</h1>
                </div>
            </div>

            <div className="w-full max-w-md space-y-4">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className="block w-full group"
                    >
                        <div className="w-full bg-gray-900/70 hover:bg-transparent hover:scale-[1.02] transition-all duration-300 rounded-full p-4 flex items-center justify-between border border-transparent hover:border-gray-700">
                            <div className="w-8 h-8 relative flex-shrink-0">
                                <Image
                                    src={link.icon}
                                    alt={link.name}
                                    fill
                                    className="object-contain rounded-md"
                                />
                            </div>
                            <span className="font-medium text-center flex-grow text-gray-100">
                                {link.name}
                            </span>
                            <div className="w-8 flex justify-end opacity-0 group-hover:opacity-50 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="12" cy="5" r="1" />
                                    <circle cx="12" cy="19" r="1" />
                                </svg>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div
                className={`fixed bottom-5 right-5 bg-gray-900/70 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out flex items-center gap-2 z-50 ${showToast ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="font-medium">Link copied to clipboard!</span>
            </div>
        </div>
    );
}
