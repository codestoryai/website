import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="p-12 bg-noise bg-background text-sm border-t border-t-muted">
      <div className="max-w-screen-2xl m-auto grid grid-cols-12">
        <nav className="col-span-1">
          <Image
            alt="CodeStory Logo"
            height={32}
            priority
            src="/aide-white.svg"
            width={48}
          />
        </nav>
        <nav className="col-span-2 flex flex-col">
          <p className="uppercase mb-4">Product</p>
          <p>Branding</p>
          <p>Design</p>
          <p>Marketing</p>
          <p>Advertisement</p>
        </nav>
        <nav className="col-span-2 flex flex-col">
          <p className="uppercase mb-4">Resources</p>
          <p>About us</p>
          <p>Contact</p>
          <p>Jobs</p>
          <p>Press kit</p>
        </nav>
        <nav className="pb-12 pr-12 col-start-12 col-span-1 flex flex-col items-end">
          <div className="flex h-full items-center">
            <Image
              alt="CodeStory Logo"
              height={24}
              priority
              src="/cs-logomark.svg"
              width={36}
            />
            <p className="pl-2 text-2xl font-bold">
              CodeStory
            </p>
          </div>
        </nav>
      </div>
    </footer>
  )
}