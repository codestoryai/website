"use client";

import { Bot, Zap, Code, GitBranch, Search, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
    {
        title: "AI-Powered Development",
        description: "Leverage advanced AI to accelerate your development workflow with intelligent code suggestions and automated tasks.",
        icon: Bot,
    },
    {
        title: "Lightning Fast",
        description: "Experience blazing-fast performance with optimized code processing and real-time assistance.",
        icon: Zap,
    },
    {
        title: "Smart Code Analysis",
        description: "Deep code understanding and context-aware suggestions to help you write better code.",
        icon: Code,
    },
    {
        title: "Version Control",
        description: "Seamless integration with Git and intelligent commit suggestions for better code management.",
        icon: GitBranch,
    },
    {
        title: "Semantic Search",
        description: "Find exactly what you need with powerful semantic code search capabilities.",
        icon: Search,
    },
    {
        title: "Command Line Tools",
        description: "Powerful CLI tools and integrations to enhance your development experience.",
        icon: Terminal,
    },
];

export default function Features() {
    return (
        <section className="relative bg-slate-950 py-20">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/50 to-slate-950" />
            
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Supercharge Your Development
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Everything you need to build faster and smarter, powered by cutting-edge AI technology.
                    </p>
                </div>
                
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                        <Card key={feature.title} className="group relative overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10">
                            <div className="p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 mb-6 group-hover:bg-indigo-500/20">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400">
                                    {feature.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}