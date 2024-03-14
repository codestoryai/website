'use client';

import { ArrowRightFromLine, BellRing, LockKeyhole, MessagesSquare } from "lucide-react";
import Image from "next/image";

import ScrollToTopButton from "@/components/downloadButton";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Kbd } from "@/components/ui/kbd";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import AideDesktopSS from "../public/aide-desktop.png";

const lspSupportedLanguages = [
  {
    title: "TypeScript",
    logo: "/languages/ts-logo-128.svg",
    size: 48
  },
  {
    title: "JavaScript",
    logo: "/languages/javascript-logo.png",
    size: 48
  },
  {
    title: "Python",
    logo: "/languages/python-logo.svg",
    size: 36
  },
  {
    title: "Rust",
    logo: "/languages/rust-logo.svg",
    size: 72
  },
  {
    title: "Golang",
    logo: "/languages/go-logo.svg",
    size: 72
  },
]

export default function Home() {
  return (
    <main className="antialiased">
      <Header />
      <div className="p-12 pt-24 bg-noise bg-background">
        <Hero />
      </div>
      <div className="p-12 pt-24 bg-yellow-200 overflow-hidden border-t border-t-muted">
        <div className="max-w-screen-xl m-auto">
          <div>
            <h4 className="flex text-lg font-bold">
              <ArrowRightFromLine className="mr-2" />Code Completion
            </h4>
            <h2 className="mt-8 mb-12 text-6xl font-bold">AI-powered code suggestions, built-in.</h2>
          </div>
          <div className="grid grid-cols-6 gap-16">
            <div className="col-span-2">
              <p className="text-3xl font-light">
                Fast, intelligent and context-aware code completions. Aide doesn&apos;t just look at your active files, but it also
                hooks with the Language Server to navigate and utilise related code for{" "}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="underline decoration-dotted underline-offset-8 decoration-2">a growing list of languages.</span>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <Card className="w-[380px] border-none shadow-none">
                        <CardHeader>
                          <CardTitle>Languages with LSP integration</CardTitle>
                          <CardDescription>New languages are being added every week.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-7 gap-1 place-items-center">
                          {lspSupportedLanguages.map((language, index) => (
                            <Image
                              key={index}
                              src={language.logo}
                              alt={`${language.title} Logo`}
                              width={language.size}
                              height={language.size}
                            />
                          ))}
                        </CardContent>
                      </Card>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <br /><br />
                <Kbd>tab</Kbd> can be your best friend.
              </p>
            </div>
            <div className="col-span-4 overflow-visible">
              <div className="transform scale-125 origin-top-left">
                <Image
                  className="rounded-lg border border-muted shadow-xl max-w-screen-md"
                  src={AideDesktopSS}
                  alt="Aide screenshot"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-12 pt-24 bg-green-200 overflow-hidden border-t border-t-muted">
        <div className="max-w-screen-xl m-auto">
          <div>
            <h4 className="flex text-lg font-bold">
              <MessagesSquare className="mr-2" />Chat
            </h4>
            <h2 className="mt-8 mb-12 text-6xl font-bold">Have a question? Ask anywhere!</h2>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-4 overflow-visible">
              <div className="transform scale-125 origin-top-right">
                <Image
                  className="rounded-lg border border-muted shadow-xl max-w-screen-md"
                  src={AideDesktopSS}
                  alt="Aide screenshot"
                  priority
                />
              </div>
            </div>
            <div className="col-span-2">
              <p className="text-3xl font-light">
                Invoke a chat conversation with Aide anytime by pressing <Kbd>⌘ + ctrl + I</Kbd>,
                or just <Kbd>⌘ + I</Kbd> to start one right within the file. Use <Kbd>#</Kbd> to refer files or code symbols
                you want to ask about, or just highlight some code and press <Kbd>⌘ + L</Kbd>.
                <br /><br />
                It&apos;s all a few keystrokes away!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-12 pt-24 bg-purple-200 overflow-hidden border-t border-t-muted">
        <div className="max-w-screen-xl m-auto">
          <div>
            <h4 className="flex text-lg font-bold">
              <LockKeyhole className="mr-2" />Privacy
            </h4>
            <h2 className="mt-8 mb-12 text-6xl font-bold">We never see your code.</h2>
          </div>
          <div className="grid grid-cols-6 gap-16">
            <div className="col-span-2">
              <p className="text-3xl font-light">
                Aide is architected to run entirely on your machine — there are no servers between the IDE and the language model.
                If you&apos;d like, we can also host the best coding models on your infrastructure.
                <br /><br />
                So, go, open up your top-secret codebase. Or the messiest one.
              </p>
            </div>
            <div className="col-span-4 overflow-visible">
              <div className="transform scale-125 origin-top-left">
                <Image
                  className="rounded-lg border border-muted shadow-xl max-w-screen-md"
                  src={AideDesktopSS}
                  alt="Aide screenshot"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-12 pt-24 bg-slate-800 text-background overflow-hidden border-t border-t-muted">
        <div className="max-w-screen-xl m-auto">
          <div>
            <h4 className="flex text-lg font-bold">
              <MessagesSquare className="mr-2" />AI Developers
            </h4>
            <h2 className="mt-8 mb-12 text-6xl font-bold">
              The future of AI is Open Source.
            </h2>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-4 overflow-visible">
              <div className="transform scale-125 origin-top-right">
                <Image
                  className="rounded-lg border border-muted shadow-xl max-w-screen-md"
                  src={AideDesktopSS}
                  alt="Aide screenshot"
                  priority
                />
              </div>
            </div>
            <div className="col-span-2">
              <p className="text-3xl font-light">
                Aide lets you pick an infra provider and model of choice, add your API key and just start coding.
                All queries made to the model are available to you in a SQLite DB locally, and our{" "}
                <a href="https://github.com/codestoryai/prompts" target="_blank" rel="noopener noreferrer">
                  <span className="underline underline-offset-8 cursor-pointer">prompts are Open Source</span>
                </a>.
                <br /><br />
                So, if you love working with Open Source models and/or fine-tuning them, we&apos;d love
                to make it easy for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </main >
  );
}
