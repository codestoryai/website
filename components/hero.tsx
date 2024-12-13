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
        <div className="relative bg-background bg-noise min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-goat-dark via-goat-primary/20 to-transparent opacity-90" />

            <div className="container mx-auto px-4 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start space-y-8"
                >
                    <FloatingElement delay={0.2}>
                        <GoatBadge />
                    </FloatingElement>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black">
                            <GradientText>
                                The GOAT of Code Intelligence
                            </GradientText>
                        </h1>

                        <p className="text-2xl md:text-3xl font-bold text-zinc-200">
                            Code with the <GradientText>speed</GradientText>{" "}
                            and <GradientText>knowledge</GradientText> of{" "}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="underline decoration-goat-secondary decoration-2 underline-offset-4 md:underline-offset-8">
                                        Aide
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    <span className="text-xl">AI + IDE = GOAT 🐐</span>
                                </TooltipContent>
                            </Tooltip>
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {[
                            { value: "62%", label: "SWE-Bench Success Rate" },
                            { value: "3.5", label: "Sonnet Version" },
                            { value: "∞", label: "Computational Scale" }
                        ].map((stat, index) => (
                            <motion.div key={stat.label} transition={{ delay: 0.6 + index * 0.2 }}>
                                <StatBadge value={stat.value} label={stat.label} />
                            </motion.div>
                        ))}
                    </motion.div>

                    <Video
                        className="w-full rounded-lg border border-goat-primary/20 shadow-xl"
                        src="/probe-walk-through.mp4"
                    />

                    {/*deviceDetails
          ?
          <div className="my-8 hidden md:flex flex-col items-center w-fit">
            <Button size="lg" variant="outline">
              <a href={deviceDetails.url}>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <p className="text-3xl">Download for {deviceDetails.os}</p>
                    <p className="text-lg">{deviceDetails.arch}</p>
                  </div>
                  <Download className="ml-4" />
                </div>
              </a>
            </Button>
            <Button className="text-md text-foreground" onClick={scrollToBottom} variant="link">
              Looking for a different platform?
            </Button>
          </div>
          :
          <div />
        */}
                </motion.div>
            </div>
        </div>
    );
}
