import Image from "next/image";

export const Hero = () => {
  return (
    <div className="grow flex flex-col justify-center md:w-3/5 px-2">
      <h1 className="text-5xl md:text-7xl leading-tight font-bold">
        Focus on innovation with a 10x engineer by your side
      </h1>
      <p className="mt-8 text-2xl md:text-4xl text-gray-600">
        CodeStory eliminates friction to help your team review and iterate code
        changes of any size. Get your engineering team move faster to the next
        big challenge.
      </p>
      <div className="mt-8">
        <a
          href="https://github.com/apps/codestorybetabot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-3 text-sm md:px-8 md:py-4 md:text-base flex rounded-md bg-[#428645] hover:bg-[#2ea043] text-white">
            <Image
              src="/assets/logos/github-mark-white.svg"
              width={24}
              height={24}
              alt="CodeStory Logo"
              className="mr-2"
            />
            Install on GitHub
          </button>
        </a>
      </div>
    </div>
  );
};
