"use client";

declare global {
    interface Window {
        uetq: any[];
    }
}

import { ArrowRight } from "lucide-react";
import React from "react";
import Features from './features';
import { Downloads } from "@/lib/types";
import { DeviceDetails } from "@/lib/ua";

interface ComponentProps {
    deviceDetails: DeviceDetails | undefined;
    latestRelease: Downloads;
}

export default function Component({
    deviceDetails,
    latestRelease,
}: ComponentProps) {
    return (
        <div className="relative overflow-hidden bg-slate-950 min-h-screen">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_r,#6366f1,#4f46e5)] opacity-10"></div>
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="animate-blob absolute -left-4 -top-4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl filter"></div>
                    <div className="animate-blob animation-delay-2000 absolute -right-4 top-1/2 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl filter"></div>
                </div>
            </div>

            {/* Main content */}
            <div className="relative">
                {/* Hero Section */}
                <div className="container relative mx-auto max-w-7xl px-6 pt-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="space-y-8">
                            <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
                                Take Control <br />
                                <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                                    Ship Your Vision
                                </span>
                            </h1>
                            <p className="text-xl text-slate-400">
                                Spawn self-managing AI Agents on your codebase,
                                iterate on GitHub PRs, and get reliable
                                updates—all without the overhead of
                                engineering management.
                            </p>
                            <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                                <button
                                    onClick={() => {
                                        window.uetq = window.uetq || [];
                                        window.uetq.push('event', 'cta_clicked', {});
                                        window.open(
                                            "https://calendar.app.google/CWtwXjZF1s8rrkui6",
                                            "_blank"
                                        );
                                    }}
                                    className="group flex items-center space-x-3 rounded-full bg-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-indigo-600 hover:shadow-indigo-500/20"
                                >
                                    <span>Schedule a Demo</span>
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </button>
                                <div className="flex items-center space-x-6 text-sm text-slate-400">
                                    <div className="flex items-center space-x-2">
                                        <div className="text-2xl font-bold text-indigo-400">
                                            100%
                                        </div>
                                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                    </div>
                                    Async Uptime
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <Features />

                {/* Rest of the content */}
                <div className="container relative mx-auto max-w-7xl px-6 py-24">
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Feature cards moved to Features component */}
                    </div>
                </div>
            </div>
        </div>
    );
}