import { parse } from "@/styles/fonts";
import { Providers } from "./providers";

export const metadata = {
  title: "CodeStory: A 10x engineer, right inside your editor.",
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
      <body className={parse.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
