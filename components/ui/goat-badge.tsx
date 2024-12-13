"use client";

import React from "react";
import { motion } from "framer-motion";

interface AchievementCardProps {
    emoji: string;
    title: string;
    description: string;
}

export const GoatBadge = () => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-goat-primary via-goat-secondary to-goat-accent text-white font-black text-xl animate-gradient-x shadow-lg hover:shadow-xl transition-shadow"
    >
        <span className="mr-2 text-2xl" role="img" aria-label="goat">🐐</span>
        <span>62% SOTA</span>
    </motion.div>
);

export const AchievementCard = ({ emoji, title, description }: AchievementCardProps) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-6 rounded-xl bg-gradient-to-br from-goat-dark to-goat-primary/10 border border-goat-primary/20 shadow-lg hover:shadow-xl transition-all"
    >
        <span className="text-4xl mb-4 block" role="img" aria-label={title}>{emoji}</span>
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-goat-primary to-goat-accent bg-clip-text text-transparent">{title}</h3>
        <p className="text-zinc-400">{description}</p>
    </motion.div>
);

export const StatBadge = ({ value, label }: { value: string; label: string }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        className="flex flex-col items-center p-4 rounded-lg bg-goat-dark/50 border border-goat-primary/20 hover:border-goat-accent/50 transition-colors"
    >
        <motion.span
            className="text-3xl font-black bg-gradient-to-r from-goat-primary to-goat-accent bg-clip-text text-transparent mb-1"
            whileHover={{ scale: 1.1 }}
        >
            {value}
        </motion.span>
        <span className="text-sm text-zinc-400">{label}</span>
    </motion.div>
);
