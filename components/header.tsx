"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  user: User | null;
  logoSuffix?: {
    path?: string;
    text: string;
  };
}

export default function Header({ user, logoSuffix }: HeaderProps) {
  return (
    <div className="absolute w-screen retro-navbar">
      <div className="max-w-screen-2xl m-auto p-8 md:p-12 flex items-center justify-between text-2xl">
        <div className="flex items-center">
          <Link className="flex items-center" href="/">
            <Image
              alt="CodeStory Logo"
              height={32}
              priority
              src="/aide-white.svg"
              width={48}
            />
            <p className="pl-2 text-foreground font-bold">Aide</p>
          </Link>
          {logoSuffix ? (
            <p className="pl-2 text-foreground font-bold">
              {logoSuffix.path ? (
                <Link href={logoSuffix.path}>{logoSuffix.text}</Link>
              ) : (
                logoSuffix.text
              )}
            </p>
          ) : (
            <React.Fragment />
          )}
        </div>
        <div className="flex md:hidden items-center">
          <Link href="/account" className="font-bold">
            {user ? "Account" : "Join waitlist"}
          </Link>
        </div>
        <div className="fixed bottom-4 left-0 hidden md:flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <NavigationMenu className="cursor-pointer">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/blog"
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="https://github.com/codestoryai/binaries/releases"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Releases
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="https://docs.codestory.ai"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Docs
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent/50 to-aceent/20 p-2 no-underline outline-none focus:shadow-md"
                          href="https://codestory.ai"
                          target="_blank"
                        >
                          <div>
                            <Image
                              alt="CodeStory Logo"
                              height={72}
                              priority
                              src="/cs-logomark.svg"
                              width={72}
                            />
                            <div className="m-2 text-xl font-bold">
                              CodeStory
                            </div>
                            <p className="m-2 mt-0 text-base leading-tight text-muted-foreground">
                              Get to know the company behind Aide.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <Link href="https://codestory.ai" target="_blank">
                      <ListItem title="Team">
                        Aide is built by a team of four based in London, United
                        Kingdom.
                      </ListItem>
                    </Link>
                    <Link
                      href="https://www.workatastartup.com/companies/codestory"
                      target="_blank"
                    >
                      <ListItem title="Careers">
                        Work with us to re-imagine software engineering for the
                        coming decade.
                      </ListItem>
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/account"
                >
                  <span className="font-bold">
                    {user ? "Account" : "Join waitlist"}
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="https://discord.gg/mtgrhXM5Xf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    alt="Discord Link"
                    height={20}
                    priority
                    src="/discord-mark.svg"
                    width={20}
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
