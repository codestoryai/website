import { SpeedInsights } from "@vercel/speed-insights/next";
import { getUser, Impersonation } from "@workos-inc/authkit-nextjs";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Fira_Sans } from "next/font/google";
import React from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { fetchLatestRelease } from "@/lib/github";
import { cleanDeviceDetails, DeviceDetails } from "@/lib/ua";

import "./globals.css";
import { PHProvider } from "./providers";

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
    ssr: false,
});

const firaSans = Fira_Sans({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://aide.dev"),
    title: "Aide",
    description:
        "Code with the speed and knowledge of the best programmer you know. Aide is by your side.",
    openGraph: {
        title: "Aide - Your AI Programming Assistant",
        description:
            "Code with the speed and knowledge of the best programmer you know. Aide is by your side.",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 388,
                height: 216,
                alt: "Aide - AI Programming Assistant",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Aide - Your AI Programming Assistant",
        description:
            "Code with the speed and knowledge of the best programmer you know. Aide is by your side.",
        images: ["/og-image.png"],
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { user } = await getUser();

    const latestRelease = await fetchLatestRelease();

    let currentDevice: DeviceDetails | undefined;

    if (latestRelease.current) {
        currentDevice = cleanDeviceDetails(latestRelease.current);
    }

    return (
        <html
            className={`${firaSans.className}`}
            lang="en"
            suppressHydrationWarning={true}
        >
            <body>
                <PHProvider>
                    <PostHogPageView />
                    <TooltipProvider delayDuration={0}>
                        <Impersonation />
                        <Header />
                        {children}
                        <Footer />
                    </TooltipProvider>
                </PHProvider>
                <SpeedInsights />
            </body>
        </html>
    );
}
