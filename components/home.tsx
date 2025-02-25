"use client";

declare global {
    interface Window {
        uetq: any[];
    }
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Downloads } from "@/lib/types";
import { DeviceDetails } from "@/lib/ua";
import {
    Bot,
    GitPullRequest,
    Clock,
    ArrowRight,
    Brain,
    Code,
    Zap,
    CheckCircle2,
    Sprout,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Dela_Gothic_One } from "next/font/google";

const delaGothic = Dela_Gothic_One({
    weight: "400",
    subsets: ["latin"],
});

interface ComponentProps {
    deviceDetails: DeviceDetails | undefined;
    latestRelease: Downloads;
}

interface FeatureDetail {
    icon: React.ReactNode;
    text: string;
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    details: FeatureDetail[];
}

function FeatureCard({
    icon,
    title,
    description,
    gradient,
    details,
}: FeatureCardProps) {
    return (
        <div className="relative">
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:ring-1 hover:ring-indigo-500/20">
                <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20 transition-opacity duration-500 group-hover:opacity-30`}
                ></div>
                <div className="relative space-y-6">
                    <div className="text-[#ff6bfd] transition-all duration-300 [text-shadow:_0_0_10px_#ff6bfd] group-hover:scale-110">
                        {icon}
                    </div>
                    <div className="space-y-4">
                        <h3
                            className={`bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-xl font-semibold text-transparent transition-all duration-300 group-hover:from-indigo-300 group-hover:to-cyan-300 ${delaGothic.className}`}
                        >
                            {title}
                        </h3>
                        <p
                            className={`${delaGothic.className} text-gray-300 transition-colors duration-300 group-hover:text-gray-200`}
                        >
                            {description}
                        </p>
                    </div>
                    <div className="space-y-4 border-t border-gray-700/50 pt-4">
                        {details.map((detail, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-3 text-gray-200"
                            >
                                <div className="mt-1 flex-shrink-0 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                                    {detail.icon}
                                </div>
                                <span
                                    className={`${delaGothic.className} transition-colors duration-300 group-hover:text-white`}
                                >
                                    {detail.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Component({
    deviceDetails,
    latestRelease,
}: ComponentProps) {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#0ea5e9)] opacity-20"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="animate-blob absolute -left-4 -top-4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl filter"></div>
                    <div className="animate-blob animation-delay-2000 absolute -right-4 top-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl filter"></div>
                </div>
            </div>

            {/* Main content */}
            <div className="container relative mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center justify-center space-y-24 py-24">
                    {/* Hero Section */}
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="space-y-8">
                            <h1
                                className={`text-6xl font-bold leading-tight text-white ${delaGothic.className}`}
                            >
                                PARALLEL AGENTS <br />
                                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                                    Better than D*vin.
                                </span>
                            </h1>
                            <p
                                className={`text-2xl font-black text-[#ff6bfd] [text-shadow:_0_0_10px_#ff6bfd] ${delaGothic.className}`}
                            >
                                SWE-Bench #1 Agent on your Codebase.
                            </p>
                            <div className="background-green-400 flex items-center justify-center space-x-6">
                                <button
                                    onClick={() => {
                                        window.uetq = window.uetq || [];
                                        window.uetq.push(
                                            "event",
                                            "cta_clicked",
                                            {}
                                        );
                                        window.open(
                                            "https://github.com/apps/agentfarmx/installations/select_target",
                                            "_blank"
                                        );
                                    }}
                                    className={`group flex items-center space-x-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-indigo-500/25 ${delaGothic.className}`}
                                >
                                    <div className="flex items-center">
                                        <span>Install</span>
                                    </div>
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </button>
                                <div className="border-l border-gray-700 pl-6 text-sm text-gray-400">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={`text-2xl font-bold text-white ${delaGothic.className}`}
                                        >
                                            <span className="text-gray-500 line-through">
                                                $99
                                            </span>{" "}
                                            <span className="text-green-400">
                                                Free
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className={`text-green-400 ${delaGothic.className}`}
                                    >
                                        until we run out of money
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="relative w-full pb-8 md:pb-16">
                        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3">
                            <FeatureCard
                                icon={<Brain className="h-8 w-8" />}
                                title="Zero Setup"
                                description="GitHub native integration"
                                gradient="from-[#ff6bfd] to-indigo-500"
                                details={[
                                    {
                                        icon: <Code className="h-5 w-5" />,
                                        text: "One-Click Setup",
                                    },
                                    {
                                        icon: <Zap className="h-5 w-5" />,
                                        text: "10-second task creation",
                                    },
                                    {
                                        icon: (
                                            <CheckCircle2 className="h-5 w-5" />
                                        ),
                                        text: "Parallel Execution",
                                    },
                                ]}
                            />
                            <FeatureCard
                                icon={<GitPullRequest className="h-8 w-8" />}
                                title="Iterate on PR"
                                description="Automated PR workflow"
                                gradient="from-indigo-400 to-cyan-400"
                                details={[
                                    {
                                        icon: <Code className="h-5 w-5" />,
                                        text: "Smart PR suggestions",
                                    },
                                    {
                                        icon: <Zap className="h-5 w-5" />,
                                        text: "Automatic code reviews",
                                    },
                                    {
                                        icon: (
                                            <CheckCircle2 className="h-5 w-5" />
                                        ),
                                        text: "Continuous improvements",
                                    },
                                ]}
                            />
                            <FeatureCard
                                icon={<Clock className="h-8 w-8" />}
                                title="Parallel Execution"
                                description="Run agents in parallel"
                                gradient="from-cyan-400 to-[#ff6bfd]"
                                details={[
                                    {
                                        icon: <Code className="h-5 w-5" />,
                                        text: "AGENTS AGENTS AGENTS",
                                    },
                                    {
                                        icon: <Zap className="h-5 w-5" />,
                                        text: "Efficient task distribution",
                                    },
                                    {
                                        icon: (
                                            <CheckCircle2 className="h-5 w-5" />
                                        ),
                                        text: "Real-time progress tracking",
                                    },
                                ]}
                            />
                            <div className="absolute -right-8 -top-8 h-64 w-64 animate-pulse rounded-full bg-indigo-500/10 blur-3xl filter"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
