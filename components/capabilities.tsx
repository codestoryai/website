"use client";

import { motion } from "framer-motion";
import { Bot, Brain, Code, GitPullRequest, Search, Zap } from "lucide-react";

const capabilities = [
    {
        icon: <Brain className="h-8 w-8" />,
        title: "Code Understanding",
        description: "Deep comprehension of code structure and patterns",
        color: "from-purple-500 to-indigo-500"
    },
    {
        icon: <Code className="h-8 w-8" />,
        title: "Code Generation",
        description: "Intelligent code creation and optimization",
        color: "from-indigo-500 to-blue-500"
    },
    {
        icon: <GitPullRequest className="h-8 w-8" />,
        title: "PR Management",
        description: "Automated pull request handling and reviews",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: <Search className="h-8 w-8" />,
        title: "Code Search",
        description: "Advanced semantic code search capabilities",
        color: "from-cyan-500 to-teal-500"
    },
    {
        icon: <Bot className="h-8 w-8" />,
        title: "Agent Autonomy",
        description: "Self-managing AI agents for development tasks",
        color: "from-teal-500 to-green-500"
    },
    {
        icon: <Zap className="h-8 w-8" />,
        title: "Fast Execution",
        description: "Rapid task completion with high accuracy",
        color: "from-green-500 to-emerald-500"
    }
];

export const Capabilities = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        AI Models & Capabilities
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Powered by state-of-the-art AI models, our agents provide comprehensive development capabilities
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl bg-slate-900/50 p-8 hover:bg-slate-900/80 transition-colors"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                            <div className="relative">
                                <div className="text-white mb-4 opacity-75 group-hover:opacity-100 transition-opacity">
                                    {capability.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {capability.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {capability.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};