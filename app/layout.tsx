import { Space_Mono } from "next/font/google";

import { Providers } from "./providers";

const font = Space_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "CodeStory",
  description: "Plan. Debug. Reason.",
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
