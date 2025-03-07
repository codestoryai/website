import { SpeedInsights } from "@vercel/speed-insights/next";
import { getUser, Impersonation } from "@workos-inc/authkit-nextjs";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter, Dela_Gothic_One } from "next/font/google";
import Script from "next/script";
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

const inter = Inter({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: '--font-inter',
});

const delaGothic = Dela_Gothic_One({
    display: "swap",
    subsets: ["latin"],
    weight: ["400"],
    variable: '--font-dela-gothic',
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
            className={`${inter.variable} ${delaGothic.variable}`}
            lang="en"
            suppressHydrationWarning={true}
        >
            <body className="min-h-screen flex flex-col font-sans">
                <Script 
                    strategy="afterInteractive" 
                    src="https://www.googletagmanager.com/gtag/js?id=AW-16881199338"
                />
                <Script 
                    id="google-analytics" 
                    strategy="afterInteractive"
                >
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-16881199338');
                `}
                </Script>
                <Script
                    id="microsoft-uet"
                    strategy="afterInteractive"
                >
                    {`(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"187179906", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");`}
                </Script>
                <Script
                    id="google-conversion-tracking"
                    strategy="afterInteractive"
                >
                    {`function gtag_report_conversion(url) {
                      var callback = function () {
                        if (typeof(url) != 'undefined') {
                          window.location = url;
                        }
                      };
                      gtag('event', 'conversion', {
                          'send_to': 'AW-16881199338/lENeCOrt3KMaEOrRyvE-',
                          'value': 10.0,
                          'currency': 'GBP',
                          'event_callback': callback
                      });
                      return false;
                    }`}
                </Script>
                <PHProvider>
                    <PostHogPageView />
                    <TooltipProvider delayDuration={0}>
                        <Impersonation />
                        <Header />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </TooltipProvider>
                </PHProvider>
                <SpeedInsights />
            </body>
        </html>
    );
}