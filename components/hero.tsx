"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { Video } from "./video";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative bg-background bg-noise">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

            <div className="relative px-6 pt-24 md:px-12 md:pt-32 lg:pt-40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-screen-xl"
                >
                    <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:leading-tight">
                        Code with the{" "}
                        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            speed
                        </span>{" "}
                        and{" "}
                        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            knowledge
                        </span>{" "}
                        of the best programmer you know.{" "}
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span className="cursor-pointer bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent underline decoration-secondary decoration-2 underline-offset-4 transition-all hover:decoration-4 md:underline-offset-8">
                                    Aide
                                </span>
                            </TooltipTrigger>
                            <TooltipContent
                                side="bottom"
                                className="animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                            >
                                <span className="text-xl font-semibold">AI + IDE</span>
                            </TooltipContent>
                        </Tooltip>{" "}
                        is by your side.
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-12 md:mt-16"
                    >
                        <Video
                            className="rounded-xl border shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                            src="/probe-walk-through.mp4"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
