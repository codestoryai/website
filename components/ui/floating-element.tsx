"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export const FloatingElement = ({ children, delay = 0, className = "" }: FloatingElementProps) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.8,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2
        }}
    >
        {children}
    </motion.div>
);

export const GradientText = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
    <span className={`bg-gradient-to-r from-goat-primary via-goat-secondary to-goat-accent bg-clip-text text-transparent ${className}`}>
        {children}
    </span>
);
