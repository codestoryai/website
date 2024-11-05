import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Downloads } from "@/lib/types";
import { DeviceDetails } from "@/lib/ua";
import {
    Brain,
    Code,
    Download,
    Github,
    Layers3,
    Lock,
    Undo,
    Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DownloadScroll from "./downloadscroll";

interface ComponentProps {
    deviceDetails: DeviceDetails | undefined;
    latestRelease: Downloads;
}

export default function Component({
    deviceDetails,
    latestRelease,
}: ComponentProps) {
    return (
        <div className="bg-background bg-noise">
            <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                    <section className="w-full bg-gray-50 px-2 py-32 xl:py-48">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Multi-file editing that works.
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                                    Real-world software is built on pre-existing
                                    code. Aide generates useful edits across
                                    vertical slices of your codebase.
                                </p>
                                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                    {deviceDetails ? (
                                        <Button className="w-full bg-green-600 hover:bg-green-700 sm:w-72">
                                            <a href={deviceDetails.url}>
                                                <div className="flex items-center justify-center">
                                                    <div className="flex flex-col">
                                                        <p className="text-xl">
                                                            Download for{" "}
                                                            {deviceDetails.os}
                                                        </p>
                                                        <p>
                                                            {deviceDetails.arch}
                                                        </p>
                                                    </div>
                                                    <Download className="ml-4" />
                                                </div>
                                            </a>
                                        </Button>
                                    ) : (
                                        <div className="w-full sm:w-72" />
                                    )}
                                    <Button
                                        variant="outline"
                                        className="w-full text-xl sm:w-72"
                                    >
                                        <div className="flex items-center justify-center">
                                            <p>View on GitHub</p>
                                            <Github className="ml-4" />
                                        </div>
                                    </Button>
                                </div>
                                <DownloadScroll />
                            </div>

                            <div className="relative mx-auto mt-16 max-w-[800px] px-4 sm:px-6">
                                <Card className="p-4 sm:p-6">
                                    <div className="relative aspect-video overflow-hidden rounded-lg">
                                        <Image
                                            alt="Placeholder"
                                            className="object-cover"
                                            height="300"
                                            src="/placeholder.svg"
                                            style={{
                                                aspectRatio: "533/300",
                                                objectFit: "cover",
                                            }}
                                            width="533"
                                        />
                                    </div>
                                </Card>
                                <div className="absolute -bottom-2 left-1/2 h-2 w-[95%] -translate-x-1/2 rounded-b-md bg-gray-300" />
                            </div>

                            <div className="mx-auto mt-16 max-w-[800px] px-4 text-center sm:px-6">
                                <p className="text-base sm:text-lg">
                                    Ever tried making <i>large</i> changes in a
                                    codebase using AI? If you are like me, you
                                    probably were very impressed –{" "}
                                    <b>at first</b>. The initial bliss quickly
                                    fades away when you realise the code will be
                                    very hard to maintain, or is flat out wrong.
                                </p>
                                <div className="mt-4 flex items-center justify-center gap-3">
                                    <Image
                                        className="rounded-full"
                                        src="/team/naresh.jpeg"
                                        style={{
                                            aspectRatio: "40/40",
                                            objectFit: "cover",
                                        }}
                                        width={40}
                                        height={40}
                                        alt="Naresh"
                                    />
                                    <div className="text-sm text-gray-500 sm:text-base">
                                        Naresh, CTO @ Codestory
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="relative">
                        <svg
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            overflow="visible"
                            className="absolute left-1/2 top-0 hidden h-full max-w-[1376px] -translate-x-1/2 text-gray-300 2xl:block"
                        >
                            <line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="100"
                                stroke="currentColor"
                                vectorEffect="non-scaling-stroke"
                                strokeDasharray={8}
                            />
                            <line
                                x1="100"
                                y1="0"
                                x2="100"
                                y2="100"
                                stroke="currentColor"
                                vectorEffect="non-scaling-stroke"
                                strokeDasharray={8}
                            />
                        </svg>

                        <section className="relative w-full py-12 md:py-24 lg:py-32">
                            <div className="container px-4 md:px-6 2xl:px-12">
                                <div className="flex flex-col-reverse items-center gap-6 lg:grid lg:grid-cols-2 lg:gap-12">
                                    <div className="space-y-4">
                                        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-left">
                                            Agentic. Aware.{" "}
                                            <span className="relative inline-block">
                                                Steerable.
                                                <svg
                                                    className="absolute -bottom-2 left-0 -z-10 h-4 w-full"
                                                    viewBox="0 0 300 20"
                                                    preserveAspectRatio="none"
                                                >
                                                    <path
                                                        d="M0,10 Q40,8 60,10 L240,10 Q260,12 300,10"
                                                        fill="none"
                                                        stroke="#fde047"
                                                        strokeWidth="8"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </span>
                                        </h2>
                                        <p className="mx-auto max-w-[700px] md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            Aide not only understands your
                                            codebase, but keeps track of
                                            previous editing sessions. It aligns
                                            more and more with your goals as you
                                            go along.{" "}
                                            <b>
                                                Effortlessly iterate, review and
                                                fill in possible gaps
                                            </b>
                                            , like you would while pair
                                            programming.
                                        </p>
                                        <blockquote className="pt-8 text-base leading-snug lg:leading-normal xl:text-lg">
                                            &ldquo;Insanity is doing the same
                                            thing over and over again and
                                            expecting different results&rdquo;
                                            &mdash; Einstein probably never said
                                            that, but this quote rings true when
                                            guiding agents to make large-scale
                                            edits with today&apos;s tools.
                                        </blockquote>
                                        <div className="flex items-center justify-start space-x-4 2xl:-ml-14">
                                            <Image
                                                className="rounded-full"
                                                height="40"
                                                src="/team/zi.jpeg"
                                                style={{
                                                    aspectRatio: "40/40",
                                                    objectFit: "cover",
                                                }}
                                                width="40"
                                                alt="Zi"
                                            />
                                            <div className="text-gray-500">
                                                Zi, Software Engineer @
                                                CodeStory
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative max-w-[600px] lg:max-w-none">
                                        <Card className="p-6">
                                            <div className="relative aspect-video overflow-hidden rounded-lg">
                                                <Image
                                                    alt="Placeholder"
                                                    className="object-cover w-full h-full"
                                                    src="/placeholder.svg"
                                                    style={{
                                                        objectFit: "cover",
                                                    }}
                                                    fill
                                                />
                                            </div>
                                        </Card>
                                        <div className="absolute -bottom-2 left-1/2 h-2 w-[95%] -translate-x-1/2 rounded-b-md bg-yellow-300" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full py-12 md:py-24 lg:py-32">
                            <div className="container px-4 md:px-6 2xl:px-12">
                                <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2 lg:gap-12">
                                    <div className="relative max-w-[600px] lg:max-w-none">
                                        <Card className="p-6">
                                            <div className="relative aspect-video overflow-hidden rounded-lg">
                                                <Image
                                                    alt="Placeholder"
                                                    className="object-cover"
                                                    src="/placeholder.svg"
                                                    style={{
                                                        objectFit: "cover",
                                                    }}
                                                    fill
                                                />
                                            </div>
                                        </Card>
                                        <div className="absolute -bottom-2 left-1/2 h-2 w-[95%] -translate-x-1/2 rounded-b-md bg-pink-300" />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-left">
                                            <span className="relative inline-block">
                                                Editor
                                                <svg
                                                    className="absolute -bottom-2 left-0 -z-10 h-4 w-full"
                                                    viewBox="0 0 200 20"
                                                    preserveAspectRatio="none"
                                                >
                                                    <path
                                                        d="M0,10 L20,7 L40,13 L60,7 L80,13 L100,7 L120,13 L140,7 L160,13 L180,7 L200,13"
                                                        fill="none"
                                                        stroke="#f9a8d4"
                                                        strokeWidth="6"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="ml-2">
                                                tooling for all
                                            </span>
                                        </h2>
                                        <p className="text-left mx-auto max-w-[700px] md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            Being in the editor not only keeps
                                            you in control, but gives Aide
                                            access to{" "}
                                            <b>the same tools developers use</b>
                                            . Our agents are aware of the side
                                            effects of their changes thanks to
                                            language features. We don&apos;t
                                            just wreak havoc on your code and
                                            leave you to clean up the mess.
                                        </p>
                                        <blockquote className="pt-8 text-base leading-snug lg:leading-normal xl:text-lg">
                                            What if LLMs could make edits across
                                            multiple files without breaking the
                                            logic? After a month of hacking, we
                                            tested our framework against{" "}
                                            <Link
                                                className="font-bold underline underline-offset-2"
                                                href="https://www.swebench.com"
                                            >
                                                SWE-Bench Lite
                                            </Link>{" "}
                                            and (kinda shockingly) became the
                                            SOTA, resolving 43% of the issues.
                                        </blockquote>
                                        <div className="flex items-center space-x-4 justify-end 2xl:-mr-14">
                                            <div className="text-gray-500">
                                                Sandeep, CEO @ CodeStory
                                            </div>
                                            <Image
                                                className="rounded-full"
                                                height="40"
                                                src="/team/sandeep.jpeg"
                                                style={{
                                                    aspectRatio: "40/40",
                                                    objectFit: "cover",
                                                }}
                                                width="40"
                                                alt="Sandeep"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full px-4 py-12 md:py-24 lg:py-32">
                            <div className="container px-4 md:px-6">
                                <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Features
                                </h2>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    <Card className="p-6">
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-green-50">
                                            <Brain className="h-8 w-8 text-green-600" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold">
                                            Deep reasoning
                                        </h3>
                                        <p className="text-gray-500">
                                            Enforce and expose deep reasoning
                                            behind complex changes. Break down
                                            large tasks into smaller units of
                                            work that follow a logical flow.
                                        </p>
                                    </Card>
                                    <Card className="p-6">
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-green-50">
                                            <Zap className="h-8 w-8 text-green-600" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold">
                                            Blazing-fast edits
                                        </h3>
                                        <p className="text-gray-500">
                                            With prompt caching and
                                            multi-location editing, you will be
                                            amazed by how little time occurs
                                            between pressing enter and reviewing
                                            the changes.
                                        </p>
                                    </Card>
                                    <Card className="p-6">
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-green-50">
                                            <Layers3 className="h-8 w-8 text-green-600" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold">
                                            Context persistence
                                        </h3>
                                        <p className="text-gray-500">
                                            The editor listens to all events and
                                            changes made by both the developer
                                            and AI to keep a continuous context.
                                        </p>
                                    </Card>
                                    <Card className="p-6">
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-amber-50">
                                            <Code className="h-8 w-8 text-amber-600" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold">
                                            Language features
                                        </h3>
                                        <p className="text-gray-500">
                                            Aide gathers diagnostics from the
                                            whole codebase using Language Server
                                            APIs to quickly catch and propose
                                            fixes for unintended breakages.
                                        </p>
                                    </Card>
                                    <Card className="p-6">
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-amber-50">
                                            <Undo className="h-8 w-8 text-amber-600" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold">
                                            Rollbacks
                                        </h3>
                                        <p className="text-gray-500">
                                            Aide has native support for
                                            checkpoints and rollbacks to keep
                                            track of file versions across AI
                                            changes, while preserving the undo
                                            stack.
                                        </p>
                                    </Card>
                                    <Card className="p-6">
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-amber-50">
                                            <Lock className="h-8 w-8 text-amber-600" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold">
                                            Private by default
                                        </h3>
                                        <p className="text-gray-500">
                                            All requests and responses are
                                            stored on a SQLite DB on your
                                            machine. You can use them to
                                            fine-tune your models, which we
                                            optionally support.
                                        </p>
                                    </Card>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section className="relative w-full px-4 py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
                                    We want to hear from you
                                </h2>
                                <div className="flex flex-wrap justify-center gap-4 py-4">
                                    <Image
                                        alt="Sandeep"
                                        className="h-12 w-12 rounded-full border-2 sm:h-16 sm:w-16"
                                        src="/team/sandeep.jpeg"
                                        style={{
                                            aspectRatio: "64/64",
                                            objectFit: "cover",
                                        }}
                                        height={64}
                                        width={64}
                                    />
                                    <Image
                                        alt="Naresh"
                                        className="h-12 w-12 rounded-full border-2 sm:h-16 sm:w-16"
                                        src="/team/naresh.jpeg"
                                        style={{
                                            aspectRatio: "64/64",
                                            objectFit: "cover",
                                        }}
                                        height={64}
                                        width={64}
                                    />
                                    <Image
                                        alt="Guglielmo"
                                        className="h-12 w-12 rounded-full border-2 sm:h-16 sm:w-16"
                                        src="/team/guglielmo.jpeg"
                                        style={{
                                            aspectRatio: "64/64",
                                            objectFit: "cover",
                                        }}
                                        height={64}
                                        width={64}
                                    />
                                    <Image
                                        alt="Zi"
                                        className="h-12 w-12 rounded-full border-2 sm:h-16 sm:w-16"
                                        src="/team/zi.jpeg"
                                        style={{
                                            aspectRatio: "64/64",
                                            objectFit: "cover",
                                        }}
                                        height={64}
                                        width={64}
                                    />
                                </div>
                                <p className="max-w-[720px] text-sm text-gray-600 sm:text-base md:text-xl">
                                    We know we have a way to go, and we want to
                                    make a product experienced developers will
                                    love.
                                </p>
                                <p className="max-w-[720px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Talk directly to the developers at{" "}
                                <a
                                    href="mailto:team@codestory.ai"
                                    className="font-bold underline underline-offset-2"
                                >
                                    team@codestory.ai
                                </a>{" "}
                                or on{" "}
                                <Link
                                    className="font-bold underline underline-offset-2"
                                    href="https://discord.gg/mtgrhXM5Xf"
                                >
                                    Discord
                                </Link>
                                . Shape the future of the development of Aide
                                with us.
                            </p>
                            </div>
                        </div>
                        <div className="container px-4 md:px-6">
                            <div className="m-auto flex max-w-screen-xl flex-col items-center justify-center">
                                <p className="mt-16 text-center text-2xl font-extrabold sm:text-3xl">
                                    Downloads
                                </p>
                                <div className="my-8 grid w-full gap-8 md:grid-cols-3">
                                    <div className="flex flex-col items-center">
                                        <h4 className="mb-4 text-xl font-bold">
                                            MacOS
                                        </h4>
                                        {latestRelease.macOS ? (
                                            <div className="grid w-full grid-cols-4">
                                                {(latestRelease.macOS.arm64
                                                    ?.dmg ||
                                                    latestRelease.macOS.amd64
                                                        ?.dmg) && (
                                                    <React.Fragment>
                                                        <p className="col-span-1 pr-4 text-right">
                                                            .dmg
                                                        </p>
                                                        <div className="col-span-3 flex">
                                                            {latestRelease.macOS
                                                                .arm64?.dmg && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .macOS
                                                                                .arm64
                                                                                ?.dmg
                                                                        }
                                                                    >
                                                                        Apple
                                                                        Silicon
                                                                    </a>
                                                                </Button>
                                                            )}
                                                            {latestRelease.macOS
                                                                .amd64?.dmg && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .macOS
                                                                                .amd64
                                                                                ?.dmg
                                                                        }
                                                                    >
                                                                        Intel
                                                                    </a>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </React.Fragment>
                                                )}
                                                {(latestRelease.macOS.arm64
                                                    ?.zip ||
                                                    latestRelease.macOS.amd64
                                                        ?.zip) && (
                                                    <React.Fragment>
                                                        <p className="col-span-1 pr-4 text-right">
                                                            .zip
                                                        </p>
                                                        <div className="col-span-3 flex">
                                                            {latestRelease.macOS
                                                                .arm64?.zip && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .macOS
                                                                                .arm64
                                                                                ?.zip
                                                                        }
                                                                    >
                                                                        Apple
                                                                        Silicon
                                                                    </a>
                                                                </Button>
                                                            )}
                                                            {latestRelease.macOS
                                                                .amd64?.zip && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .macOS
                                                                                .amd64
                                                                                ?.zip
                                                                        }
                                                                    >
                                                                        Intel
                                                                    </a>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </React.Fragment>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-center">
                                                <p>
                                                    Looks like our build
                                                    pipeline is broken!
                                                </p>
                                                <p>
                                                    <span className="cursor-pointer underline underline-offset-4">
                                                        Click here
                                                    </span>{" "}
                                                    to let us know?
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h4 className="mb-4 text-xl font-bold">
                                            Windows
                                        </h4>
                                        {latestRelease.Windows ? (
                                            <div className="grid w-full grid-cols-4">
                                                {(latestRelease.Windows.arm64
                                                    ?.userInstaller ||
                                                    latestRelease.Windows.amd64
                                                        ?.userInstaller) && (
                                                    <React.Fragment>
                                                        <p className="col-span-2 pr-4 text-right">
                                                            User Installer
                                                        </p>
                                                        <div className="col-span-2 flex">
                                                            {latestRelease
                                                                .Windows.amd64
                                                                ?.userInstaller && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .Windows
                                                                                .amd64
                                                                                ?.userInstaller
                                                                        }
                                                                    >
                                                                        x64
                                                                    </a>
                                                                </Button>
                                                            )}
                                                            {latestRelease
                                                                .Windows.arm64
                                                                ?.userInstaller && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .Windows
                                                                                .arm64
                                                                                ?.userInstaller
                                                                        }
                                                                    >
                                                                        Arm64
                                                                    </a>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </React.Fragment>
                                                )}
                                                {(latestRelease.Windows.arm64
                                                    ?.systemInstaller ||
                                                    latestRelease.Windows.amd64
                                                        ?.systemInstaller) && (
                                                    <React.Fragment>
                                                        <p className="col-span-2 pr-4 text-right">
                                                            System Installer
                                                        </p>
                                                        <div className="col-span-2 flex">
                                                            {latestRelease
                                                                .Windows.amd64
                                                                ?.systemInstaller && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .Windows
                                                                                .amd64
                                                                                ?.systemInstaller
                                                                        }
                                                                    >
                                                                        x64
                                                                    </a>
                                                                </Button>
                                                            )}
                                                            {latestRelease
                                                                .Windows.arm64
                                                                ?.systemInstaller && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .Windows
                                                                                .arm64
                                                                                ?.systemInstaller
                                                                        }
                                                                    >
                                                                        Arm64
                                                                    </a>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </React.Fragment>
                                                )}
                                                {(latestRelease.Windows.arm64
                                                    ?.zip ||
                                                    latestRelease.Windows.amd64
                                                        ?.zip) && (
                                                    <React.Fragment>
                                                        <p className="col-span-2 pr-4 text-right">
                                                            .zip
                                                        </p>
                                                        <div className="col-span-2 flex">
                                                            {latestRelease
                                                                .Windows.amd64
                                                                ?.zip && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .Windows
                                                                                .amd64
                                                                                ?.zip
                                                                        }
                                                                    >
                                                                        x64
                                                                    </a>
                                                                </Button>
                                                            )}
                                                            {latestRelease
                                                                .Windows.arm64
                                                                ?.zip && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .Windows
                                                                                .arm64
                                                                                ?.zip
                                                                        }
                                                                    >
                                                                        Arm64
                                                                    </a>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </React.Fragment>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-center">
                                                <p>
                                                    Looks like our build
                                                    pipeline is broken!
                                                </p>
                                                <p>
                                                    <span className="cursor-pointer underline underline-offset-4">
                                                        Click here
                                                    </span>{" "}
                                                    to let us know?
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h4 className="mb-4 text-xl font-bold">
                                            Linux
                                        </h4>
                                        {latestRelease.Linux ? (
                                            <div className="grid w-full grid-cols-4">
                                                {(latestRelease.Linux.amd64
                                                    ?.tar ||
                                                    latestRelease.Linux.armhf
                                                        ?.tar ||
                                                    latestRelease.Linux.arm64
                                                        ?.tar) && (
                                                    <React.Fragment>
                                                        <p className="col-span-1 pr-4 text-right">
                                                            .tar
                                                        </p>
                                                        <div className="col-span-3 flex">
                                                            {latestRelease.Linux
                                                                .amd64?.tar && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .Linux
                                                                                .amd64
                                                                                ?.tar
                                                                        }
                                                                    >
                                                                        x64
                                                                    </a>
                                                                </Button>
                                                            )}
                                                            {latestRelease.Linux
                                                                .armhf?.tar && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .Linux
                                                                                .armhf
                                                                                ?.tar
                                                                        }
                                                                    >
                                                                        Arm32
                                                                    </a>
                                                                </Button>
                                                            )}
                                                            {latestRelease.Linux
                                                                .arm64?.tar && (
                                                                <Button
                                                                    className="mx-2 cursor-default p-0"
                                                                    size="sm"
                                                                    variant="link"
                                                                >
                                                                    <a
                                                                        href={
                                                                            latestRelease
                                                                                .Linux
                                                                                .arm64
                                                                                ?.tar
                                                                        }
                                                                    >
                                                                        Arm64
                                                                    </a>
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </React.Fragment>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-center">
                                                <p>
                                                    Looks like our build
                                                    pipeline is broken!
                                                </p>
                                                <p>
                                                    <span className="cursor-pointer underline underline-offset-4">
                                                        Click here
                                                    </span>{" "}
                                                    to let us know?
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
