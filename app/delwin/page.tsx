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
                            <path
                                d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                            />
                            <path
                                opacity="0.5"
                                d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                            />
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
                className={`fixed top-15 right-5 bg-gray-900/90 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out flex items-center gap-2 ${showToast ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
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
