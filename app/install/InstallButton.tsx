'use client';

import { ArrowRight } from "lucide-react";

interface InstallButtonProps {
    delaGothicClassName: string;
}

export default function InstallButton({ delaGothicClassName }: InstallButtonProps) {
    return (
        <button
            onClick={() => {
                // Store the target URL
                const targetUrl = "https://github.com/apps/agentfarmx/installations/select_target";
                
                // Primary action - open the GitHub page immediately
                window.open(targetUrl, "_blank");
                
                // Try to capture telemetry after the primary action
                try {
                    // Microsoft UET tracking
                    if (window.uetq) {
                        window.uetq.push("event", "install_clicked", {});
                    }
                } catch (e) {
                    console.log("Telemetry tracking error (UET):", e);
                }
                
                try {
                    // Google Ads conversion tracking
                    if (typeof window.gtag_report_conversion === 'function') {
                        window.gtag_report_conversion();
                    }
                } catch (e) {
                    console.log("Telemetry tracking error (Google):", e);
                }
            }}
            data-action="install-github-app"
            className={`group flex w-full items-center justify-center space-x-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-indigo-500/25 ${delaGothicClassName}`}
        >
            <span>Try it for free on Github</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
    );
} 