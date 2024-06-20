import type { Metadata } from "next";

import dynamic from 'next/dynamic'
import { Fira_Sans } from 'next/font/google';
import React from "react";

import { TooltipProvider } from "./_components/ui/tooltip";
import "./globals.css";
import { PHProvider } from './providers'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${firaSans.className}`} lang="en">
      <PHProvider>
        <body>
          <PostHogPageView />
          <TooltipProvider delayDuration={0}>
            {children}
          </TooltipProvider>
        </body>
      </PHProvider>
    </html>
  );
}
