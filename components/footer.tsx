"use client";

import CSLogo from "@/public/cs-logomark.svg";
import TeamPhoto from "@/public/team.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Card, CardContent } from "./ui/card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Footer() {
    const pathname = usePathname();
    const isBlogPost = pathname.startsWith("/blog/");

    return (
        <footer className="absolute bottom-0 left-0 right-0 bg-[#0F1729] p-8 text-sm md:p-12">
            <div className="m-auto flex max-w-screen-xl flex-col gap-5">
                <div className="grid justify-center gap-8 md:grid-cols-3 md:justify-normal md:text-lg">
                    <div className="flex justify-center gap-8 md:justify-start">
                        <Link
                            className="flex items-start gap-2 md:mr-auto"
                            href="https://codestory.ai"
                            target="_blank"
                        >
                            <Image
                                alt="CodeStory Logo"
                                className="-mt-1.5"
                                height={48}
                                src={CSLogo}
                                width={48}
                            />
                            <p className="text-center text-2xl font-semibold text-white">
                                CodeStory
                            </p>
                        </Link>
                    </div>
                    <div className="flex translate-y-[3px] justify-center gap-8">
                        <Link
                            className="font-medium text-gray-300 hover:text-indigo-400"
                            href="/blog"
                        >
                            Blog
                        </Link>
                    </div>
                    <div className="flex items-center justify-center gap-8 md:ml-auto md:justify-start">
                        <Link
                            className="text-gray-300 hover:text-indigo-400"
                            href="https://twitter.com/aide_dev"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Image
                                alt="X (previously Twitter) Link"
                                className="invert"
                                height={20}
                                priority
                                src="/x-mark.svg"
                                width={20}
                            />
                        </Link>
                        <Link
                            className="text-gray-300 hover:text-indigo-400"
                            href="https://discord.gg/mtgrhXM5Xf"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Image
                                alt="Discord Link"
                                className="invert"
                                height={20}
                                priority
                                src="/discord-mark.svg"
                                width={20}
                            />
                        </Link>
                        <Link
                            className="text-gray-300 hover:text-indigo-400"
                            href="https://www.linkedin.com/company/codestory-ai/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Image
                                alt="Linkedin Link"
                                className="invert"
                                height={20}
                                priority
                                src="/linkedin-logo.svg"
                                width={20}
                            />
                        </Link>
                    </div>
                </div>
                <div className="h-px w-full bg-gray-700/50" />
                <span className="self-center font-normal text-gray-400">
                    © Codestory {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
}
