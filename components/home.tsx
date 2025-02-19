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
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:ring-1 hover:ring-indigo-500/20">
                <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 transition-opacity group-hover:opacity-10`}
                ></div>
                <div className="relative space-y-6">
                    <div className="text-indigo-400">{icon}</div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-indigo-300">
                            {title}
                        </h3>
                        <p className="text-gray-400">{description}</p>
                    </div>
                    <div className="space-y-4 border-t border-gray-700/50 pt-4">
                        {details.map((detail, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-3 text-gray-300"
                            >
                                <div className="mt-1 flex-shrink-0 text-indigo-400">
                                    {detail.icon}
                                </div>
                                <span>{detail.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Component({ deviceDetails, latestRelease }: ComponentProps) {
    return (
        <div className="relative bg-slate-950 min-h-screen">
            <Navbar />
            <Particles />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-6xl font-bold leading-tight text-white mb-6">
                            Take Control <br />
                            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                                Ship Your Vision
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-12">
                            Spawn self-managing AI Agents on your codebase, iterate on GitHub PRs, 
                            and get reliable updates—all without the overhead of engineering management.
                        </p>
                        <div className="flex items-center justify-center space-x-6">
                            <button
                                onClick={() => {
                                    window.uetq = window.uetq || [];
                                    window.uetq.push('event', 'cta_clicked', {});
                                    window.open("https://calendar.app.google/CWtwXjZF1s8rrkui6", "_blank");
                                }}
                                className="group flex items-center space-x-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-indigo-500/25"
                            >
                                <span>Schedule a Demo</span>
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>
                            <div className="border-l border-gray-700 pl-6 text-sm text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <div className="text-2xl font-bold text-indigo-400">100%</div>
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                </div>
                                Async Uptime
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Cards */}
            <section className="py-24 bg-gradient-to-b from-transparent to-slate-900/50">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 md:grid-cols-3">
                        <FeatureCard
                            icon={<Brain className="h-8 w-8" />}
                            title="Spawn Agents on Your Codebase"
                            description="Automate tasks, fix bugs, and implement new features without expanding your dev team"
                            gradient="from-indigo-500 to-purple-500"
                            details={[
                                { icon: <Code className="h-5 w-5" />, text: "Install via CLI or web UI in minutes" },
                                { icon: <Zap className="h-5 w-5" />, text: "No specialized infrastructure needed" },
                                { icon: <CheckCircle2 className="h-5 w-5" />, text: "Secure and controlled access" },
                            ]}
                        />
                        <FeatureCard
                            icon={<GitPullRequest className="h-8 w-8" />}
                            title="Iterate via GitHub PRs"
                            description="The agent opens, updates, and merges Pull Requests—no more waiting on back-and-forth reviews"
                            gradient="from-cyan-500 to-blue-500"
                            details={[
                                { icon: <Code className="h-5 w-5" />, text: "Automated PR creation and updates" },
                                { icon: <Zap className="h-5 w-5" />, text: "Quick sign-off process" },
                                { icon: <CheckCircle2 className="h-5 w-5" />, text: "Native GitHub integration" },
                            ]}
                        />
                        <FeatureCard
                            icon={<Clock className="h-8 w-8" />}
                            title="Set Time Budgets"
                            description="Control how long the agent spends on each task, ensuring predictable and reliable output"
                            gradient="from-purple-500 to-pink-500"
                            details={[
                                { icon: <Code className="h-5 w-5" />, text: "Define task complexity and timeframes" },
                                { icon: <Zap className="h-5 w-5" />, text: "Consistent iteration cycles" },
                                { icon: <CheckCircle2 className="h-5 w-5" />, text: "Predictable delivery schedules" },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <Capabilities />
        </div>
    );
}