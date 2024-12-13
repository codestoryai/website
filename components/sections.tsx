"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Kbd } from "@/components/ui/kbd";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import AideLogo from "@/public/aide-white.svg";
import ChatSS from "@/public/screenshots/chat.png";
import CopilotSS from "@/public/screenshots/copilot.png";
import ModelSelectionSS from "@/public/screenshots/modelselection.png";
import OfflineSS from "@/public/screenshots/offline.png";
import VSCodeLogo from "@/public/vscode.svg";
import {
    ArrowRight,
    ArrowRightFromLine,
    Braces,
    LockKeyhole,
    MessagesSquare,
} from "lucide-react";
import Image from "next/image";
import { FloatingElement, GradientText } from "./ui/floating-element";

const lspSupportedLanguages = [
    {
        logo: "/languages/ts-logo-128.svg",
        size: 48,
        title: "TypeScript",
    },
    {
        logo: "/languages/javascript-logo.png",
        size: 48,
        title: "JavaScript",
    },
    {
        logo: "/languages/python-logo.svg",
        size: 36,
        title: "Python",
    },
    {
        logo: "/languages/rust-logo.svg",
        size: 72,
        title: "Rust",
    },
    {
        logo: "/languages/go-logo.svg",
        size: 72,
        title: "Golang",
    },
];

interface SectionProps {
    user: User | null;
}

