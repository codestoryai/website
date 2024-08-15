'use client'

import CSLogo from "@/public/cs-logomark.svg";
import TeamPhoto from "@/public/team.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Card, CardContent } from "./ui/card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Footer() {
  

  const pathname = usePathname()
  const isBlogPost = pathname.startsWith('/blog/')

  return (
    <footer className="p-8 md:p-12 bg-white text-sm">
      <div className="max-w-screen-xl m-auto grid grid-cols-8 gap-6">
        <Card className={cn(isBlogPost ? "row-span-2" : "row-span-1", "p-4 md:p-8 col-span-full md:col-span-4 border-0 bg-zinc-100")}>
          <CardContent className="pt-0 pb-0">
            <div className="grid grid-cols-2 gap-4 md:text-lg">
              <div className="col-span-1 flex flex-col font-semibold gap-2">
                <Link className="hover:text-primary" href="https://docs.codestory.ai" rel="noopener noreferrer" target="_blank">Docs</Link>
                <Link className="hover:text-primary" href="https://github.com/codestoryai/binaries/releases" rel="noopener noreferrer" target="_blank">Releases</Link>
                <Link className="hover:text-primary" href="/blog">Blog</Link>
              </div>
              <div className="col-span-1 flex flex-col font-semibold gap-2">
                <Link className="hover:text-primary" href="https://discord.gg/mtgrhXM5Xf" rel="noopener noreferrer" target="_blank">Discord</Link>
                <Link className="hover:text-primary" href="https://twitter.com/codestoryai" rel="noopener noreferrer" target="_blank">Twitter</Link>
                <Link className="hover:text-primary" href="https://www.linkedin.com/company/codestory-ai/" rel="noopener noreferrer" target="_blank">LinkedIn</Link>
              </div>
            </div>
          </CardContent>
        </Card>
        {!isBlogPost && (
            <Image
            alt="Team"
            className="rounded-lg col-span-full md:col-span-4 row-span-1 row-start-2"
            src={TeamPhoto}
          />
        )}
        <Link className="col-span-full md:col-span-4 row-span-2" href="https://codestory.ai" target="_blank">
          <Card className="p-8 w-full h-full border-0 bg-zinc-100 flex flex-col items-center justify-center hover:bg-secondary/20">
            <Image
              alt="CodeStory Logo"
              height={200}
              src={CSLogo}
              width={200}
            />
            <p className="text-center text-2xl font-bold pt-4">
              A CodeStory product
            </p>
          </Card>
        </Link>
      </div>
    </footer>
  )
}
