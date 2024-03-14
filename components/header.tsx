import Image from "next/image";

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle, NavigationMenuTrigger, NavigationMenuContent, ListItem } from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <div className="absolute w-screen">
      <div className="max-w-screen-2xl m-auto p-12 flex items-center justify-between text-2xl">
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
                      href="https://github.com/codestoryai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Take a look under the hood at some of our Open Source components.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
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
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
              </NavigationMenuItem>
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
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-semibold`}>Download</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
}