export default function Sections({ user }: SectionProps) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="overflow-hidden border-t border-t-muted bg-gradient-to-br from-goat-dark via-goat-primary/10 to-transparent p-8 pt-24 md:p-12">
                <div className="m-auto max-w-screen-xl">
                    <div>
                        <h4 className="flex text-lg font-bold text-goat-accent">
                            <ArrowRightFromLine className="mr-2" />
                            Code Completion
                        </h4>
                        <h2 className="mb-12 mt-4 text-4xl font-black md:mt-8 md:text-6xl">
                            <GradientText>
                                <FloatingElement delay={0.2}>AI-powered code suggestions, built-in.</FloatingElement>
                            </GradientText>
                        </h2>
                    </div>
                    <div className="grid grid-cols-6 gap-8 md:gap-16">
                        <div className="col-span-full md:col-span-2">
                            <p className="text-xl font-light md:text-3xl">
                                Leading the industry with <span className="text-goat-accent font-bold">62% success rate</span> on
                                SWE-Bench. Our code completions don't just look at your
                                active files - they leverage the full power of the Language Server to navigate and analyze
                                code across your entire project. Supporting{" "}
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span className="underline decoration-dotted decoration-2 underline-offset-8">
                                            a growing list of languages.
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <Card className="w-[380px] border-none shadow-none">
                                            <CardHeader>
                                                <CardTitle>
                                                    Languages with LSP
                                                    integration
                                                </CardTitle>
                                                <CardDescription>
                                                    New languages are being
                                                    added every week.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="grid grid-cols-7 place-items-center gap-1">
                                                {lspSupportedLanguages.map(
                                                    (language, index) => (
                                                        <Image
                                                            alt={`${language.title} Logo`}
                                                            height={
                                                                language.size
                                                            }
                                                            key={index}
                                                            src={language.logo}
                                                            width={
                                                                language.size
                                                            }
                                                        />
                                                    )
                                                )}
                                            </CardContent>
                                        </Card>
                                    </TooltipContent>
                                </Tooltip>
                                <br />
                                <br />
                                <Kbd>tab</Kbd> can be your best friend.
                            </p>
                        </div>
                        <div className="col-span-full overflow-visible md:col-span-4">
                            <div className="origin-top-left transform md:scale-125">
                                <Image
                                    alt="Inline completion"
                                    className="max-w-screen-md rounded-lg border border-muted shadow-xl"
                                    priority
                                    src={CopilotSS}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden border-t border-t-muted bg-gradient-to-br from-goat-dark via-goat-secondary/10 to-transparent p-8 pt-24 md:p-12">
                <div className="m-auto max-w-screen-xl">
                    <div>
                        <h4 className="flex text-lg font-bold text-goat-accent">
                            <MessagesSquare className="mr-2" />
                            Chat with SOTA
                        </h4>
                        <h2 className="mb-12 mt-4 text-4xl font-black md:mt-8 md:text-6xl bg-gradient-to-r from-goat-primary to-goat-accent bg-clip-text text-transparent">
                            <FloatingElement delay={0.4}>62% Success Rate on SWE-Bench!</FloatingElement>
                        </h2>
                    </div>
                    <div className="grid grid-cols-6 gap-8 md:gap-16">
                        <div className="col-span-full overflow-visible md:col-span-4">
                            <div className="origin-top-right transform md:scale-125">
                                <Image
                                    alt="Chat"
                                    className="max-w-screen-md rounded-lg border border-muted shadow-xl"
                                    priority
                                    src={ChatSS}
                                />
                            </div>
                        </div>
                        <div className="col-span-full md:col-span-2">
                            <p className="text-xl font-light md:text-3xl">
                                State-of-the-Art in AI Programming. Chat with the GOAT using <Kbd>⌘ + ctrl + I</Kbd>,
                                or just <Kbd>⌘ + I</Kbd> to start inline. Use <Kbd>#</Kbd> to reference files or code
                                symbols, or highlight code and press <Kbd>⌘ + L</Kbd>.
                                <br />
                                <br />
                                Powered by Sonnet 3.5 and test-time scaling - because scale beats everything!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden border-t border-t-muted bg-gradient-to-br from-goat-dark via-goat-primary/10 to-transparent p-8 pt-24 md:p-12">
                <div className="m-auto max-w-screen-xl">
                    <div>
                        <h4 className="flex text-lg font-bold text-goat-accent">
                            <LockKeyhole className="mr-2" />
                            Privacy First
                        </h4>
                        <h2 className="mb-12 mt-4 text-4xl font-black md:mt-8 md:text-6xl bg-gradient-to-r from-goat-primary to-goat-accent bg-clip-text text-transparent">
                            <FloatingElement delay={0.6}>The GOAT of Privacy. Your code stays local.</FloatingElement>
                        </h2>
                    </div>
                    <div className="grid grid-cols-6 gap-8 md:gap-16">
                        <div className="col-span-full md:col-span-2">
                            <p className="text-xl font-light md:text-3xl">
                                The GOAT doesn't need your data. Aide runs entirely on
                                your machine — no servers between the IDE and our
                                state-of-the-art language models. Want enterprise-grade security?
                                We'll deploy on your infrastructure.
                                <br />
                                <br />
                                Your code stays as private as a GOAT's mountain cave. 🐐
                            </p>
                        </div>
                        <div className="col-span-full overflow-visible md:col-span-4">
                            <div className="origin-top-left transform md:scale-125">
                                <Image
                                    alt="Offline functionality"
                                    className="max-w-screen-md rounded-lg border border-muted shadow-xl"
                                    priority
                                    src={OfflineSS}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden border-t border-t-muted bg-gradient-to-br from-goat-dark to-goat-primary/20 p-8 pt-24 text-background md:p-12">
                <div className="m-auto max-w-screen-xl">
                    <div>
                        <h4 className="flex text-lg font-bold text-goat-accent">
                            <Braces className="mr-2" />
                            SOTA Achievement
                        </h4>
                        <h2 className="mb-12 mt-4 text-4xl font-black md:mt-8 md:text-6xl bg-gradient-to-r from-goat-primary to-goat-accent bg-clip-text text-transparent">
                            <FloatingElement delay={0.8}>State of the Art in AI Programming.</FloatingElement>
                        </h2>
                    </div>
                    <div className="grid grid-cols-6 gap-8 md:gap-16">
                        <div className="col-span-full overflow-visible md:col-span-4">
                            <div className="origin-top-right transform md:scale-125">
                                <Image
                                    alt="Model configuration support"
                                    className="max-w-screen-md rounded-lg border border-muted shadow-xl"
                                    priority
                                    src={ModelSelectionSS}
                                />
                            </div>
                        </div>
                        <div className="col-span-full md:col-span-2">
                            <p className="text-xl font-light md:text-3xl">
                                Choose your infrastructure and model. Add your API key.
                                Start coding with the GOAT. All queries are stored in a
                                local SQLite DB, and our{" "}
                                <a
                                    href="https://github.com/codestoryai/prompts"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <span className="cursor-pointer underline decoration-goat-accent underline-offset-8">
                                        prompts are Open Source
                                    </span>
                                </a>
                                .
                                <br />
                                <br />
                                Join us in pushing the boundaries of what's possible with
                                computational scaling and AI programming.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-t-muted bg-gradient-to-br from-goat-dark via-goat-primary/10 to-transparent bg-noise px-8 py-8 md:px-12 md:py-12">
                <div className="m-auto flex max-w-screen-xl flex-col items-center justify-center">
                    <p className="text-center text-3xl font-black bg-gradient-to-r from-goat-primary to-goat-accent bg-clip-text text-transparent">
                        Built on top of{" "}
                        <a
                            href="https://code.visualstudio.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="pl-1 underline underline-offset-4">
                                VSCode
                            </span>
                        </a>
                        .
                    </p>
                    <div className="flex items-center py-8">
                        <Image
                            alt="VSCode Logo"
                            className="mr-4"
                            height={48}
                            src={VSCodeLogo}
                            width={48}
                        />
                        <ArrowRight />
                        <Image
                            alt="Aide Logo"
                            className="ml-3"
                            height={72}
                            src={AideLogo}
                            width={72}
                        />
                    </div>
                    <p className="text-center text-xl text-zinc-200">
                        All your VSCode settings, keybindings and extensions{" "}
                        <span className="italic text-goat-accent">just work!</span>
                        <br />
                        Look for the &lsquo;Import Settings and keybindings from
                        VSCode&rsquo; option in settings to get started with the GOAT.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
