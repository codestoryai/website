import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-12 bg-noise bg-background text-sm border-t border-t-muted">
      <div className="max-w-screen-2xl m-auto grid grid-cols-12">
        <nav className="col-span-1">
          <Image
            src="/aide-white.svg"
            alt="CodeStory Logo"
            width={48}
            height={32}
            priority
          />
        </nav>
        <nav className="col-span-2 flex flex-col">
          <p className="uppercase mb-4">Product</p>
          <a>Branding</a>
          <a>Design</a>
          <a>Marketing</a>
          <a>Advertisement</a>
        </nav>
        <nav className="col-span-2 flex flex-col">
          <p className="uppercase mb-4">Resources</p>
          <a>About us</a>
          <a>Contact</a>
          <a>Jobs</a>
          <a>Press kit</a>
        </nav>
        <nav className="pb-12 pr-12 col-start-12 col-span-1 flex flex-col items-end">
          <div className="flex h-full items-center">
            <Image
              src="/cs-logomark.svg"
              alt="CodeStory Logo"
              width={36}
              height={24}
              priority
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