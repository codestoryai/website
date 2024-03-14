'use client';

import { Download } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle, NavigationMenuTrigger, NavigationMenuContent, ListItem } from "@/components/ui/navigation-menu";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

import AideDesktopSS from "../public/aide-desktop.png";

export default function Home() {
  return (
    <main className="items-center justify-between p-12 font-replica antialiased bg-noise bg-background">
      <div className="max-w-screen-2xl m-auto items-center justify-between text-2xl lg:flex">
        <div className="flex items-center">
          <Image
            src="/aide-white.svg"
            alt="CodeStory Logo"
            width={48}
            height={32}
            priority
          />
          <p className="pl-2 text-foreground font-bold">
            Aide
          </p>
        </div>
        <div className="fixed bottom-4 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <NavigationMenu className="cursor-pointer">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
                          href="https://codestory.ai"
                        >
                          <Image
                            src="/cs-logomark.svg"
                            alt="CodeStory Logo"
                            width={48}
                            height={48}
                            priority
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
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem
                      title="Docs"
                      href="/docs"
                    >
                      Latest documentation for Aide.
                    </ListItem>
                    <ListItem
                      title="Releases"
                      href="/releases"
                    >
                      Stay up-to-date on new changes to Aide.
                    </ListItem>
                    <ListItem
                      title="Blog"
                      href="/blog"
                    >
                      Read about our thoughts and challenges behind building Aide.
                    </ListItem>
                    <ListItem
                      title="Open Source"
                      href="/open-source"
                    >
                      Take a look under the hood at some of our Open Source components.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Enterprise</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-1 w-[200px] gap-3 p-4 lg:w-[300px]">
                    <ListItem
                      title="Overview"
                      href="/"
                    >
                      Understand Aide&apos;s Enterprise offering.
                    </ListItem>
                    <ListItem
                      title="Contact Sales"
                      href="/"
                    >
                      Want to learn more, or ready to onboard? Speak with us!
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-semibold`}>Download</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto my-12 flex flex-col">
        <p className="text-6xl text-foreground">
          Code with the <span className="text-primary">speed</span> and <span className="text-primary">knowledge</span> of the best programmer you know.{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="underline underline-offset-8 decoration-2">Aide</span>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="text-xl">AI + IDE</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> is by your side.
        </p>
        <div className="my-8 flex flex-col items-center w-fit">
          <Button variant="outline" size="lg">
            <div className="flex items-center">
              <div className="flex flex-col">
                <p className="text-3xl">Download for MacOS</p>
                <p className="text-lg">Apple Silicon</p>
              </div>
              <Download className="ml-4" />
            </div>
          </Button>
          <Button variant="link" className="text-md text-foreground">Looking for a different platform?</Button>
        </div>
        <Image
          className="mt-8 rounded-lg border shadow-xl"
          src={AideDesktopSS}
          alt="Aide screenshot"
          priority
        />
      </div>
    </main>
  );
}
