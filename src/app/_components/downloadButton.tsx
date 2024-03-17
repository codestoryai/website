"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/_components/ui/button";
import { scrollToBottom } from "@/_lib/utils";

const DownloadButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      const reachedBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      window.scrollY > 200 && !reachedBottom ? setIsVisible(true) : setIsVisible(false);
    }
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <Button
      variant="outline"
      className={`fixed z-50 top-12 right-12 text-md font-bold flex items-center transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
      onClick={scrollToBottom}
    >
      <Image
        src="/aide-white.svg"
        alt="CodeStory Logo"
        width={30}
        height={20}
        priority
      />
      <p className="pl-2 text-foreground font-bold">
        Download Aide
      </p>
    </Button>
  )
}

export default DownloadButton
