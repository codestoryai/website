import CSLogo from "@/public/cs-logomark.svg";
import TeamPhoto from "@/public/team.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Card, CardContent } from "./ui/card";

export default function Footer() {
  return (
    <footer className="p-12 bg-white text-sm">
      <div className="max-w-screen-xl m-auto grid grid-cols-8 gap-6">
        <Card className="p-8 col-span-4 row-span-1 border-0 bg-zinc-100">
          <CardContent className="pt-0 pb-0">
            <div className="grid grid-cols-2">
              <div className="col-span-1 flex flex-col text-lg font-semibold gap-2">
                <Link className="hover:text-primary" href="https://docs.codestory.ai" rel="noopener noreferrer" target="_blank">Docs</Link>
                <Link className="hover:text-primary" href="/releases">Releases</Link>
                <Link className="hover:text-primary" href="/blog">Blog</Link>
                <Link className="hover:text-primary" href="https://github.com/codestoryai" rel="noopener noreferrer" target="_blank">Open Source</Link>
                <Link className="hover:text-primary" href="/enterprise">Enterprise</Link>
              </div>
              <div className="col-span-1 flex flex-col text-lg font-semibold gap-2">
                <Link className="hover:text-primary" href="/pricing">Pricing</Link>
                <Link className="hover:text-primary" href="mailto:founders@codestory.ai">Contact</Link>
                <Link className="hover:text-primary" href="https://discord.gg/mtgrhXM5Xf" rel="noopener noreferrer" target="_blank">Discord</Link>
                <Link className="hover:text-primary" href="https://twitter.com/codestoryai" rel="noopener noreferrer" target="_blank">Twitter</Link>
                <Link className="hover:text-primary" href="https://www.linkedin.com/company/codestory-ai/" rel="noopener noreferrer" target="_blank">LinkedIn</Link>
              </div>
            </div>
          </CardContent>
        </Card>
        <Image
          alt="Aide screenshot"
          className="rounded-lg col-span-4 row-span-1 row-start-2"
          src={TeamPhoto}
        />
        <Card className="p-0 col-span-4 row-span-2 border-0 bg-zinc-100 flex flex-col items-center justify-center">
          <Image
            alt="CodeStory Logo"
            height={280}
            src={CSLogo}
            width={280}
          />
          <p className="text-center text-2xl font-bold">
            A CodeStory product
          </p>
        </Card>
      </div>
    </footer>
  )
}
