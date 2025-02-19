"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
        )}>
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/cs-logomark.svg" alt="Logo" width={32} height={32} />
                    <span className="text-white font-semibold text-xl">AgentFarm</span>
                </Link>
                
                <div className="flex items-center space-x-8">
                    <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                        Blog
                    </Link>
                    <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Link 
                        href="https://calendar.app.google/CWtwXjZF1s8rrkui6" 
                        target="_blank"
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        Schedule Demo
                    </Link>
                </div>
            </div>
        </nav>
    );
};