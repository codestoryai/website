import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Fira_Sans } from 'next/font/google';
import "./globals.css";

const firaSans = Fira_Sans({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en" className={`${firaSans.className}`}>
      <body>{children}</body>
    </html>
  );
}
