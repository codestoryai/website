import React from "react";
import Head from "next/head";
import Link from "next/link";
import { PostStyled } from "@/styles/Post.styled";
import { Title } from "@/components/typography";
import { aboutUs } from "../../content/about";
import { Markdown } from "@/components/markdown/Markdown";
import { WavesIcon } from "@/components/decoration/wavesIcon";
import { icons } from "content/icons";
import styled from "styled-components";
import { theme } from "@/styles/theme";

const Wrapper = styled.div`
  h3 {
    font-style: italic;
    color: ${theme.headingColored};
  }
`;

const About = () => {
  return (
    <PostStyled>
      <Head>
        <title>Manifesto — CodeStory</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Wrapper>
        <WavesIcon icon={icons.manifesto} />
        <Title>{aboutUs.title}</Title>

        <h3>{aboutUs.subtitle}</h3>

        <Markdown content={aboutUs.content} />

        <a href="https://stevejobsarchive.com/book" target="_blank" rel="noreferrer noopener">
          &ldquo;Give people wonderful tools, and they'll do wonderful things&rdquo;
        </a>
      </Wrapper>
    </PostStyled>
  );
};

export default About;
