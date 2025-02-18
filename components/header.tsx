"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Bot, Sprout } from "lucide-react";

import {
    ListItem,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
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
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
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
                        className="group flex items-center space-x-2"
                        href="/"
                    >
                        <div className="relative">
                            <Bot className="h-8 w-8 text-indigo-500 transition-colors group-hover:text-indigo-400" />
                            <Sprout className="absolute -bottom-1 -right-1 h-4 w-4 text-green-400 transition-colors group-hover:text-green-300" />
                        </div>
                        <span className="text-xl font-bold text-white">
                            AgentFarm
                        </span>
                    </Link>
                    {logoSuffix && (
                        <p className="pl-2 font-bold text-white">
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
                <div className="relative">
                    {/* Hamburger Button */}
                    <button
                        className="fixed right-8 top-8 z-[100] rounded-lg p-2 hover:bg-gray-800/50 md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div
                            className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
                        />
                        <div
                            className={`my-1.5 h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""}`}
                        />
                        <div
                            className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
                        />
                    </button>

                    {/* Navigation Menu */}
                    <div
                        ref={menuRef}
                        className={`fixed right-0 top-0 z-[90] h-screen w-64 transform bg-black/95 p-6 pt-20 transition-transform duration-300 ease-in-out md:static md:block ${isMenuOpen ? "translate-x-0 shadow-lg" : "translate-x-full"} md:h-auto md:w-auto md:transform-none md:bg-transparent md:p-0 md:pt-0 md:shadow-none`}
                    >
                        <NavigationMenu className="w-full cursor-pointer">
                            <NavigationMenuList className="flex-col items-start gap-4 md:flex-row md:items-center md:gap-1 md:space-x-1">
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            "inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300 focus:bg-gray-800/50 focus:text-indigo-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50",
                                            "w-full justify-start text-gray-300 md:w-auto md:justify-center"
                                        )}
                                        href="/blog"
                                    >
                                        Blog
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            "inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300 focus:bg-gray-800/50 focus:text-indigo-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50",
                                            "w-full justify-start text-gray-300 md:w-auto md:justify-center"
                                        )}
                                        href="/pricing"
                                    >
                                        Pricing
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            "inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300 focus:bg-gray-800/50 focus:text-indigo-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50",
                                            "w-full justify-start text-gray-300 md:w-auto md:justify-center"
                                        )}
                                        href="https://docs.aide.dev"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Docs
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem className="hidden md:inline-flex">
                                    <NavigationMenuLink
                                        className={cn(
                                            "inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300 focus:bg-gray-800/50 focus:text-indigo-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50",
                                            "w-full justify-start text-gray-300 md:w-auto md:justify-center"
                                        )}
                                        href="https://github.com/codestoryai/binaries/releases"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Releases
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem className="hidden md:inline-flex">
                                    <NavigationMenuTrigger className="text-gray-300 hover:bg-gray-800/50 hover:text-indigo-300 data-[state=open]:bg-gray-800/50 data-[state=open]:text-indigo-300">
                                        About
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 bg-gray-900/95 p-6 backdrop-blur-sm md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-indigo-500/20 to-indigo-500/5 p-6 no-underline outline-none focus:shadow-md"
                                                        href="https://codestory.ai"
                                                        target="_blank"
                                                    >
                                                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                            AgentFarm
                                                        </div>
                                                        <p className="text-sm leading-tight text-gray-400">
                                                            Spawn self-managing
                                                            AI Agents on your
                                                            codebase
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <Link
                                                href="https://codestory.ai"
                                                target="_blank"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800/50"
                                            >
                                                <div className="text-lg font-medium text-white">
                                                    Team
                                                </div>
                                                <p className="text-sm text-gray-400">
                                                    Built by a team of four
                                                    based in London, United
                                                    Kingdom.
                                                </p>
                                            </Link>
                                            <Link
                                                href="https://www.workatastartup.com/companies/codestory"
                                                target="_blank"
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800/50"
                                            >
                                                <div className="text-lg font-medium text-white">
                                                    Careers
                                                </div>
                                                <p className="text-sm text-gray-400">
                                                    Work with us to re-imagine
                                                    software engineering for the
                                                    coming decade.
                                                </p>
                                            </Link>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            "inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300 focus:bg-gray-800/50 focus:text-indigo-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50",
                                            "w-full justify-start text-gray-300 md:w-auto md:justify-center"
                                        )}
                                        href="/account"
                                    >
                                        <span className="font-bold">
                                            Account
                                        </span>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            "inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800/50 hover:text-indigo-300 focus:bg-gray-800/50 focus:text-indigo-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-800/50 data-[state=open]:bg-gray-800/50",
                                            "w-full justify-start text-gray-300 md:w-auto md:justify-center"
                                        )}
                                        href="https://discord.gg/mtgrhXM5Xf"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <Image
                                            alt="Discord Link"
                                            height={20}
                                            priority
                                            src="/discord-mark.svg"
                                            width={20}
                                        />
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </div>
    );
}
