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
    Sparkles,
    Shield,
} from "lucide-react";
import { Video } from "./video";
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
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:ring-1 hover:ring-indigo-500/20">
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

export default function Component({
    deviceDetails,
    latestRelease,
}: ComponentProps) {
    return (
        <div className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center">
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
            {/* Floating Badge */}
            <div className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2 animate-float">
                <div className="flex items-center space-x-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400">
                    <Sparkles className="h-4 w-4" />
                    <span>AI-Powered Development</span>
                </div>
            </div>

            {/* Main content */}
            <div className="container relative mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center justify-center space-y-24 py-24">
                    {/* Hero Section */}
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="space-y-8">
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-4">
                                Take Control
                                <span className="block text-4xl md:text-5xl font-semibold text-indigo-400 mt-4">
                                    Ship Your Vision
                                </span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed">
                                Experience the future of development with AI-powered tools that enhance your workflow. 
                                Build faster, smarter, and with more confidence than ever before.
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <button
                                    onClick={() => {
                                        window.uetq = window.uetq || [];
                                        window.uetq.push('event', 'cta_clicked', {});
                                        window.open(
                                            "https://calendar.app.google/CWtwXjZF1s8rrkui6",
                                            "_blank"
                                        );
                                    }}
                                    className="group flex items-center space-x-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-indigo-500/25"
                                >
                                    <span>Schedule a Demo</span>
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </button>

                                <div className="flex items-center space-x-4 text-slate-300">
                                    <div className="flex items-center space-x-2">
                                        <Shield className="h-5 w-5 text-green-400" />
                                        <span>99.9% Uptime</span>
                                    </div>
                                    <div className="relative flex items-center space-x-2">
                                        <Zap className="h-5 w-5 text-yellow-400" />
                                        <span>Real-time Processing</span>
                                        <div className="absolute -right-2 -top-2 h-3 w-3">
                                            <div className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></div>
                                            <div className="h-full w-full rounded-full bg-green-500"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Video
                            className="mt-16 rounded-lg border shadow-xl"
                            src="/probe-walk-through.mp4"
                        />
                    </div>

                    {/* Feature Cards */}
                    <div className="relative w-full pb-16">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <FeatureCard
                                icon={<Brain className="h-8 w-8" />}
                                title="Spawn Agents on Your Codebase"
                                description="Automate tasks, fix bugs, and implement new features without expanding your dev team"
                                gradient="from-indigo-500 to-purple-500"
                                details={[
                                    {
                                        icon: <Code className="h-5 w-5" />,
                                        text: "Install via CLI or web UI in minutes",
                                    },
                                    {
                                        icon: <Zap className="h-5 w-5" />,
                                        text: "No specialized infrastructure needed",
                                    },
                                    {
                                        icon: (
                                            <CheckCircle2 className="h-5 w-5" />
                                        ),
                                        text: "Secure and controlled access",
                                    },
                                ]}
                            />
                            <FeatureCard
                                icon={<GitPullRequest className="h-8 w-8" />}
                                title="Iterate via GitHub PRs"
                                description="The agent opens, updates, and merges Pull Requests—no more waiting on back-and-forth reviews"
                                gradient="from-cyan-500 to-blue-500"
                                details={[
                                    {
                                        icon: <Code className="h-5 w-5" />,
                                        text: "Automated PR creation and updates",
                                    },
                                    {
                                        icon: <Zap className="h-5 w-5" />,
                                        text: "Quick sign-off process",
                                    },
                                    {
                                        icon: (
                                            <CheckCircle2 className="h-5 w-5" />
                                        ),
                                        text: "Native GitHub integration",
                                    },
                                ]}
                            />
                            <FeatureCard
                                icon={<Clock className="h-8 w-8" />}
                                title="Set Time Budgets"
                                description="Control how long the agent spends on each task, ensuring predictable and reliable output"
                                gradient="from-purple-500 to-pink-500"
                                details={[
                                    {
                                        icon: <Code className="h-5 w-5" />,
                                        text: "Define task complexity and timeframes",
                                    },
                                    {
                                        icon: <Zap className="h-5 w-5" />,
                                        text: "Consistent iteration cycles",
                                    },
                                    {
                                        icon: (
                                            <CheckCircle2 className="h-5 w-5" />
                                        ),
                                        text: "Predictable delivery schedules",
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