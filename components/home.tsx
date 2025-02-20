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
import { AnimatedCard } from "@/components/ui/feature-block-animated-card";
import { PinContainer } from "@/components/ui/3d-pin";
import {
    ArrowRight,
    Brain,
    Clock,
    Code,
    GitPullRequest,
    Shield,
    Sparkles,
    Zap,
    CheckCircle2,
    Sprout,
} from "lucide-react";
import { Video } from "./video";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const ClaudeLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 512 512"
    className={className}
  >
    <rect fill="#CC9B7A" width="512" height="512" rx="104.187" ry="105.042" />
    <path
      fill="#1F1F1E"
      fillRule="nonzero"
      d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"
    />
  </svg>
);

const OpenAILogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Z"
      fill="currentColor"
    />
  </svg>
);

const GeminiLogo = ({ className }: { className?: string }) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className={className}
  >
    <path
      d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"
      fill="url(#prefix__paint0_radial_980_20147)"
    />
    <defs>
      <radialGradient
        id="prefix__paint0_radial_980_20147"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"
      >
        <stop offset=".067" stopColor="#9168C0" />
        <stop offset=".343" stopColor="#5684D1" />
        <stop offset=".672" stopColor="#1BA1E3" />
      </radialGradient>
    </defs>
  </svg>
);

interface HomePageProps {
    deviceDetails: DeviceDetails | undefined;
    latestRelease: Downloads;
}

export default function Component({
    deviceDetails,
    latestRelease,
}: HomePageProps) {
    return (
        <div className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-indigo-500/15 to-cyan-500/20 opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-indigo-950/20"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="animate-blob absolute -left-4 -top-4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl filter"></div>
                    <div className="animate-blob animation-delay-2000 absolute -right-4 top-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl filter"></div>
                    <div className="animate-blob animation-delay-4000 absolute left-1/2 bottom-0 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl filter"></div>
                </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-12 md:top-20 left-1/2 -translate-x-1/2 animate-float z-10">
                <div className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-indigo-500/20 via-indigo-400/20 to-indigo-300/20 backdrop-blur-sm px-6 py-3 text-sm font-medium text-indigo-300 border border-indigo-500/20 shadow-lg shadow-indigo-500/10">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    <span>AI-Powered Development</span>
                </div>
            </div>

            {/* Main content */}
            <div className="container relative mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center justify-center space-y-16 py-12">
                    {/* Hero Section */}
                    <div className="mx-auto max-w-4xl text-center mt-24 md:mt-28">
                        <div className="space-y-8">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                                Take Control
                                <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent mt-6">
                                    Ship Your Vision
                                </span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
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
                        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                            <PinContainer title="Zero Setup" href="#features">
                                <div className="flex flex-col space-y-4 p-4 tracking-tight text-slate-100/50 w-[20rem]">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-500/10">
                                            <GitPullRequest className="h-8 w-8 text-indigo-400" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-white">Zero Setup</h3>
                                    </div>
                                    <p className="text-slate-300">GitHub native integration, no CLI or web UI</p>
                                    <ul className="space-y-2 mt-4">
                                        <li className="flex items-center gap-2">
                                            <div className="h-px w-4 bg-indigo-400" />
                                            <span>One-Click Setup</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-px w-4 bg-indigo-400" />
                                            <span>10-second task creation</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-px w-4 bg-indigo-400" />
                                            <span>Automated PR workflow</span>
                                        </li>
                                    </ul>
                                </div>
                            </PinContainer>

                            <PinContainer title="Smart PR Suggestions" href="#features">
                                <div className="flex flex-col space-y-4 p-4 tracking-tight text-slate-100/50 w-[20rem]">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-500/10">
                                            <Brain className="h-8 w-8 text-indigo-400" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-white">Smart PR Suggestions</h3>
                                    </div>
                                    <p className="text-slate-300">Automatic code reviews and continuous improvements</p>
                                    <ul className="space-y-2 mt-4">
                                        <li className="flex items-center gap-2">
                                            <div className="h-px w-4 bg-indigo-400" />
                                            <span>Automatic code reviews</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-px w-4 bg-indigo-400" />
                                            <span>Continuous improvements</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-px w-4 bg-indigo-400" />
                                            <span>Iterate on PR</span>
                                        </li>
                                    </ul>
                                </div>
                            </PinContainer>

                            <PinContainer title="Parallel Execution" href="#features">
                                <div className="flex flex-col space-y-4 p-4 tracking-tight text-slate-100/50 w-[20rem]">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-500/10">
                                            <Clock className="h-8 w-8 text-indigo-400" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-white">Parallel Execution</h3>
                                    </div>
                                    <p className="text-slate-300">Run multiple agents in parallel</p>
                                    <ul className="space-y-2 mt-4">
                                        <li className="flex items-center gap-2">
                                            <div className="h-px w-4 bg-indigo-400" />
                                            <span>Multiple agents working simultaneously</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-px w-4 bg-indigo-400" />
                                            <span>Efficient task distribution</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="h-px w-4 bg-indigo-400" />
                                            <span>Real-time progress tracking</span>
                                        </li>
                                    </ul>
                                </div>
                            </PinContainer>
                        </div>
                    </div>

                    {/* Model Workflow Section */}
                    <div className="relative w-full pb-16 mt-24">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
                            Agentic Multi-Model Workflow
                        </h2>
                        <div className="relative grid gap-8 md:gap-12 md:grid-cols-3 max-w-6xl mx-auto">
                            {/* Connecting Lines */}
                            <div className="absolute top-1/2 left-[5%] w-[90%] h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform -translate-y-1/2 hidden md:block animate-glow-line"></div>
                            <div className="absolute top-1/2 left-1/3 w-px h-16 bg-gradient-to-b from-transparent via-indigo-500/80 to-transparent transform -translate-y-1/2 hidden md:block animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
                            <div className="absolute top-1/2 left-2/3 w-px h-16 bg-gradient-to-b from-transparent via-indigo-500/80 to-transparent transform -translate-y-1/2 hidden md:block animate-pulse-slow" style={{ animationDelay: "1s" }}></div>

                            <AnimatedCard
                                className="relative z-10 bg-black/50 backdrop-blur-sm hover:border-indigo-500/50"
                                title="OpenAI"
                                description="Advanced language understanding and code generation"
                                icons={[
                                    {
                                        icon: <OpenAILogo className="text-indigo-400" />,
                                        size: "lg",
                                    },
                                ]}
                            />

                            <AnimatedCard
                                className="relative z-10 bg-black/50 backdrop-blur-sm hover:border-indigo-500/50"
                                title="Claude"
                                description="Specialized in complex reasoning and analysis"
                                icons={[
                                    {
                                        icon: <ClaudeLogo />,
                                        size: "lg",
                                    },
                                ]}
                            />

                            <AnimatedCard
                                className="relative z-10 bg-black/50 backdrop-blur-sm hover:border-indigo-500/50"
                                title="Gemini"
                                description="Multimodal understanding and generation"
                                icons={[
                                    {
                                        icon: <GeminiLogo />,
                                        size: "lg",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}