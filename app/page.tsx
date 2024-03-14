'use client';

import { Download } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
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
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Docs</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Releases</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
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
                <span className="underline decoration-2">Aide</span>
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
