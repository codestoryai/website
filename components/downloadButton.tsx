"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false)
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
      className={`fixed top-12 right-12 text-md font-bold flex items-center transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
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

export default ScrollToTopButton
