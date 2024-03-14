import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const replica = localFont({
  src: [
    {
      path: './fonts/ReplicaLLTrialWeb-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/ReplicaLLTrialWeb-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: './fonts/ReplicaLLTrialWeb-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/ReplicaLLTrialWeb-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/ReplicaLLTrialWeb-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/ReplicaLLTrialWeb-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: './fonts/ReplicaLLTrialWeb-Heavy.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: './fonts/ReplicaLLTrialWeb-HeavyItalic.woff2',
      weight: '800',
      style: 'italic'
    }
  ],
  variable: '--font-replica'
})

export const metadata: Metadata = {
  title: "Aide",
  description: "The AI-powered mod of VSCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${replica.variable}`}>
      <body>{children}</body>
    </html>
  );
}
