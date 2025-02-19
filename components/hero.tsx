"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { Video } from "./video";

export default function Hero() {
    return (
        <div className="relative bg-slate-950 bg-noise p-8 pt-20 md:p-12 md:pt-24 overflow-hidden">
            {/* Gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-slate-950 to-slate-950" />
            
            {/* Floating badge */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 animate-float">
                <Badge className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 backdrop-blur-sm px-4 py-2">
                    Powered by AI
                </Badge>
            </div>

            <div className="relative m-auto my-6 flex max-w-screen-xl flex-col items-center md:my-12">
                {/* Main heading with gradient */}
                <h1 className="text-center text-4xl font-bold text-white md:text-6xl max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-indigo-400">
                    Code with the <span className="text-indigo-400">speed</span>{" "}
                    and <span className="text-indigo-400">knowledge</span> of the
                    best programmer you know.
                </h1>

                {/* Tooltip */}
                <div className="mt-4 text-2xl text-slate-400">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="underline decoration-indigo-500 decoration-2 underline-offset-4 cursor-pointer">
                                Aide
                            </span>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <span className="text-xl">AI + IDE</span>
                        </TooltipContent>
                    </Tooltip>{" "}
                    is by your side.
                </div>

                {/* CTA Button */}
                <Button 
                    className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/20"
                    size="lg"
                >
                    Get Started Free
                </Button>

                {/* Trust indicators */}
                <div className="mt-12 flex items-center gap-8 text-slate-400">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full" />
                        <span>99.9% Uptime</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full" />
                        <span>Enterprise Ready</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-purple-500 rounded-full" />
                        <span>24/7 Support</span>
                    </div>
                </div>

                <Video
                    className="mt-12 rounded-lg border border-slate-800 shadow-xl backdrop-blur-sm"
                    src="/probe-walk-through.mp4"
                />
            </div>
        </div>
    );
}