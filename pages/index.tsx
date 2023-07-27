import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

import Container from "@/components/container";
import { gradient } from "@/components/gradient";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import { Hero } from "@/components/Hero";

export default function Index() {
  useEffect(() => {
    // @ts-ignore
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>CodeStory</title>
        </Head>
        <div>
          <canvas
            id="gradient-canvas"
            data-transition-in
            style={{
              clipPath:
                "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
            }}
            className="-z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
          />
          <Container className="h-screen flex flex-col">
            <Intro />
            <Hero />
            <div className="w-full flex items-center justify-center md:justify-normal mb-8 md:mb-16">
              <p className="text-xl md:text-2xl mr-3">Backed by</p>
              <Image
                src="/assets/logos/yc_logo.svg"
                width={180}
                height={180}
                alt="Y Combinator Logo"
              />
            </div>
          </Container>
        </div>
        <div className="bg-neutral-50 border-y border-neutral-200">
          <Container>
            <h2 className="mt-16 text-6xl font-bold text-center">
              Code Review
            </h2>
            <div className="mt-8 mb-32 grid gap-12 grid-cols-1 md:grid-cols-3">
              <div className="md:border border-black rounded-md md:p-8">
                <h3 className="text-2xl font-bold">
                  Automatic PR descriptions
                </h3>
                <p className="text-lg mt-4 text-gray-600">
                  Get an auto-generated overview of changes in the PR that
                  provides insights into what changed and how it is connected
                  with the rest of your code.
                </p>
              </div>
              <div className="md:border border-black rounded-md md:p-8">
                <h3 className="text-2xl font-bold">One-click IDE checkout</h3>
                <p className="text-lg mt-4 text-gray-600">
                  Checkout Pull Requests, as the reviewer or author, with a
                  single click in your IDE for addressing comments or diving
                  deeper, without losing any of your current work.
                </p>
              </div>
              <div className="md:border border-black rounded-md md:p-8">
                <h3 className="text-2xl font-bold">Advanced navigation</h3>
                <div className="bg-cs-orange-2 text-white text-xs font-medium my-1 px-2.5 py-0.5 w-fit rounded">
                  COMING SOON
                </div>
                <p className="text-lg mt-4  text-gray-600">
                  Visually see how changes are connected, so you no longer have
                  to jump up and down within diffs to understand a PR.
                </p>
              </div>
              <div className="md:border border-black rounded-md md:p-8">
                <h3 className="text-2xl font-bold">Inline explanations</h3>
                <div className="bg-cs-orange-2 text-white text-xs font-medium my-1 px-2.5 py-0.5 w-fit rounded">
                  COMING SOON
                </div>
                <p className="text-lg mt-4  text-gray-600">
                  Grok large changes easily with inline explanations and impact
                  summary alongside the diff view.
                </p>
              </div>
              <div className="md:border border-black rounded-md md:p-8">
                <h3 className="text-2xl font-bold">
                  Diffs highlighted by importance
                </h3>
                <div className="bg-cs-orange-2 text-white text-xs font-medium my-1 px-2.5 py-0.5 w-fit rounded">
                  COMING SOON
                </div>
                <p className="text-lg mt-4  text-gray-600">
                  See impactful changes highlighted within git diffs, so your
                  team doesn't just <span className="italic">LGTM! 👍</span>{" "}
                  important code segments.
                </p>
              </div>
              <div className="md:border border-black rounded-md md:p-8">
                <h3 className="text-2xl font-bold">AI Linter</h3>
                <div className="bg-cs-orange-2 text-white text-xs font-medium my-1 px-2.5 py-0.5 w-fit rounded">
                  COMING SOON
                </div>
                <p className="text-lg mt-4  text-gray-600">
                  A powerful linter that catch intricate issues beyond static
                  analysis, like code structure, design patterns and logging
                  practices.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}
