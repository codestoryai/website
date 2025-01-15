"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

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
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="absolute w-full z-10">
            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-background/90 md:hidden z-[80]"
                    aria-hidden="true"
                />
            )}

            <div className="m-auto flex max-w-screen-2xl items-center justify-between p-8 text-2xl md:p-12">
                {/* Logo section */}
                <div className="flex items-center">
                    <Link className="flex items-center" href="/">
                        <Image
                            alt="CodeStory Logo"
                            height={32}
                            priority
                            src="/aide-white.svg"
                            width={48}
                        />
                        <p className="pl-2 font-bold text-foreground">Aide</p>
                    </Link>
                    {logoSuffix && (
                        <p className="pl-2 font-bold text-foreground">
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
                        className="md:hidden fixed top-8 right-8 z-[100] p-2 hover:bg-accent/10 rounded-lg"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <div className={`w-6 h-0.5 bg-foreground my-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <div className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </button>

                    {/* Navigation Menu */}
                    <div
                        ref={menuRef}
                        className={`
                            md:static md:block
                            fixed top-0 right-0 h-screen w-64 bg-background p-6 pt-20
                            transform transition-transform duration-300 ease-in-out z-[90]
                            ${isMenuOpen ? 'translate-x-0 shadow-lg' : 'translate-x-full'}
                            md:transform-none md:h-auto md:w-auto md:bg-transparent md:p-0 md:pt-0 md:shadow-none
                        `}
                    >
                        <NavigationMenu className="cursor-pointer w-full">
                            <NavigationMenuList className="md:flex-row flex-col items-start gap-4 md:gap-1 md:items-center md:space-x-1">

                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "w-full md:w-auto justify-start md:justify-center"
                                        )}
                                        href="/blog"
                                    >
                                        Blog
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "w-full md:w-auto justify-start md:justify-center"
                                        )}
                                        href="/pricing"
                                    >
                                        Pricing
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "w-full md:w-auto justify-start md:justify-center"
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
                                            navigationMenuTriggerStyle(),
                                            "w-full md:w-auto justify-start md:justify-center"
                                        )}
                                        href="https://github.com/codestoryai/binaries/releases"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Releases
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem className="hidden md:inline-flex">
                                    <NavigationMenuTrigger>
                                        About
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="to-aceent/20 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent/50 p-2 no-underline outline-none focus:shadow-md"
                                                        href="https://codestory.ai"
                                                        target="_blank"
                                                    >
                                                        <div>
                                                            <Image
                                                                alt="CodeStory Logo"
                                                                height={72}
                                                                priority
                                                                src="/cs-logomark.svg"
                                                                width={72}
                                                            />
                                                            <div className="m-2 text-xl font-bold">
                                                                CodeStory
                                                            </div>
                                                            <p className="m-2 mt-0 text-base leading-tight text-muted-foreground">
                                                                Get to know the
                                                                company behind Aide.
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <Link
                                                href="https://codestory.ai"
                                                target="_blank"
                                            >
                                                <ListItem title="Team">
                                                    Aide is built by a team of four
                                                    based in London, United Kingdom.
                                                </ListItem>
                                            </Link>
                                            <Link
                                                href="https://www.workatastartup.com/companies/codestory"
                                                target="_blank"
                                            >
                                                <ListItem title="Careers">
                                                    Work with us to re-imagine
                                                    software engineering for the
                                                    coming decade.
                                                </ListItem>
                                            </Link>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "w-full md:w-auto justify-start md:justify-center"
                                        )}
                                        href="/account"
                                    >
                                        <span className="font-bold">Account</span>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "w-full md:w-auto justify-start md:justify-center"
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
