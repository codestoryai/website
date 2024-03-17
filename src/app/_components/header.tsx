"use client";

import { ListItem, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/app/_components/ui/navigation-menu";
import { scrollToBottom } from "@/app/_utilities/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  logoSuffix?: {
    path?: string;
    text: string;
  }
}

export default function Header({ logoSuffix }: HeaderProps) {
  return (
    <div className="absolute w-screen">
      <div className="max-w-screen-2xl m-auto p-12 flex items-center justify-between text-2xl">
        <div className="flex items-center">
          <Link className="flex items-center" href="/">
            <Image
              alt="CodeStory Logo"
              height={32}
              priority
              src="/aide-white.svg"
              width={48}
            />
            <p className="pl-2 text-foreground font-bold">
              Aide
            </p>
          </Link>
          {
            logoSuffix
              ?
              <p className="pl-2 text-foreground font-bold">
                {logoSuffix.path ? <Link href={logoSuffix.path}>{logoSuffix.text}</Link> : logoSuffix.text}
              </p>
              :
              <React.Fragment />
          }
        </div>
        <div className="fixed bottom-4 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <NavigationMenu className="cursor-pointer">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem
                      href="/docs"
                      title="Docs"
                    >
                      Latest user documentation for Aide.
                    </ListItem>
                    <ListItem
                      href="/releases"
                      title="Releases"
                    >
                      Stay up-to-date on new changes to Aide.
                    </ListItem>
                    <ListItem
                      href="/blog"
                      title="Blog"
                    >
                      Read our thoughts and challenges behind building Aide.
                    </ListItem>
                    <ListItem
                      href="https://github.com/codestoryai"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Open Source"
                    >
                      Look under-the-hood at our Open Source projects.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Enterprise</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-1 w-[200px] gap-3 p-4 lg:w-[300px]">
                    <ListItem
                      href="/"
                      title="Overview"
                    >
                      Understand Aide&apos;s Enterprise offering.
                    </ListItem>
                    <ListItem
                      href="/"
                      title="Contact Sales"
                    >
                      Want to learn more, or ready to onboard? Speak with us!
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
                          href="https://codestory.ai"
                        >
                          <Image
                            alt="CodeStory Logo"
                            height={48}
                            priority
                            src="/cs-logomark.svg"
                            width={48}
                          />
                          <div className="m-2 text-lg font-semibold">
                            CodeStory
                          </div>
                          <p className="m-2 mt-0 text-sm leading-tight text-muted-foreground">
                            Get to know the company behind Aide.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs/installation" title="Manifesto">
                      What we stand for, and why it matters.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Team">
                      Aide is built by a team of two based in London, United Kingdom.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Careers">
                      Work with us to re-imagine software engineering for the coming decade.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-semibold`}
                  onClick={scrollToBottom}
                >Download</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
}