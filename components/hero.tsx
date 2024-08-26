"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { Video } from "./video";

export default function Hero() {
    return (
        <div className="bg-background bg-noise p-8 pt-20 md:p-12 md:pt-24">
            <div className="m-auto my-6 flex max-w-screen-xl flex-col md:my-12">
                <p className="text-4xl font-semibold text-foreground md:text-5xl">
                    Code with the <span className="text-primary">speed</span>{" "}
                    and <span className="text-primary">knowledge</span> of the
                    best programmer you know.{" "}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="underline decoration-2 underline-offset-4 md:underline-offset-8">
                                Aide
                            </span>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <span className="text-xl">AI + IDE</span>
                        </TooltipContent>
                    </Tooltip>{" "}
                    is by your side.
                </p>
                {/*deviceDetails
          ?
          <div className="my-8 hidden md:flex flex-col items-center w-fit">
            <Button size="lg" variant="outline">
              <a href={deviceDetails.url}>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <p className="text-3xl">Download for {deviceDetails.os}</p>
                    <p className="text-lg">{deviceDetails.arch}</p>
                  </div>
                  <Download className="ml-4" />
                </div>
              </a>
            </Button>
            <Button className="text-md text-foreground" onClick={scrollToBottom} variant="link">
              Looking for a different platform?
            </Button>
          </div>
          :
          <div />
        */}

                <Video
                    className="mt-8 rounded-lg border shadow-xl"
                    src="/probe-walk-through.mp4"
                />
            </div>
        </div>
    );
}
