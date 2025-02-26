"use client";

declare global {
    interface Window {
        uetq: any[];
    }
}

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Bot, Sprout, ArrowRight } from "lucide-react";
import { Dela_Gothic_One } from "next/font/google";

const delaGothic = Dela_Gothic_One({
    weight: "400",
    subsets: ["latin"],
});

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
    const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                hamburgerButtonRef.current &&
                !hamburgerButtonRef.current.contains(event.target as Node)
            ) {
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
        <div className="absolute z-10 w-full">
            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-[80] bg-black/90 md:hidden"
                    aria-hidden="true"
                />
            )}

            <div className="m-auto flex max-w-screen-2xl items-center justify-between p-8 text-2xl md:p-12">
                {/* Logo section */}
                <div className="flex items-center">
                    <Link
                        className="group flex items-center space-x-3"
                        href="/"
                    >
                        <div className="relative">
                            <Bot className="h-12 w-12 text-indigo-500 transition-colors group-hover:text-indigo-400" />
                            <Sprout className="absolute -bottom-1.5 -right-1.5 h-6 w-6 text-green-400 transition-colors group-hover:text-green-300" />
                        </div>
                        <span
                            className={`text-2xl font-bold text-white ${delaGothic.className}`}
                        >
                            AgentFarm
                        </span>
                    </Link>
                    {logoSuffix && (
                        <p
                            className={`pl-3 text-xl font-bold text-white ${delaGothic.className}`}
                        >
                            {logoSuffix.path ? (
                                <Link href={logoSuffix.path}>
                                    {logoSuffix.text}
                                </Link>
                            ) : (
                                logoSuffix.text
                            )}
                        </p>
                    )}
                </div>

                {/* Navigation Menu Container */}
                <div className="relative flex items-center space-x-6">
                    {/* Hamburger Button */}
                    <button
                        ref={hamburgerButtonRef}
                        className="absolute right-8 top-8 z-[100] rounded-lg p-3 hover:bg-gray-800/50 md:hidden"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(!isMenuOpen);
                        }}
                        aria-label="Toggle menu"
                    >
                        <div className={cn(
                            "h-0.5 w-8 bg-white transition-all duration-300",
                            isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                        )} />
                        <div className={cn(
                            "my-1.5 h-0.5 w-8 bg-white transition-all duration-300",
                            isMenuOpen ? "opacity-0" : ""
                        )} />
                        <div className={cn(
                            "h-0.5 w-8 bg-white transition-all duration-300",
                            isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                        )} />
                    </button>

                    {/* Navigation Menu */}
                    <div
                        ref={menuRef}
                        className={cn(
                            "fixed right-0 top-0 z-[90] h-screen w-72 transform bg-black/95 p-8 pt-24",
                            "transition-transform duration-300 ease-in-out",
                            "md:static md:block md:h-auto md:w-auto md:transform-none md:bg-transparent md:p-0 md:pt-0 md:shadow-none",
                            isMenuOpen ? "translate-x-0 shadow-lg" : "translate-x-full"
                        )}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <NavigationMenu className="w-full cursor-pointer">
                            <NavigationMenuList className="flex-col items-start gap-6 md:flex-row md:items-center md:gap-2 md:space-x-2">
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            "inline-flex h-12 w-max items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300 focus:bg-gray-800/50 focus:text-indigo-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50",
                                            "w-full justify-start text-gray-300 md:w-auto md:justify-center",
                                            delaGothic.className
                                        )}
                                        href="/how-to-use"
                                    >
                                        How to Use
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            "inline-flex h-12 w-max items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300 focus:bg-gray-800/50 focus:text-indigo-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50",
                                            "w-full justify-start text-gray-300 md:w-auto md:justify-center",
                                            delaGothic.className
                                        )}
                                        href="/blog"
                                    >
                                        Blog
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            "inline-flex h-12 w-max items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300 focus:bg-gray-800/50 focus:text-indigo-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50",
                                            "w-full justify-start text-gray-300 md:w-auto md:justify-center",
                                            delaGothic.className
                                        )}
                                        href="/account"
                                    >
                                        <span>Ex Aide user?</span>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => {
                            window.uetq = window.uetq || [];
                            window.uetq.push("event", "cta_clicked", {});
                            window.open(
                                "https://github.com/apps/agentfarmx/installations/select_target",
                                "_blank"
                            );
                        }}
                        className={`group hidden md:flex items-center space-x-2 md:space-x-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 md:px-8 py-2 md:py-4 text-base md:text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-indigo-500/25 ${delaGothic.className}`}
                    >
                        <span>Install</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}