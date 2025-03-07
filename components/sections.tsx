import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Kbd } from "@/components/ui/kbd";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import AideLogo from "@/public/aide-white.svg";
import ChatSS from "@/public/screenshots/chat.png";
import CopilotSS from "@/public/screenshots/copilot.png";
import ModelSelectionSS from "@/public/screenshots/modelselection.png";
import OfflineSS from "@/public/screenshots/offline.png";
import VSCodeLogo from "@/public/vscode.svg";
import {
    ArrowRight,
    ArrowRightFromLine,
    Braces,
    LockKeyhole,
    MessagesSquare,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const lspSupportedLanguages = [
    {
        logo: "/languages/ts-logo-128.svg",
        size: 48,
        title: "TypeScript",
    },
    {
        logo: "/languages/javascript-logo.png",
        size: 48,
        title: "JavaScript",
    },
    {
        logo: "/languages/python-logo.svg",
        size: 36,
        title: "Python",
    },
    {
        logo: "/languages/rust-logo.svg",
        size: 72,
        title: "Rust",
    },
    {
        logo: "/languages/go-logo.svg",
        size: 72,
        title: "Golang",
    },
];

interface SectionProps {
    user: User | null;
}

export default function Sections({ user }: SectionProps) {
    return (
        <div>
            <div className="overflow-hidden border-t border-t-muted bg-yellow-200 p-8 pt-24 md:p-12">
                <div className="m-auto max-w-screen-xl">
                    <div>
                        <h4 className="flex text-lg font-bold">
                            <ArrowRightFromLine className="mr-2" />
                            Code Completion
                        </h4>
                        <h2 className="mb-12 mt-4 text-4xl font-bold md:mt-8 md:text-6xl">
                            AI-powered code suggestions, built-in.
                        </h2>
                    </div>
                    <div className="grid grid-cols-6 gap-8 md:gap-16">
                        <div className="col-span-full md:col-span-2">
                            <p className="text-xl font-light md:text-3xl">
                                Fast, intelligent and context-aware code
                                completions. Aide doesn&apos;t just look at your
                                active files, but it also hooks with the
                                Language Server to navigate and utilise related
                                code for{" "}
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span className="underline decoration-dotted decoration-2 underline-offset-8">
                                            a growing list of languages.
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <Card className="w-[380px] border-none shadow-none">
                                            <CardHeader>
                                                <CardTitle>
                                                    Languages with LSP
                                                    integration
                                                </CardTitle>
                                                <CardDescription>
                                                    New languages are being
                                                    added every week.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="grid grid-cols-7 place-items-center gap-1">
                                                {lspSupportedLanguages.map(
                                                    (language, index) => (
                                                        <Image
                                                            alt={`${language.title} Logo`}
                                                            height={
                                                                language.size
                                                            }
                                                            key={index}
                                                            src={language.logo}
                                                            width={
                                                                language.size
                                                            }
                                                        />
                                                    )
                                                )}
                                            </CardContent>
                                        </Card>
                                    </TooltipContent>
                                </Tooltip>
                                <br />
                                <br />
                                <Kbd>tab</Kbd> can be your best friend.
                            </p>
                        </div>
                        <div className="col-span-full overflow-visible md:col-span-4">
                            <div className="origin-top-left transform md:scale-125">
                                <Image
                                    alt="Inline completion"
                                    className="max-w-screen-md rounded-lg border border-muted shadow-xl"
                                    priority
                                    src={CopilotSS}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden border-t border-t-muted bg-green-200 p-8 pt-24 md:p-12">
                <div className="m-auto max-w-screen-xl">
                    <div>
                        <h4 className="flex text-lg font-bold">
                            <MessagesSquare className="mr-2" />
                            Chat
                        </h4>
                        <h2 className="mb-12 mt-4 text-4xl font-bold md:mt-8 md:text-6xl">
                            Have a question? Ask anywhere!
                        </h2>
                    </div>
                    <div className="grid grid-cols-6 gap-8 md:gap-16">
                        <div className="col-span-full overflow-visible md:col-span-4">
                            <div className="origin-top-right transform md:scale-125">
                                <Image
                                    alt="Chat"
                                    className="max-w-screen-md rounded-lg border border-muted shadow-xl"
                                    priority
                                    src={ChatSS}
                                />
                            </div>
                        </div>
                        <div className="col-span-full md:col-span-2">
                            <p className="text-xl font-light md:text-3xl">
                                Invoke a chat conversation with Aide anytime by
                                pressing <Kbd>⌘ + ctrl + I</Kbd>, or just{" "}
                                <Kbd>⌘ + I</Kbd> to start one right within the
                                file. Use <Kbd>#</Kbd> to refer files or code
                                symbols you want to ask about, or just highlight
                                some code and press <Kbd>⌘ + L</Kbd>.
                                <br />
                                <br />
                                It&apos;s all a few keystrokes away!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden border-t border-t-muted bg-purple-200 p-8 pt-24 md:p-12">
                <div className="m-auto max-w-screen-xl">
                    <div>
                        <h4 className="flex text-lg font-bold">
                            <LockKeyhole className="mr-2" />
                            Privacy
                        </h4>
                        <h2 className="mb-12 mt-4 text-4xl font-bold md:mt-8 md:text-6xl">
                            We never see your code.
                        </h2>
                    </div>
                    <div className="grid grid-cols-6 gap-8 md:gap-16">
                        <div className="col-span-full md:col-span-2">
                            <p className="text-xl font-light md:text-3xl">
                                Aide is architected to run entirely on your
                                machine — there are no servers between the IDE
                                and the language model. If you&apos;d like, we
                                can also host the best coding models on your
                                infrastructure.
                                <br />
                                <br />
                                So, go, open up your top-secret codebase. Or the
                                messiest one.
                            </p>
                        </div>
                        <div className="col-span-full overflow-visible md:col-span-4">
                            <div className="origin-top-left transform md:scale-125">
                                <Image
                                    alt="Offline functionality"
                                    className="max-w-screen-md rounded-lg border border-muted shadow-xl"
                                    priority
                                    src={OfflineSS}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden border-t border-t-muted bg-zinc-900 p-8 pt-24 text-background md:p-12">
                <div className="m-auto max-w-screen-xl">
                    <div>
                        <h4 className="flex text-lg font-bold">
                            <Braces className="mr-2" />
                            AI Developers
                        </h4>
                        <h2 className="mb-12 mt-4 text-4xl font-bold md:mt-8 md:text-6xl">
                            The future of AI is Open Source.
                        </h2>
                    </div>
                    <div className="grid grid-cols-6 gap-8 md:gap-16">
                        <div className="col-span-full overflow-visible md:col-span-4">
                            <div className="origin-top-right transform md:scale-125">
                                <Image
                                    alt="Model configuration support"
                                    className="max-w-screen-md rounded-lg border border-muted shadow-xl"
                                    priority
                                    src={ModelSelectionSS}
                                />
                            </div>
                        </div>
                        <div className="col-span-full md:col-span-2">
                            <p className="text-xl font-light md:text-3xl">
                                Aide lets you pick an infra provider and model
                                of choice, add your API key and just start
                                coding. All queries made to the model are
                                available to you in a SQLite DB locally, and our{" "}
                                <a
                                    href="https://github.com/codestoryai/prompts"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <span className="cursor-pointer underline underline-offset-8">
                                        prompts are Open Source
                                    </span>
                                </a>
                                .
                                <br />
                                <br />
                                So, if you love working with Open Source models
                                and/or fine-tuning them, we&apos;d love to make
                                it easy for you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-t-muted bg-background bg-noise px-8 py-8 md:px-12 md:py-12">
                <div className="m-auto flex max-w-screen-xl flex-col items-center justify-center">
                    <p className="text-center text-3xl font-bold">
                        Built on top of{" "}
                        <a
                            href="https://code.visualstudio.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="pl-1 underline underline-offset-4">
                                VSCode
                            </span>
                        </a>
                        .
                    </p>
                    <div className="flex items-center py-8">
                        <Image
                            alt="VSCode Logo"
                            className="mr-4"
                            height={48}
                            src={VSCodeLogo}
                            width={48}
                        />
                        <ArrowRight />
                        <Image
                            alt="Aide Logo"
                            className="ml-3"
                            height={72}
                            src={AideLogo}
                            width={72}
                        />
                    </div>
                    <p className="text-center text-xl">
                        All your settings, keybindings and extensions will{" "}
                        <span className="italic">just work!</span>
                        <br />
                        Look for the &lsquo;Import Settings and keybindings from
                        VSCode&rsquo; option in the settings.
                    </p>
                </div>
            </div>
            {/*
      <div className="px-8 md:px-12 bg-white border-t border-t-muted">
        <div className="max-w-screen-xl m-auto flex flex-col justify-center items-center">
          <p className="mt-16 text-3xl text-center font-extrabold">
            Try out an AI-native editor experience.
          </p>
          <div className="w-full grid grid-cols-9 gap-8 my-8 md:text-lg">
            <div className="col-span-full md:col-span-3 flex flex-col items-center">
              <h4 className="text-xl font-bold mb-4">
                MacOS
              </h4>
              {latestRelease.macOS
                ?
                <div className="grid grid-cols-4 w-full">
                  {(latestRelease.macOS.arm64?.dmg || latestRelease.macOS.amd64?.dmg) && (
                    <React.Fragment>
                      <p className="col-span-1 text-right pr-4">.dmg</p>
                      <div className="flex col-span-3">
                        {latestRelease.macOS.arm64?.dmg && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.macOS.arm64?.dmg}>Apple Silicon</a></Button>}
                        {latestRelease.macOS.amd64?.dmg && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.macOS.amd64?.dmg}>Intel Macs</a></Button>}
                      </div>
                    </React.Fragment>
                  )}
                  {(latestRelease.macOS.arm64?.zip || latestRelease.macOS.amd64?.zip) && (
                    <React.Fragment>
                      <p className="col-span-1 text-right pr-4">.zip</p>
                      <div className="flex col-span-3">
                        {latestRelease.macOS.arm64?.zip && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.macOS.arm64?.zip}>Apple Silicon</a></Button>}
                        {latestRelease.macOS.amd64?.zip && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.macOS.amd64?.zip}>Intel Macs</a></Button>}
                      </div>
                    </React.Fragment>
                  )}
                </div>
                :
                <div className="text-center">
                  <p>Looks like our build pipeline is broken!</p>
                  <p><span className="underline underline-offset-4 cursor-pointer">Click here</span> to let us know?</p>
                </div>
              }
            </div>
            <div className="col-span-full md:col-span-3 flex flex-col items-center">
              <h4 className="text-xl font-bold mb-4">
                Windows
              </h4>
              {latestRelease.Windows
                ?
                <div className="grid grid-cols-4 w-full">
                  {(latestRelease.Windows.arm64?.userInstaller || latestRelease.Windows.amd64?.userInstaller) && (
                    <React.Fragment>
                      <p className="col-span-2 text-right pr-4">User Installer</p>
                      <div className="flex col-span-2">
                        {latestRelease.Windows.amd64?.userInstaller && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.Windows.amd64?.userInstaller}>x64</a></Button>}
                        {latestRelease.Windows.arm64?.userInstaller && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.Windows.arm64?.userInstaller}>Arm64</a></Button>}
                      </div>
                    </React.Fragment>
                  )}
                  {(latestRelease.Windows.arm64?.systemInstaller || latestRelease.Windows.amd64?.systemInstaller) && (
                    <React.Fragment>
                      <p className="col-span-2 text-right pr-4">System Installer</p>
                      <div className="flex col-span-2">
                        {latestRelease.Windows.amd64?.systemInstaller && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.Windows.amd64?.systemInstaller}>x64</a></Button>}
                        {latestRelease.Windows.arm64?.systemInstaller && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.Windows.arm64?.systemInstaller}>Arm64</a></Button>}
                      </div>
                    </React.Fragment>
                  )}
                  {(latestRelease.Windows.arm64?.zip || latestRelease.Windows.amd64?.zip) && (
                    <React.Fragment>
                      <p className="col-span-2 text-right pr-4">.zip</p>
                      <div className="flex col-span-2">
                        {latestRelease.Windows.amd64?.zip && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.Windows.amd64?.zip}>x64</a></Button>}
                        {latestRelease.Windows.arm64?.zip && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.Windows.arm64?.zip}>Arm64</a></Button>}
                      </div>
                    </React.Fragment>
                  )}
                </div>
                :
                <div className="text-center">
                  <p>Looks like our build pipeline is broken!</p>
                  <p><span className="underline underline-offset-4 cursor-pointer">Click here</span> to let us know?</p>
                </div>
              }
            </div>
            <div className="col-span-full md:col-span-3 flex flex-col items-center">
              <h4 className="text-xl font-bold mb-4">
                Linux
              </h4>
              {latestRelease.Linux
                ?
                <div className="grid grid-cols-4 w-full">
                  {(latestRelease.Linux.amd64?.tar || latestRelease.Linux.armhf?.tar || latestRelease.Linux.arm64?.tar) && (
                    <React.Fragment>
                      <p className="col-span-1 text-right pr-4">.tar</p>
                      <div className="flex col-span-3">
                        {latestRelease.Linux.amd64?.tar && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.Linux.amd64?.tar}>x64</a></Button>}
                        {latestRelease.Linux.armhf?.tar && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.Linux.armhf?.tar}>Arm32</a></Button>}
                        {latestRelease.Linux.arm64?.tar && <Button className="p-0 mx-2 cursor-default" size="sm" variant="link"><a href={latestRelease.Linux.arm64?.tar}>Arm64</a></Button>}
                      </div>
                    </React.Fragment>
                  )}
                </div>
                :
                <div className="text-center">
                  <p>Looks like our build pipeline is broken!</p>
                  <p><span className="underline underline-offset-4 cursor-pointer">Click here</span> to let us know?</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      */}
        </div>
    );
}
