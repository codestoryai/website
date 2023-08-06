import Link from "next/link";

import { Logo } from "./Logo";

type IntroProps = {
  isBlog?: boolean;
};

const Intro = ({ isBlog }: IntroProps) => {
  return (
    <section className="grow-0 flex items-center justify-between pt-8 pr-4 md:pr-0 md:pt-16">
      {!isBlog ? (
        <Logo />
      ) : (
        <Link href={"/"}>
          <Logo />
        </Link>
      )}
      <Link href={"/blog"}>
        <div
          className={`${
            isBlog ? "text-black" : "text-white"
          } hover:text-cs-orange-1 text-2xl md:text-4xl font-bold`}
        >
          Blog
        </div>
      </Link>
    </section>
  );
};

export default Intro;
