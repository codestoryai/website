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

interface User {
    id?: string;
    name?: string;
}

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
            {/* Code Completion Section */}
            <div className="overflow-hidden border-t border-t-muted bg-gradient-to-b from-yellow-200 to-yellow-100/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-screen-xl">
                    <div className="mb-12">
                        <h4 className="flex text-lg font-bold text-yellow-700 tracking-wider transform hover:scale-105 transition-transform">
                            <ArrowRightFromLine className="mr-2" />
                            Code Completion
                        </h4>
                        <h2 className="mt-4 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-700 to-yellow-900 bg-clip-text text-transparent transform hover:scale-[1.02] transition-transform md:text-7xl">
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
                            <div className="origin-top-left transform transition-transform duration-300 hover:scale-[1.15] md:scale-110">
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

            {/* Chat Section */}
            <div className="overflow-hidden border-t border-t-muted bg-gradient-to-b from-green-200 to-green-100/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-screen-xl">
                    <div className="mb-12">
                        <h4 className="flex text-lg font-bold text-green-700 tracking-wider transform hover:scale-105 transition-transform">
                            <MessagesSquare className="mr-2" />
                            Chat
                        </h4>
                        <h2 className="mt-4 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent transform hover:scale-[1.02] transition-transform md:text-7xl">
                            Have a question? Ask anywhere!
                        </h2>
                    </div>
                    <div className="grid grid-cols-6 gap-8 md:gap-16">
                        <div className="col-span-full overflow-visible md:col-span-4">
                            <div className="origin-top-right transform transition-transform duration-300 hover:scale-[1.15] md:scale-110">
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

            {/* Privacy Section */}
            <div className="overflow-hidden border-t border-t-muted bg-gradient-to-b from-purple-200 to-purple-100/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-screen-xl">
                    <div className="mb-12">
                        <h4 className="flex text-lg font-bold text-purple-700 tracking-wider transform hover:scale-105 transition-transform">
                            <LockKeyhole className="mr-2" />
                            Privacy
                        </h4>
                        <h2 className="mt-4 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent transform hover:scale-[1.02] transition-transform md:text-7xl">
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
                            <div className="origin-top-left transform transition-transform duration-300 hover:scale-[1.15] md:scale-110">
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

            {/* AI Developers Section */}
            <div className="overflow-hidden border-t border-t-muted bg-gradient-to-b from-zinc-900 to-zinc-800 px-4 py-16 text-background sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-screen-xl">
                    <div className="mb-12">
                        <h4 className="flex text-lg font-bold text-zinc-300 tracking-wider transform hover:scale-105 transition-transform">
                            <Braces className="mr-2" />
                            AI Developers
                        </h4>
                        <h2 className="mt-4 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-300 to-white bg-clip-text text-transparent transform hover:scale-[1.02] transition-transform md:text-7xl">
                            The future of AI is Open Source.
                        </h2>
                    </div>
                    <div className="grid grid-cols-6 gap-8 md:gap-16">
                        <div className="col-span-full overflow-visible md:col-span-4">
                            <div className="origin-top-right transform transition-transform duration-300 hover:scale-[1.15] md:scale-110">
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

            {/* VSCode Integration Section */}
            <div className="border-t border-t-muted bg-gradient-to-b from-background to-gray-50/50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center">
                    <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent transform hover:scale-[1.02] transition-transform md:text-6xl text-center mb-8">
                        Built on top of{" "}
                        <a
                            href="https://code.visualstudio.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="underline decoration-primary/50 underline-offset-4 transition-colors hover:decoration-primary"
                        >
                            VSCode
                        </a>
                        .
                    </h2>
                    <div className="flex items-center py-8">
                        <Image
                            alt="VSCode Logo"
                            className="mr-4 transition-transform hover:scale-110"
                            height={48}
                            src={VSCodeLogo}
                            width={48}
                        />
                        <ArrowRight className="text-primary" />
                        <Image
                            alt="Aide Logo"
                            className="ml-3 transition-transform hover:scale-110"
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

            {/* Download Section */}
            <div className="border-t border-t-muted bg-gradient-to-b from-gray-50/50 to-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-screen-xl">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent transform hover:scale-[1.02] transition-transform md:text-6xl text-center mb-12">
                            Try out an AI-native editor experience
                        </h2>
                        <div className="my-16 grid w-full max-w-screen-lg gap-8 md:grid-cols-3">
                            {/* MacOS Download Section */}
                            <div className="flex flex-col items-center rounded-lg bg-white/50 p-6 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-6 flex items-center">
                                    <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24">
                                        <path d="M22.2,16.9c-0.4,1.2-0.9,2.4-1.5,3.5c-0.9,1.5-1.7,2.6-2.2,3.3c-0.9,1.3-1.9,2-2.9,2c-0.7,0-1.6-0.2-2.7-0.7c-1.1-0.5-2-0.7-2.9-0.7c-0.9,0-1.9,0.2-3,0.7c-1.1,0.5-1.9,0.7-2.6,0.7c-1,0-2-0.7-3-2c-0.6-0.7-1.4-1.8-2.3-3.3c-1-1.6-1.8-3.4-2.4-5.4c-0.6-2.2-0.9-4.3-0.9-6.3c0-2.3,0.5-4.3,1.5-6c0.8-1.3,1.8-2.4,3.1-3.1c1.3-0.7,2.7-1.1,4.2-1.1c0.8,0,1.9,0.3,3.3,0.8c1.4,0.5,2.2,0.8,2.6,0.8c0.3,0,1.3-0.3,2.9-0.9c1.6-0.6,2.9-0.8,4-0.7c2.9,0.2,5.1,1.4,6.5,3.5c-2.6,1.6-3.9,3.8-3.9,6.6c0,2.2,0.8,4,2.4,5.4C20.1,15.9,21.1,16.5,22.2,16.9z M17.5,0.4c0,1.7-0.6,3.3-1.9,4.8c-1.5,1.7-3.3,2.7-5.3,2.6c0-0.2,0-0.4,0-0.6c0-1.6,0.7-3.2,1.9-4.6c0.6-0.7,1.4-1.3,2.3-1.7C15.4,0.5,16.4,0.3,17.4,0C17.4,0.1,17.5,0.3,17.5,0.4z" fill="currentColor"/>
                                    </svg>
                                    <h4 className="ml-3 text-xl font-bold">
                                        MacOS
                                    </h4>
                                </div>
                                <div className="flex flex-col items-center space-y-2">
                                    <Button asChild variant="outline" className="w-full">
                                        <a href="#download-macos">Download for MacOS</a>
                                    </Button>
                                    <p className="text-sm text-muted-foreground">Available for Intel and Apple Silicon</p>
                                </div>
                            </div>

                            {/* Windows Download Section */}
                            <div className="flex flex-col items-center rounded-lg bg-white/50 p-6 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-6 flex items-center">
                                    <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24">
                                        <path d="M0,3.449L9.75,2.1V11.551H0ZM10.949,1.949L24,0V11.4H10.949ZM0,12.6H9.75V22.051L0,20.699ZM10.949,12.6H24V24L11.1,22.1" fill="currentColor"/>
                                    </svg>
                                    <h4 className="ml-3 text-xl font-bold">
                                        Windows
                                    </h4>
                                </div>
                                <div className="flex flex-col items-center space-y-2">
                                    <Button asChild variant="outline" className="w-full">
                                        <a href="#download-windows">Download for Windows</a>
                                    </Button>
                                    <p className="text-sm text-muted-foreground">Available for x64 and ARM64</p>
                                </div>
                            </div>

                            {/* Linux Download Section */}
                            <div className="flex flex-col items-center rounded-lg bg-white/50 p-6 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-6 flex items-center">
                                    <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24">
                                        <path d="M12.504,0c-0.155,0-0.315,0.008-0.48,0.021c-0.646,0.053-1.28,0.208-1.875,0.452c-0.591,0.244-1.13,0.57-1.595,0.973c-0.465,0.403-0.854,0.873-1.154,1.409c-0.302,0.537-0.49,1.116-0.563,1.737c-0.074,0.62-0.035,1.249,0.117,1.886c0.152,0.637,0.414,1.245,0.779,1.82c0.366,0.574,0.833,1.079,1.399,1.512c0.532,0.408,1.135,0.723,1.808,0.945c0.672,0.223,1.385,0.34,2.139,0.35c0.753,0.01,1.47-0.088,2.142-0.292c0.671-0.204,1.282-0.502,1.824-0.891c0.543-0.389,1.018-0.859,1.419-1.408c0.401-0.549,0.71-1.159,0.926-1.828c0.217-0.669,0.332-1.37,0.342-2.098c0.011-0.728-0.087-1.43-0.292-2.098c-0.204-0.669-0.502-1.279-0.891-1.822c-0.389-0.544-0.859-1.019-1.408-1.419c-0.549-0.401-1.159-0.71-1.828-0.926c-0.669-0.217-1.37-0.332-2.098-0.342c-0.153-0.002-0.31-0.001-0.461,0.001z" fill="currentColor"/>
                                    </svg>
                                    <h4 className="ml-3 text-xl font-bold">
                                        Linux
                                    </h4>
                                </div>
                                <div className="flex flex-col items-center space-y-2">
                                    <Button asChild variant="outline" className="w-full">
                                        <a href="#download-linux">Download for Linux</a>
                                    </Button>
                                    <p className="text-sm text-muted-foreground">Available for x64 and ARM64</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
