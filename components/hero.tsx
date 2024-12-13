"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Video } from "./video";
import { GoatBadge, StatBadge } from "./ui/goat-badge";
import { FloatingElement, GradientText } from "./ui/floating-element";

export default function Hero() {
    return (
        <div className="relative bg-background bg-noise">
            <div className="absolute inset-0 bg-gradient-to-br from-goat-dark via-goat-primary/20 to-transparent opacity-90" />

            <div className="relative px-6 pt-24 md:px-12 md:pt-32 lg:pt-40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-screen-xl"
                >
                    <FloatingElement delay={0.2}>
                        <GoatBadge />
                    </FloatingElement>

                    <h1 className="mt-8 text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:leading-tight">
                        Code with the{" "}
                        <GradientText>speed</GradientText>{" "}
                        and{" "}
                        <GradientText>knowledge</GradientText>{" "}
                        of the{" "}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span className="cursor-pointer underline decoration-goat-accent decoration-2 underline-offset-4 transition-all hover:decoration-4 md:underline-offset-8">
                                    GOAT
                                </span>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <span className="text-xl font-semibold">AI + IDE = 🐐</span>
                            </TooltipContent>
                        </Tooltip>
                    </h1>

                    <motion.div
                        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <StatBadge value="62%" label="SWE-Bench Success" />
                        <StatBadge value="3.5" label="Sonnet Version" />
                        <StatBadge value="∞" label="Computational Scale" />
                        <StatBadge value="24/7" label="AI Availability" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-8 flex justify-center space-x-4 sm:justify-start"
                    >
                        <a
                            href="https://github.com/codestoryai/binaries/releases/latest"
                            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-goat-primary via-goat-accent to-goat-secondary px-6 py-3 text-lg font-semibold text-background shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                        >
                            <span>Download SOTA-SWE Agent</span>
                            <svg
                                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-12 md:mt-16"
                    >
                        <Video
                            className="rounded-xl border border-goat-primary/20 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                            src="/probe-walk-through.mp4"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
