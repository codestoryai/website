import { Space_Mono } from "next/font/google";

import { Providers } from "./providers";

const font = Space_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "CodeStory: Plan. Debug. Reason. Within your IDE.",
  description:
    "CodeStory is an AI coding assistant that learns the context of your code and helps you plan, debug and reason with code on a day-to-day basis.",
  applicationName: "CodeStory",
  referrer: "origin-when-cross-origin",
  keywords: ["CodeStory", "YC", "YCombinator", "Developer Tools", "AI"],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
