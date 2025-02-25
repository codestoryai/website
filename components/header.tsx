"use client";

declare global {
    interface Window {
        uetq: any[];
    }
}

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Bot, Sprout, ArrowRight } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
    logoSuffix?: {
        path?: string;
        text: string;
    };
}

export default function Header({ logoSuffix }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="relative">
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black/90 md:hidden" />
                )}
                
                <div className="relative z-50 m-auto flex max-w-screen-2xl items-center justify-between p-8 text-2xl md:p-12">
                    <Link className="group flex items-center space-x-3" href="/">
                        <div className="relative">
                            <Bot className="h-12 w-12 text-indigo-500 transition-colors group-hover:text-indigo-400" />
                            <Sprout className="absolute -bottom-1.5 -right-1.5 h-6 w-6 text-green-400 transition-colors group-hover:text-green-300" />
                        </div>
                        <span className="text-2xl font-bold text-white">AgentFarm</span>
                        {logoSuffix && (
                            <span className="pl-3 text-xl font-bold text-white">
                                {logoSuffix.path ? (
                                    <Link href={logoSuffix.path}>{logoSuffix.text}</Link>
                                ) : (
                                    logoSuffix.text
                                )}
                            </span>
                        )}
                    </Link>

                    <div className="flex items-center space-x-4">
                        <button
                            className="relative z-50 rounded-lg p-3 hover:bg-gray-800/50 md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                            <div className={`my-1.5 h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
                            <div className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
                        </button>

                        <div
                            ref={menuRef}
                            className={cn(
                                "fixed right-0 top-0 h-screen w-72 bg-black/95 transition-transform md:relative md:right-auto md:top-auto md:h-auto md:w-auto md:translate-x-0 md:bg-transparent",
                                isMenuOpen ? "translate-x-0" : "translate-x-full",
                                "z-40 p-8 pt-24 md:p-0 md:pt-0"
                            )}
                        >
                            <NavigationMenu>
                                <NavigationMenuList className="flex-col items-start gap-6 md:flex-row md:items-center md:gap-2">
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={cn(
                                                "inline-flex h-10 w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300",
                                                "text-gray-300 md:w-auto md:justify-center"
                                            )}
                                            href="/how-to-use"
                                        >
                                            How to Use
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={cn(
                                                "inline-flex h-10 w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300",
                                                "text-gray-300 md:w-auto md:justify-center"
                                            )}
                                            href="/blog"
                                        >
                                            Blog
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink
                                            className={cn(
                                                "inline-flex h-10 w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300",
                                                "text-gray-300 md:w-auto md:justify-center"
                                            )}
                                            href="/account"
                                        >
                                            Ex Aide user?
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        <button
                            onClick={() => {
                                window.uetq = window.uetq || [];
                                window.uetq.push('event', 'cta_clicked', {});
                                window.open("https://calendar.app.google/CWtwXjZF1s8rrkui6", "_blank");
                            }}
                            className="group hidden md:inline-flex items-center space-x-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-indigo-500 hover:to-indigo-400"
                        >
                            <span>Schedule a Demo</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
                
                {isMenuOpen && (
                    <button
                        onClick={() => {
                            window.uetq = window.uetq || [];
                            window.uetq.push('event', 'cta_clicked', {});
                            window.open("https://calendar.app.google/CWtwXjZF1s8rrkui6", "_blank");
                        }}
                        className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 flex md:hidden items-center space-x-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
                    >
                        <span>Schedule a Demo</span>
                        <ArrowRight className="h-4 w-4" />
                    </button>
                )}
            </div>
        </header>
    );
}