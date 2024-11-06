import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Downloads } from "@/lib/types";
import { DeviceDetails } from "@/lib/ua";
import {
    Brain,
    ClipboardCopy,
    Download,
    Github,
    Layers3,
    Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DownloadScroll from "./downloadscroll";
import { Kbd } from "./ui/kbd";
import { CopyText, CopyTextButton } from "./ui/copy-text";
import { cn } from "@/lib/utils";

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
                    <section className="w-full bg-gray-100 px-2 pb-16 pt-36">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    The open-source{" "}
                                    <span className="text-gray-700">AI</span>
                                    -native I
                                    <span className="text-gray-700">DE</span>.
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-600 md:text-2xl">
                                    Powered by the state-of-the-art agentic
                                    framework on swebench-lite
                                </p>
                                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                    {deviceDetails ? (
                                        <React.Fragment>
                                            {deviceDetails.os === "Linux" && (
                                                <CopyText textToCopy="curl -sL https://raw.githubusercontent.com/codestoryai/binaries/main/linux/linux_install.sh | bash">
                                                    <CopyTextButton
                                                        className={cn(
                                                            buttonVariants({
                                                                className:
                                                                    "w-full bg-green-600 hover:bg-green-700 sm:w-72",
                                                            })
                                                        )}
                                                    >
                                                        <div className="flex items-center justify-center">
                                                            <div className="flex flex-col">
                                                                <p className="text-xl">
                                                                    Copy curl
                                                                    for{" "}
                                                                    {
                                                                        deviceDetails.os
                                                                    }
                                                                </p>
                                                                <p>
                                                                    {
                                                                        deviceDetails.arch
                                                                    }
                                                                </p>
                                                            </div>
                                                            <ClipboardCopy className="ml-4" />
                                                        </div>
                                                    </CopyTextButton>
                                                </CopyText>
                                            )}
                                            {deviceDetails.os !== "Linux" && (
                                                <Button className="w-full bg-green-600 hover:bg-green-700 sm:w-72">
                                                    <a href={deviceDetails.url}>
                                                        <div className="flex items-center justify-center">
                                                            <div className="flex flex-col">
                                                                <p className="text-xl">
                                                                    Download for{" "}
                                                                    {
                                                                        deviceDetails.os
                                                                    }
                                                                </p>
                                                                <p>
                                                                    {
                                                                        deviceDetails.arch
                                                                    }
                                                                </p>
                                                            </div>
                                                            <Download className="ml-4" />
                                                        </div>
                                                    </a>
                                                </Button>
                                            )}
                                        </React.Fragment>
                                    ) : (
                                        <div className="w-full sm:w-72" />
                                    )}
                                    <Button
                                        variant="outline"
                                        className="w-full p-0 text-xl sm:w-72"
                                    >
                                        <Link
                                            href="https://github.com/codestoryai/aide"
                                            className="flex h-full w-full items-center justify-center"
                                        >
                                            <p>View on GitHub</p>
                                            <Github className="ml-4" />
                                        </Link>
                                    </Button>
                                </div>
                                <DownloadScroll />
                            </div>
                            <div className="relative mx-auto mt-8 max-w-[1000px] px-4 sm:px-6">
                                <Card className="overflow-hidden">
                                    <div className="relative pt-[57.446808510638306%]">
                                        <iframe
                                            src="https://customer-usdtusoutmmf2q7n.cloudflarestream.com/e1ae149c3dcb77da9b82b379bb6fd194/iframe?autoplay=true&poster=https%3A%2F%2Fcustomer-usdtusoutmmf2q7n.cloudflarestream.com%2Fe1ae149c3dcb77da9b82b379bb6fd194%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                                            loading="lazy"
                                            style={{
                                                border: "none",
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                height: "100%",
                                                width: "100%",
                                            }}
                                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </Card>
                                <div className="absolute -bottom-2 left-1/2 h-2 w-[90%] -translate-x-1/2 rounded-b-md bg-gray-300" />
                            </div>

                            <div className="mx-auto mt-8 max-w-[800px] px-4 text-center sm:px-6">
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

                        <section className="relative w-full py-12 md:py-24">
                            <div className="container px-4 md:px-6 2xl:px-12">
                                <div className="flex flex-col-reverse items-center gap-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
                                    <div className="mt-1 space-y-4">
                                        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-left">
                                            A{" "}
                                            <span className="relative inline-block">
                                                proactive
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
                                            </span>{" "}
                                            agent
                                        </h2>
                                        <p className="mx-auto max-w-[700px] md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            Aide proactively{" "}
                                            <b>proposes fixes</b> or asks to
                                            include files that may be missing in
                                            the context. Our agent can do so by{" "}
                                            <b>iterating on linter errors</b>{" "}
                                            and pulling in relevant context{" "}
                                            <b>using LSP tools</b>, like “Go to
                                            references”.
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
                                        <div className="flex items-center justify-start space-x-4 2xl:-ml-14">
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
                                            <div className="text-gray-500">
                                                Sandeep, CEO @ CodeStory
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative w-full max-w-[600px] lg:max-w-none">
                                        <Card className="w-full">
                                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
                                                <div
                                                    style={{
                                                        position: "relative",
                                                        paddingTop:
                                                            "49.815498154981555%",
                                                    }}
                                                >
                                                    <iframe
                                                        src="https://customer-usdtusoutmmf2q7n.cloudflarestream.com/c77dac4339078b11fcc369d5544ac498/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-usdtusoutmmf2q7n.cloudflarestream.com%2Fc77dac4339078b11fcc369d5544ac498%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                                                        loading="lazy"
                                                        style={{
                                                            border: "none",
                                                            position:
                                                                "absolute",
                                                            top: "0",
                                                            left: "0",
                                                            height: "100%",
                                                            width: "100%",
                                                        }}
                                                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </Card>
                                        <div className="absolute -bottom-2 left-1/2 h-2 w-[95%] -translate-x-1/2 rounded-b-md bg-yellow-300" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full py-12 md:py-24">
                            <div className="container px-4 md:px-6 2xl:px-12">
                                <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
                                    <div className="relative w-full max-w-[600px] lg:max-w-none">
                                        <Card className="w-full">
                                            <div className="relative aspect-video overflow-hidden rounded-lg">
                                                <div
                                                    style={{
                                                        position: "relative",
                                                        paddingTop:
                                                            "59.471365638766514%",
                                                    }}
                                                >
                                                    <iframe
                                                        src="https://customer-usdtusoutmmf2q7n.cloudflarestream.com/3bd2263a82733ba0eebb0dc8513653ad/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-usdtusoutmmf2q7n.cloudflarestream.com%2F3bd2263a82733ba0eebb0dc8513653ad%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                                                        loading="lazy"
                                                        style={{
                                                            border: "none",
                                                            position:
                                                                "absolute",
                                                            top: "0",
                                                            left: "0",
                                                            height: "100%",
                                                            width: "100%",
                                                        }}
                                                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </Card>
                                        <div className="absolute -bottom-2 left-1/2 h-2 w-[95%] -translate-x-1/2 rounded-b-md bg-fuchsia-300" />
                                    </div>
                                    <div className="mt-1 space-y-4">
                                        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-left">
                                            Developer
                                            <span className="relative inline-block">
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
                                                control
                                            </span>
                                        </h2>
                                        <p className="mx-auto max-w-[700px] text-left md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            Go ahead, do AI-edits on top of your
                                            coding session. We keep slim, VS
                                            Code-native checkpoints (we
                                            don&rsquo;t use git) to{" "}
                                            <b>easily roll back</b> to previous
                                            states, in case the agent made any
                                            mistake.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full py-12 md:py-24">
                            <div className="container px-4 md:px-6 2xl:px-12">
                                <div className="flex flex-col-reverse items-center gap-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
                                    <div className="mt-1 space-y-4">
                                        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-left">
                                            Brainstorm, then edit.
                                            <br />
                                            Or the other way around.
                                        </h2>
                                        <p className="mx-auto max-w-[700px] md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            We try to make Aide feel like a real
                                            engineer to pair-program with. Chat
                                            about a problem by @&rsquo;ting the
                                            file(s) and then jump into edits, or
                                            go from a smaller set of edits and
                                            discuss their side-effects.
                                        </p>
                                    </div>
                                    <div className="relative w-full max-w-[600px] lg:max-w-none">
                                        <Card className="w-full">
                                            <div className="relative aspect-video overflow-hidden rounded-lg">
                                                <div
                                                    className="relative"
                                                    style={{
                                                        paddingTop:
                                                            "59.471365638766514%",
                                                    }}
                                                >
                                                    <iframe
                                                        src="https://customer-usdtusoutmmf2q7n.cloudflarestream.com/b163cf1e004375f5b3be057d862352ab/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-usdtusoutmmf2q7n.cloudflarestream.com%2Fb163cf1e004375f5b3be057d862352ab%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                                                        loading="lazy"
                                                        style={{
                                                            border: "none",
                                                            position:
                                                                "absolute",
                                                            top: "0",
                                                            left: "0",
                                                            height: "100%",
                                                            width: "100%",
                                                        }}
                                                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </Card>
                                        <div className="absolute -bottom-2 left-1/2 h-2 w-[95%] -translate-x-1/2 rounded-b-md bg-green-300" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full py-12 md:py-24">
                            <div className="container px-4 md:px-6 2xl:px-12">
                                <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
                                    <div className="relative w-full max-w-[600px] lg:max-w-none">
                                        <Card className="w-full">
                                            <div className="relative aspect-video overflow-hidden rounded-lg">
                                                <div
                                                    className="relative"
                                                    style={{
                                                        paddingTop:
                                                            "63.52941176470588%",
                                                    }}
                                                >
                                                    <iframe
                                                        src="https://customer-usdtusoutmmf2q7n.cloudflarestream.com/62cb603a83e154a9677bdc9062589cd7/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-usdtusoutmmf2q7n.cloudflarestream.com%2F62cb603a83e154a9677bdc9062589cd7%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                                                        loading="lazy"
                                                        style={{
                                                            border: "none",
                                                            position:
                                                                "absolute",
                                                            top: "0",
                                                            left: "0",
                                                            height: "100%",
                                                            width: "100%",
                                                        }}
                                                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </Card>
                                        <div className="absolute -bottom-2 left-1/2 h-2 w-[95%] -translate-x-1/2 rounded-b-md bg-yellow-300" />
                                    </div>
                                    <div className="mt-1 space-y-4">
                                        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-left">
                                            Quick invoke
                                        </h2>
                                        <p className="mx-auto max-w-[700px] text-left md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            Taking inspiration from MacOS
                                            spotlight, we created a floating
                                            widget you can invoke with{" "}
                                            <Kbd>CMD + K</Kbd>. If you have a
                                            text selection active, you quickly
                                            prompt a change for it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full py-12 md:py-24">
                            <div className="container px-4 md:px-6 2xl:px-12">
                                <div className="flex flex-col-reverse items-center gap-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
                                    <div className="mt-1 space-y-4">
                                        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-left">
                                            Galaxy brain. Local-first.
                                        </h2>
                                        <p className="mx-auto max-w-[700px] md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            We ship a binary called{" "}
                                            <b>sidecar</b> which takes care of
                                            preparing and sending prompts to
                                            LLMs, as well as giving them access
                                            to editor features. You get{" "}
                                            <b>full control</b> over the prompts
                                            and responses (unless you choose our
                                            subscription, sharing some data with
                                            us).
                                        </p>
                                    </div>
                                    <div className="relative w-full max-w-[600px] lg:max-w-none">
                                        <Card className="w-full overflow-hidden rounded-[9px] border-0">
                                            <div className="relative aspect-video overflow-hidden">
                                                <Image
                                                    alt="Placeholder"
                                                    className="h-full w-full object-cover"
                                                    src="/sidecar-infographic.png"
                                                    style={{
                                                        objectFit: "cover",
                                                        objectPosition:
                                                            "bottom left",
                                                    }}
                                                    fill
                                                />
                                            </div>
                                        </Card>
                                        <div className="absolute -bottom-2 left-1/2 h-2 w-[95%] -translate-x-1/2 rounded-b-md bg-fuchsia-300" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="relative w-full px-4 py-12 md:py-24">
                            <div className="container px-4 md:px-6">
                                <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Other features
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
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-yellow-50">
                                            <Zap className="h-8 w-8 text-yellow-600" />
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
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-fuchsia-50">
                                            <Layers3 className="h-8 w-8 text-fuchsia-600" />
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
                                </div>
                            </div>
                        </section>
                    </div>

                    <section className="relative w-full px-4 pb-12 pt-12 md:pt-24">
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
                                    . Shape the future of the development of
                                    Aide with us.
                                </p>
                            </div>
                        </div>
                        <div className="container px-4 md:px-6">
                            <div className="m-auto flex max-w-screen-xl flex-col items-center justify-center text-lg">
                                <p className="mt-16 text-center text-2xl font-extrabold sm:text-3xl">
                                    Downloads
                                </p>
                                <div className="my-8 grid w-full max-w-screen-lg gap-8 md:grid-cols-3">
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
