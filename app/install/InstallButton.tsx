'use client';

import { ArrowRight } from "lucide-react";

interface InstallButtonProps {
    delaGothicClassName: string;
}

export default function InstallButton({ delaGothicClassName }: InstallButtonProps) {
    return (
        <button
            onClick={() => {
                window.uetq = window.uetq || [];
                window.uetq.push("event", "install_clicked", {});
                if (typeof window.gtag_report_conversion === 'function') {
                    // Let gtag handle the redirection
                    window.gtag_report_conversion("https://github.com/apps/agentfarmx/installations/select_target");
                } else {
                    // Fallback if gtag is not available
                    window.open(
                        "https://github.com/apps/agentfarmx/installations/select_target",
                        "_blank"
                    );
                }
            }}
            className={`group flex w-full items-center justify-center space-x-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-indigo-500/25 ${delaGothicClassName}`}
        >
            <span>Try it for free on Github</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
    );
} 