import { Metadata } from "next";
import { Dela_Gothic_One } from "next/font/google";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import InstallButton from "./InstallButton";

const delaGothic = Dela_Gothic_One({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Install AgentFarmX - GitHub's #1 AI Agent for Your Codebase",
    description: "Install AgentFarmX, the leading AI agent for code automation. Seamlessly integrate with GitHub, automate PR workflows, and leverage parallel execution for maximum efficiency.",
    keywords: ["AgentFarmX", "GitHub App", "AI Agent", "Code Automation", "PR Workflow", "Developer Tools"],
    openGraph: {
        title: "Install AgentFarmX - GitHub's #1 AI Agent",
        description: "Transform your development workflow with AgentFarmX. One-click GitHub integration, parallel execution, and smart PR suggestions.",
        images: ["/og-image.png"],
    },
};

export default function InstallPage() {
    return (
        <div className="relative min-h-screen bg-black">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#0ea5e9)] opacity-20"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="animate-blob absolute -left-4 -top-4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl filter"></div>
                    <div className="animate-blob animation-delay-2000 absolute -right-4 top-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl filter"></div>
                </div>
            </div>

            {/* Main content */}
            <div className="container relative mx-auto max-w-4xl px-6 py-24">
                <div className="flex flex-col items-center space-y-12">
                    {/* App Icon */}
                    <div className="relative h-32 w-32 overflow-hidden rounded-full bg-[#00FF00] p-2 ring-4 ring-[#00FF00]/30">
                        <Image
                            src="/farmer.jpeg"
                            alt="AgentFarmX Logo"
                            width={128}
                            height={128}
                            className="h-full rounded-full object-cover object-[60%_center]"
                        />
                    </div>

                    {/* Title and Description */}
                    <div className="text-center">
                        <h1 className={`${delaGothic.className} mb-6 text-4xl font-bold text-white md:text-5xl`}>
                            Install AgentFarmX
                        </h1>
                        <p className={`${delaGothic.className} text-xl text-gray-400`}>
                            The #1 AI Agent for Your GitHub Workflow
                        </p>
                    </div>

                    {/* GitHub-themed Install Card */}
                    <div className="w-full max-w-2xl">
                        <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:ring-1 hover:ring-indigo-500/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6bfd] to-indigo-500 opacity-20 transition-opacity duration-500 group-hover:opacity-30"></div>
                            
                            <div className="relative space-y-6">
                                <div className="flex items-center justify-center space-x-4">
                                    <Github className="h-10 w-10 text-[#ff6bfd]" />
                                    <span className={`${delaGothic.className} text-2xl text-white`}>GitHub App</span>
                                </div>

                                <div className="space-y-4 text-center">
                                    <p className={`${delaGothic.className} text-gray-300`}>
                                        One-click installation to get started with AgentFarmX
                                    </p>

                                    <InstallButton delaGothicClassName={delaGothic.className} />

                                  
                                    <p className={`flex justify-center text-center items-baseline space-x-2 ${delaGothic.className} text-2xl font-bold`}>
                                           <span className="text-green-400">3 free PRs closed</span> <span className="text-gray-500 text-sm">then</span> <span className={`text-xl sm:text-2xl font-bold text-white`}>$99</span>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {[
                            "One-Click GitHub Integration",
                            "Smart PR Suggestions",
                            "Parallel Execution",
                            "Real-time Progress Tracking",
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 rounded-lg bg-gray-800/30 p-4"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff6bfd]/20">
                                    <div className="h-3 w-3 rounded-full bg-[#ff6bfd]"></div>
                                </div>
                                <span className={`${delaGothic.className} text-gray-300`}>
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 