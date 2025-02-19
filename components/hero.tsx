"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight, Shield, Zap, Sparkles } from "lucide-react";
import React from "react";
import { Video } from "./video";

export default function Hero() {
    return (
        <div className="relative bg-background bg-noise min-h-screen p-8 pt-32 md:p-12 md:pt-40">
            {/* Floating Badge */}
            <div className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2 animate-float">
                <div className="flex items-center space-x-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400">
                    <Sparkles className="h-4 w-4" />
                    <span>AI-Powered Development</span>
                </div>
            </div>

            <div className="m-auto my-6 flex max-w-screen-xl flex-col items-center text-center md:my-12">
                {/* Main Headlines */}
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-4">
                    Take Control
                </h1>
                <h2 className="text-4xl md:text-5xl font-semibold text-indigo-400 mb-6">
                    Ship Your Vision
                </h2>
                <p className="max-w-2xl text-lg text-slate-300 leading-relaxed mb-12">
                    Experience the future of development with AI-powered tools that enhance your workflow. 
                    Build faster, smarter, and with more confidence than ever before.
                </p>

                {/* CTAs */}
                <div className="flex flex-col md:flex-row items-center gap-6">
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

                {/* Video Section */}
                <Video
                    className="mt-16 rounded-lg border shadow-xl"
                    src="/probe-walk-through.mp4"
                />
            </div>
        </div>
    );
}