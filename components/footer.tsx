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
    <footer className="p-8 md:p-12 bg-gray-200/10 text-sm">
      <div className="max-w-screen-xl m-auto flex flex-col gap-5">
        <div className="grid md:grid-cols-3 justify-center md:justify-normal gap-8 md:text-lg">
          <div className="flex gap-8 justify-center md:justify-start">
          <Link className="flex gap-2 items-start md:mr-auto" href="https://codestory.ai" target="_blank">
              <Image
                alt="CodeStory Logo"
                className="-mt-1.5"
                height={48}
                src={CSLogo}
                width={48}
              />
              <p className="text-center font-semibold text-2xl">
                CodeStory
              </p>
          </Link>
          </div>
          <div className="flex gap-8 justify-center">
            <Link className="hover:text-primary font-medium" href="https://docs.codestory.ai" rel="noopener noreferrer" target="_blank">Docs</Link>
            <Link className="hover:text-primary font-medium" href="https://github.com/codestoryai/binaries/releases" rel="noopener noreferrer" target="_blank">Releases</Link>
            <Link className="hover:text-primary font-medium" href="/blog">Blog</Link>
          </div>
          <div className="flex gap-8 justify-center md:justify-start items-center md:ml-auto">
            <Link className="hover:text-primary" href="https://twitter.com/aide_dev" rel="noopener noreferrer" target="_blank">
              <Image
                  alt="X (previously Twitter) Link"
                  height={20}
                  priority
                  src="/x-mark.svg"
                  width={20}
                />
            </Link>
            <Link className="hover:text-primary" href="https://discord.gg/mtgrhXM5Xf" rel="noopener noreferrer" target="_blank">
               <Image
                alt="Discord Link"
                height={20}
                priority
                src="/discord-mark.svg"
                width={20}
              />
            </Link>
            <Link className="hover:text-primary" href="https://www.linkedin.com/company/codestory-ai/" rel="noopener noreferrer" target="_blank">
              <Image
                  alt="Linkedin Link"
                  height={20}
                  priority
                  src="/linkedin-logo.svg"
                  width={20}
                />
            </Link>
          </div>
        </div>
        <div className="h-px w-full bg-gray-200"/>
        <span className="self-center text-gray-500 font-normal">© Codestory {new Date().getFullYear()}</span>
      </div>

    </footer>
  )
}
