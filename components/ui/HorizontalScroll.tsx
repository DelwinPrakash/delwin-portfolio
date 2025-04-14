// // export default function HorizontalScroll(){
// //     return(
// //         <div className="w-screen bg-gray-800 h-16 gap-4 relative flex justify-center">
// //             <div className="w-16 h-16 bg-gray-500">hi</div>
// //             <div className="w-16 h-16 bg-gray-500">hi</div>
// //             <div className="w-16 h-16 bg-gray-500">hi</div>
// //             <div className="w-16 h-16 bg-gray-500">hi</div>
// //             <div className="w-16 h-16 bg-gray-500">hi</div>
// //             <div className="w-16 h-16 bg-gray-500">hi</div>
// //         </div>
// //     );
// // }
"use client"
import React from "react";
import { motion } from "motion/react";

export default function HorizontalScroll(){

    const items = ["React", "Tailwind", "Animation", "JavaScript", "CSS", "UI/UX"];
    const tools = [
        {name: "React", src: "/logo/react.svg"},
        {name: "React", src: "/logo/boostrap.svg"},
        {name: "React", src: "/logo/nodejs.svg"},
        {name: "React", src: "/logo/firebase.svg"},
        {name: "React", src: "/logo/github.svg"},
        {name: "React", src: "/logo/mongodb.svg"},
        {name: "React", src: "/logo/mysql.svg"},
        {name: "React", src: "/logo/css.svg"},
        {name: "React", src: "/logo/git.svg"},
        {name: "React", src: "/logo/html.svg"},
        {name: "React", src: "/logo/npm.svg"},
        {name: "React", src: "/logo/c.svg"},
        {name: "React", src: "/logo/java.svg"},
        {name: "React", src: "/logo/javascript.svg"},
        {name: "React", src: "/logo/python.svg"},
        {name: "React", src: "/logo/typescript.svg"},
    ]
    return (
        // <div className="relative overflow-hidden bg-gray-7  00 flex [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <div className="relative overflow-hidden flex" style={{
                maskImage:
                'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                WebkitMaskImage:
                'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            }}>
            <div className="flex">
                <motion.div
                    className="flex gap-14 flex-none pr-14"
                    animate={{ translateX: "-50%"}}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}>
                        <div className="flex"
                            >
                            {tools.map((item, index) => (
                                <div key={`first-${index}`} className="mx-6 rounded-lg whitespace-nowrap whitespace-nowrap flex items-center justify-center min-w-[64px] pointer-events-auto">
                                    <img src={item.src} alt={item.name} className="h-16 w-16"/>
                                </div>
                            ))}
                        </div>
                        <div className="flex"
                            aria-hidden="true">
                            {tools.map((item, index) => (
                                <div key={`second-${index}`} className="mx-6 rounded-lg whitespace-nowrap whitespace-nowrap flex items-center justify-center min-w-[64px] pointer-events-auto">
                                    <img src={item.src} alt={item.name} className="h-16 w-16"/>
                                </div>
                        ))}
                        </div>
                </motion.div>
            </div>
        </div>
    );
};
