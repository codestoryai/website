import type { Metadata } from "next";
import dynamic from 'next/dynamic'
import { Fira_Sans } from 'next/font/google';
import React from "react";

import { TooltipProvider } from "../components/ui/tooltip";
import Footer from "../components/footer";
import Header from "../components/header";
import { WaitlistContextProvider } from "../components/waitlist";
import { PHProvider } from './providers'
import { fetchLatestRelease } from "../lib/github";
import { DeviceDetails, cleanDeviceDetails } from "../lib/ua";
import "./globals.css";

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

const firaSans = Fira_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
})

export const metadata: Metadata = {
  description: "The AI-powered mod of VSCode",
  title: "Aide",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const latestRelease = await fetchLatestRelease()

  let currentDevice: DeviceDetails | undefined

  if (latestRelease.current) {
    currentDevice = cleanDeviceDetails(latestRelease.current)
  }

  return (
    <html className={`${firaSans.className}`} lang="en">
      <PHProvider>
        <WaitlistContextProvider deviceDetails={currentDevice}>
          <body>
            <PostHogPageView />
            <TooltipProvider delayDuration={0}>
              <Header />
              {children}
              <Footer />
            </TooltipProvider>
          </body>
        </WaitlistContextProvider>
      </PHProvider>
    </html>
  );
}
