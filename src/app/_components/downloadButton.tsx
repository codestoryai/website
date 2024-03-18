"use client";

import { Button } from "@/app/_components/ui/button";
import { scrollToBottom } from "@/app/_utilities/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
      className={`fixed z-50 top-12 right-12 text-md font-bold hidden md:flex items-center transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
      onClick={scrollToBottom}
      variant="outline"
    >
      <Image
        alt="CodeStory Logo"
        height={20}
        priority
        src="/aide-white.svg"
        width={30}
      />
      <p className="pl-2 text-foreground font-bold">
        Download Aide
      </p>
    </Button>
  )
}

export default DownloadButton
