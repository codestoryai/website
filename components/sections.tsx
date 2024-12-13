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
import { AchievementCard } from "./ui/goat-badge";

interface User {
    id?: string;
    name?: string;
}

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black"
        >
            <div className="relative isolate overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                    <div className="mx-auto max-w-2xl lg:text-center mb-16">
                        <FloatingElement delay={0.3}>
                            <h2 className="text-base font-semibold leading-7 text-goat-accent">
                                Proven Performance
                            </h2>
                        </FloatingElement>
                        <motion.p
                            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <GradientText>
                                The GOAT of AI Coding Assistants
                            </GradientText>
                        </motion.p>
                        <motion.p
                            className="mt-6 text-lg leading-8 text-zinc-300"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Our state-of-the-art model achieves unprecedented success on real-world
                            software engineering tasks, setting new standards in AI assistance.
                        </motion.p>
                    </div>

                    <motion.div
                        className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <AchievementCard
                                emoji="🏆"
                                title="62% Success Rate"
                                description="Leading performance on SWE-Bench, demonstrating superior capability in real-world software engineering tasks."
                            />
                            <AchievementCard
                                emoji="⚡"
                                title="Lightning Fast"
                                description="3.5x faster development with AI-powered code completion and intelligent suggestions."
                            />
                            <AchievementCard
                                emoji="🎯"
                                title="Precision Engineering"
                                description="Built on computational scaling principles for maximum accuracy and reliability."
                            />
                        </dl>
                    </motion.div>
                </div>
            </div>

            {/* PLACEHOLDER: VSCode integration section */}
        </motion.div>
    );
}
