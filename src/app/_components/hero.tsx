"use client";

import { Button } from "@/_components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/_components/ui/tooltip";
import { DeviceDetails } from "@/_utilities/ua";
import { scrollToBottom } from "@/_utilities/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";

import AideDesktopSS from "../../../public/aide-desktop.png";

interface HeroProps {
  deviceDetails: DeviceDetails | undefined;
}

export default function Hero({ deviceDetails }: HeroProps) {
  return (
    <div className="p-12 pt-24 bg-noise bg-background">
      <div className="max-w-screen-xl m-auto my-12 flex flex-col">
        <p className="text-5xl font-semibold text-foreground">
          Code with the <span className="text-primary">speed</span> and <span className="text-primary">knowledge</span> of the best programmer you know.{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="underline underline-offset-8 decoration-2">Aide</span>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="text-xl">AI + IDE</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> is by your side.
        </p>
        {deviceDetails
          ?
          <div className="my-8 flex flex-col items-center w-fit">
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
        }
        <Image
          alt="Aide screenshot"
          className="mt-8 rounded-lg border shadow-xl"
          priority
          src={AideDesktopSS}
        />
      </div>
    </div>
  )
}
