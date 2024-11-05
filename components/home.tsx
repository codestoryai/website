import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {  Brain, Zap, GitBranch, Globe, Lock, Undo } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Multi-file editing that works.
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Real-world software is built on pre-existing code.
                Aide generates useful edits across vertical slices of your codebase.
              </p>
              <div className="space-x-4">
                <Button className="bg-green-600 hover:bg-green-700">Download Aide</Button>
                <Button variant="outline">Github page</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
                  Agentic. Aware. <span className="relative inline-block">
                    Steerable.
                    <svg 
                      className="absolute -bottom-2 left-0 w-full h-4 -z-10" 
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
                <p className="mx-auto max-w-[700px] md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Aide not only understands your codebase, but keeps track of previous  editing sessions. It aligns more and more with your goals as you go along. <b>Effortlessly iterate, review and fill in possible gaps</b>, like you would while pair programming.
                </p>
                <blockquote className="pt-8 text-lg leading-snug lg:leading-normal xl:text-lg">
                  &ldquo;Insanity is doing the same thing over and over again and expecting different results&rdquo; &mdash; Einstein probably never said that, but this quote rings true when guiding agents to make large-scale edits with today&apos;s tools.
                </blockquote>
                <div className="flex items-center space-x-4">
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
                  <div className="text-gray-500 dark:text-gray-400">Zi, Software Engineer @ CodeStory</div>
                </div>
              </div>
              <div className="relative">
                <Card className="p-6">
                  <div className="aspect-video relative overflow-hidden rounded-lg">
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
                <div className="absolute -bottom-2 left-1/2 w-[95%] h-2 bg-yellow-300 -translate-x-1/2 rounded-b-md" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="relative">
                <Card className="p-6">
                  <div className="aspect-video relative overflow-hidden rounded-lg">
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
                <div className="absolute -bottom-2 left-1/2 w-[95%] h-2 bg-pink-300 -translate-x-1/2 rounded-b-md" />
              </div>
              <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <span className="relative inline-block">
                    Editor
                    <svg 
                      className="absolute -bottom-2 left-0 w-full h-4 -z-10"
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
                  <span className="ml-2">tooling for all</span>
                </h2>
                <p className="mx-auto max-w-[700px] md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Being in the editor not only keeps you in control, but gives Aide access to <b>the same tools developers use</b>. Our agents are aware of the side effects of their changes thanks to language features. We don&apos;t just wreak havoc on your code and leave you to clean up the mess.
                </p>
                <blockquote className="pt-8 text-lg leading-snug lg:leading-normal xl:text-lg">
                    What if LLMs could make edits across multiple files without breaking the logic? After a month of hacking, we tested our framework against <Link className="underline underline-offset-2 font-bold" href="https://www.swebench.com">SWE-Bench Lite</Link> and (kinda shockingly) became the SOTA, resolving 43% of the issues.
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Image
                    className="rounded-full"
                    height="40"
                    src="/team/sandeep.jpeg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                    alt="Zi"
                  />
                  <div className="text-gray-500 dark:text-gray-400">Sandeep, CEO @ CodeStory</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <Brain className="w-12 h-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Deep reasoning</h3>
                <p className="text-gray-500">
                  Context propagation helps you make multi-location changes. Break down large tasks into smaller units of work that follow a logical flow.
                </p>
              </Card>
              <Card className="p-6">
                <Zap className="w-12 h-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Blazing-fast edits</h3>
                <p className="text-gray-500">
                  With our new file format, you can be multi-location editing you will be packed up how little time direct semantic editing while still retaining the changes.
                </p>
              </Card>
              <Card className="p-6">
                <GitBranch className="w-12 h-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Context persistence</h3>
                <p className="text-gray-500">
                  Changes made by both the developer and AI to keep a continuous memory of the changes.
                </p>
              </Card>
              <Card className="p-6">
                <Globe className="w-12 h-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Language features</h3>
                <p className="text-gray-500">
                  State-of-the-art language models combine Language Server APIs to quickly apply and propose fixes for immediate a mistakes.
                </p>
              </Card>
              <Card className="p-6">
                <Undo className="w-12 h-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Rollbacks</h3>
                <p className="text-gray-500">
                  Just like git, we store the full snapshots and rollbacks to keep track of M3 versions across AI changes, while preserving the undo stack.
                </p>
              </Card>
              <Card className="p-6">
                <Lock className="w-12 h-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Private by default</h3>
                <p className="text-gray-500">
                  Your code never leaves your machine. Try out up to 50 on your machine. You can opt-in to have base your models, which we specifically support.
                </p>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                We want to hear from you
              </h2>
              <div className="flex py-4 space-x-4 overflow-hidden">
                <Image
                  alt="Sandeep"
                  className="inline-block h-16 w-16 rounded-full border-2"
                  height="64"
                  src="/team/sandeep.jpeg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
                <Image
                  alt="Naresh"
                  className="inline-block h-16 w-16 rounded-full border-2"
                  height="64"
                  src="/team/naresh.jpeg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
                <Image
                  alt="Guglielmo"
                  className="inline-block h-16 w-16 rounded-full border-2"
                  height="64"
                  src="/team/guglielmo.jpeg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
                <Image
                  alt="Zi"
                  className="inline-block h-16 w-16 rounded-full border-2"
                  height="64"
                  src="/team/zi.jpeg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
              </div>
              <p className="text-gray-600 max-w-[720px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We know we have a way to go, and we want to make a product experienced developers will love.
              </p>
              <p className="text-gray-600 max-w-[720px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Talk directly to the developers at <a href="mailto:team@codestory.ai" className="underline underline-offset-2 font-bold">team@codestory.ai</a> or on <Link className="underline underline-offset-2 font-bold" href="https://discord.gg/mtgrhXM5Xf">Discord</Link>. Shape the future of the development of Aide with us.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>Download Aide</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
