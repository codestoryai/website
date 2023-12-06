import React from "react";
import Head from "next/head";

import { getChangeLogFile } from "../../lib/changelog";
import { ChangelogStyled } from "./changelog.styled";
import { Markdown } from "../../components/markdown/Markdown";
import { Title } from "@/components/typography";
import { WavesIcon } from "@/components/decoration/wavesIcon";
import { icons } from "content/icons";

type Props = {
  content: string;
};

export default function Changelog({ content }: Props) {
  return (
    <ChangelogStyled
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    // transition={{ ease: "easeInOut", duration: 0.24 }}
    >
      <Head>
        <title>Changelog — CodeStory</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <WavesIcon icon={icons.changelog} />

      <Title>Changelog</Title>

      <main>
        <Markdown content={content} />
      </main>
    </ChangelogStyled>
  );
}

export async function getStaticProps() {
  const changelog = getChangeLogFile();

  return {
    props: {
      content: changelog,
    },
  };
}
