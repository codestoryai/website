"use client";

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
            <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:ring-1 hover:ring-indigo-500/20">
                <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 transition-opacity group-hover:opacity-10`}
                ></div>
                <div className="relative space-y-6">
                    <div className="text-indigo-400">{icon}</div>
                    <div>
                        <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-indigo-300">
                            {title}
                        </h3>
                        <p className="mb-4 text-gray-400">{description}</p>
                    </div>
                    <div className="space-y-3 border-t border-gray-700/50 pt-4">
                        {details.map((detail, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2 text-gray-300"
                            >
                                <div className="text-indigo-400">
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
        <div className="relative min-h-screen overflow-hidden bg-black">
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
            <div className="container relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center space-y-24 px-6 py-12">
                {/* Hero Section */}
                <div className="mx-auto max-w-4xl text-center">
                    <div className="space-y-8">
                        <h1 className="text-6xl font-bold leading-tight text-white">
                            Take Control <br />
                            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                                Ship Your Vision
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Spawn self-managing AI Agents on your codebase,
                            iterate on GitHub PRs, and get reliable updates—all
                            without the overhead of man-management.
                        </p>
                        <div className="flex items-center justify-center space-x-6">
                            <button
                                onClick={() =>
                                    (window.location.href =
                                        "https://calendar.app.google/CWtwXjZF1s8rrkui6")
                                }
                                className="group flex items-center space-x-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-indigo-500/25"
                            >
                                <span>Schedule a Demo</span>
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>
                            <div className="border-l border-gray-700 pl-6 text-sm text-gray-400">
                                <div className="text-2xl font-bold text-indigo-400">
                                    100%
                                </div>
                                Async Uptime
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="relative">
                    <div className="grid gap-6 md:grid-cols-3">
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
                                    icon: <CheckCircle2 className="h-5 w-5" />,
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
                                    icon: <CheckCircle2 className="h-5 w-5" />,
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
                                    icon: <CheckCircle2 className="h-5 w-5" />,
                                    text: "Predictable delivery schedules",
                                },
                            ]}
                        />
                        <div className="absolute -right-8 -top-8 h-64 w-64 animate-pulse rounded-full bg-indigo-500/10 blur-3xl filter"></div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="absolute bottom-12 left-0 right-0 px-6">
                    <div className="mx-auto flex max-w-2xl items-center justify-between rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm">
                        <div className="px-4 text-center">
                            <div className="mb-1 text-2xl font-bold text-indigo-400">
                                10-15h
                            </div>
                            <p className="text-sm text-gray-400">
                                Time Saved Weekly
                            </p>
                        </div>
                        <div className="border-x border-gray-700 px-4 text-center">
                            <div className="mb-1 text-2xl font-bold text-indigo-400">
                                1h
                            </div>
                            <p className="text-sm text-gray-400">Setup Time</p>
                        </div>
                        <div className="px-4 text-center">
                            <div className="mb-1 text-2xl font-bold text-indigo-400">
                                24/7
                            </div>
                            <p className="text-sm text-gray-400">
                                Agent Availability
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
