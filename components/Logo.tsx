import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/assets/logos/cs-logomark.svg"
        width={60}
        height={60}
        alt="CodeStory Logo"
      />
      <h1 className="text-2xl md:text-4xl font-bold">CodeStory</h1>
    </div>
  );
};
