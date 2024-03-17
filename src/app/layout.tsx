import type { Metadata } from "next";

import { Fira_Sans } from 'next/font/google';
import React from "react";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
