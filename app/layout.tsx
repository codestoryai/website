import { Montserrat } from "next/font/google";

import { Providers } from "./providers";

const inter = Montserrat({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
