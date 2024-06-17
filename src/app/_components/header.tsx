'use client'

import {
  ListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/app/_components/ui/navigation-menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { DialogTrigger } from './waitlist'

interface HeaderProps {
  logoSuffix?: {
    path?: string
    text: string
  }
}

export default function Header({ logoSuffix }: HeaderProps) {
  return (
    <div className="absolute w-screen">
      <div className="max-w-screen-2xl m-auto p-8 md:p-12 flex items-center justify-between text-2xl">
        <div className="flex items-center">
          <Link className="flex items-center" href="/">
            <Image alt="CodeStory Logo" height={32} priority src="/aide-white.svg" width={48} />
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
        <div className="fixed bottom-4 left-0 hidden md:flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <NavigationMenu className="cursor-pointer">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem
                      href="https://docs.codestory.ai"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Docs"
                    >
                      Latest user documentation for Aide.
                    </ListItem>
                    <ListItem
                      href="https://github.com/codestoryai/binaries/releases"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Previous releases"
                    >
                      See previous releases of Aide.
                    </ListItem>
                    <ListItem href="/blog" title="Blog">
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
                    <ListItem href="/enterprise" title="Overview">
                      Understand Aide&apos;s Enterprise offering.
                    </ListItem>
                    <ListItem href="mailto:founders@codestory.ai" title="Contact Sales">
                      Want to learn more, or ready to onboard? Speak with us!
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/pricing">
                  Pricing
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
                            <div className="m-2 text-xl font-bold">CodeStory</div>
                            <p className="m-2 mt-0 text-base leading-tight text-muted-foreground">
                              Get to know the company behind Aide.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <Link href="https://codestory.ai" target="_blank">
                      <ListItem title="Team">
                        Aide is built by a team of three based in London, United Kingdom.
                      </ListItem>
                    </Link>
                    <Link href="https://www.workatastartup.com/companies/codestory" target="_blank">
                      <ListItem title="Careers">
                        Work with us to re-imagine software engineering for the coming decade.
                      </ListItem>
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <DialogTrigger asChild>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-semibold`}>
                    Join waitlist
                  </NavigationMenuLink>
                </DialogTrigger>
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
  )
}
