import { Button } from '@/components/ui/button'
import AideDesktopSS from '@/public/aide-desktop.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Enterprise() {
  return (
    <>
      <div className="bg-noise bg-background">
        <div className="pt-24 md:pt-36 pl-8 md:pl-12 pb-0 md:pb-0 pr-0 md:pr-0 w-full max-w-screen-xl m-auto">
          <div className="overflow-clip">
            <div className="grid grid-cols-12">
              <div className="col-span-4 flex flex-col justify-center">
                <p className="uppercase">Aide for enterprises.</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Give your developers superpowers.
                </h2>
                <p className="mt-6 text-xl leading-8">
                  Empower them with the most secure and best AI-assisted coding experience today.
                </p>
              </div>
              <div className="col-start-6 col-span-7">
                <Image
                  alt="Aide screenshot"
                  className="rounded-lg scale-125 origin-top"
                  src={AideDesktopSS}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="p-8 md:p-12 max-w-screen-lg m-auto">
          <p className="text-3xl uppercase font-semibold">
            The IDE is the most used product for developers.
          </p>
          <p className="pt-4 text-lg">
            Want to make your developers more productive when they&apos;re focused on writing code?
            Want to ensure AI adoption in your organisation is done securely, and without breaking
            any existing workflows? Want to provide the best-in-class AI models for your team?
          </p>
          <div className="grid pt-12">
            <h3 className="col-span-3 text-xl">Drop-in replacement with no vendor lock-in</h3>
            <p className="pt-2">
              Aide, by design, runs all the infra bits on the developer&apos;s machine. It&apos;s
              just like using any other software. This enables Aide to work with your codebase no
              matter which hosting service you use: Github, BitBucket, GitLab, Azure DevOps, or
              Perforce. Aide is a drop-in replacement for the editor you are using, and all your
              workflows work today out of the box with Aide.
            </p>
            <h3 className="col-span-3 text-xl pt-8">Model deployment choices</h3>
            <p className="pt-2">
              The only thing that Aide needs to run is the model. You can choose to run the model on
              your infrastructure, or use our cloud offering. If you choose to run the model on your
              infrastructure, Aide will work with your existing security and compliance policies.
              CodeStory also provides a cloud offering for the model, which can host coding models
              on your cloud of choice. Speak to us about specific audits and certifications that you
              need for your organisation.
            </p>
            <h3 className="col-span-3 text-xl pt-8">Fine-tuned on your codebase</h3>
            <p className="pt-2">
              Fine-tuning on your codebase allows for better tab-autocomplete and better context
              gathering for your codebases. The model is yours forever to keep and use as you see
              fit. Fine-tuning also helps the bigger model understand the intricacies of your
              ever-changing codebase, helping developers stay productive in a fast moving
              environment. Our fine-tuned models support custom connectors to your
              Jira/Confluence/Github Issues, so it knows not just about the code, but the context
              around it.
            </p>
            <h3 className="col-span-3 text-xl pt-8">Bring your own model</h3>
            <p className="pt-2">
              Enterprises can run Anthropic Calude models via AWS Bedrock or with Azure OpenAI. Aide
              also supports running Open Source Models like CodeLlama or DeepSeek Coder on your own
              GPUs, or have developers run the models on their own laptop via Ollama or LMStudio.
            </p>
            <Link className="mt-12 col-span-3" href="mailto:founders@codestory.ai">
              <Button className="size-fit">Speak with us today!</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
