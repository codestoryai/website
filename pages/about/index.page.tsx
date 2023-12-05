import React from "react";
import Head from "next/head";
import Link from "next/link";
import { PostStyled } from "@/styles/Post.styled";
import { Title } from "@/components/typography";

const About = () => {
  return (
    <PostStyled>
      <Head>
        <title>Manifesto — CodeStory</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <div>
        <Title>Manifesto</Title>

        <h3>We're on a mission to empower developers reach new heights of creativity and productivity.</h3>
        <p>
          Developers today accomplish incredible things with programming, a highly delicate art that allows immense
          levels of mastery and value creation.
        </p>

        <p>
          But the development process hasn't fundamentally changed in decades and requires substantial time commitment
          and navigation through the ever-growing complexities it brings.
        </p>

        <p>
          We want to build tools that bring the focus back to the joyful process of building and creating—testing ideas,
          iterating, trying and even failing.
        </p>
        <p>
          And we're starting this with <Link href="/">Aide</Link>, an AI-powered IDE. We see AI not just as a tool, but
          a trusted partner willing and capable of doing all the heavy-lifting for you. Like a team member who has your
          back.
        </p>

        <a href="https://stevejobsarchive.com/book" target="_blank" rel="noreferrer noopener">
          &ldquo;Give people wonderful tools, and they'll do wonderful things&rdquo;
        </a>
      </div>
    </PostStyled>
  );
};

export default About;
