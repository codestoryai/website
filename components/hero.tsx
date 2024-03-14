import { Download } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

import AideDesktopSS from "../public/aide-desktop.png";

export default function Hero() {
  return (
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
      <div className="my-8 flex flex-col items-center w-fit">
        <Button variant="outline" size="lg">
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="text-3xl">Download for MacOS</p>
              <p className="text-lg">Apple Silicon</p>
            </div>
            <Download className="ml-4" />
          </div>
        </Button>
        <Button variant="link" className="text-md text-foreground">Looking for a different platform?</Button>
      </div>
      <Image
        className="mt-8 rounded-lg border shadow-xl"
        src={AideDesktopSS}
        alt="Aide screenshot"
        priority
      />
    </div>
  )
}