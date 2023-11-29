import React, { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { UAParser } from "ua-parser-js";
import { Row, Portion } from "fictoan-react";

import { HomeStyled } from "../styles/Home.styled";

import FeaturesGrid from "../components/features-grid/FeaturesGrid";
import Footer from "../components/footer/Footer";

import { DownloadButtons } from "../components/download/download";
import Hero from "../components/sections/hero";

const Home = ({ os, architecture }: { os?: string; architecture?: string }) => {
  const [latestRelease, setLatestRelease] = useState<any>();
  const [matchingRelease, setMatchingRelease] = useState<any>();

  const fetchReleases = async () => {
    try {
      const response = await fetch("https://api.github.com/repos/codestoryai/binaries/releases");
      const releases = await response.json();
      setLatestRelease(releases[0]);

      const osLookup = os.includes("windows") ? ".exe" : os.includes("mac") ? ".zip" : "aide-linux";
      const archLookup =
        !!!architecture || architecture.includes("arm") ? "arm" : architecture === "amd64" ? "64" : undefined;

      if (latestRelease && archLookup) {
        const release = latestRelease.assets.find(
          (asset) => asset.name.toLowerCase().includes(osLookup) && asset.name.toLowerCase().includes(archLookup)
        );
        if (release) {
          console.log("release: " + release.name);
          setMatchingRelease(release);
        }
      }
    } catch (err) {
      console.log("error: " + err);
    }
  };
  fetchReleases();

  return (
    <HomeStyled
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.24 }}
    >
      <Head>
        <title>CodeStory — AI-powered mod of VSCode</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <NextSeo
        title="CodeStory — AI-powered mod of VSCode"
        description="A whole new paradigm for creating software"
        openGraph={{
          url: "https://codestory.ai/",
          title: "CodeStory — AI-powered mod of VSCode",
          description: "A whole new paradigm for creating software",
          images: [
            {
              url: "https://codestory.ai/",
            },
          ],
          site_name: "CodeStory",
        }}
      />

      <Hero matchingRelease={matchingRelease} latestRelease={latestRelease} os={os} />

      <Row sidePadding="medium" marginBottom="small">
        <Portion>
          <FeaturesGrid matchingRelease={matchingRelease} latestRelease={latestRelease} os={os} />
        </Portion>
      </Row>

      <Footer />
    </HomeStyled>
  );
};

export async function getServerSideProps(context) {
  const UA = context.req.headers["user-agent"];
  const parser = new UAParser(UA);

  let { name: os } = parser.getOS();
  let { architecture } = parser.getCPU();

  if (parser.getDevice().type) {
    os = null;
    architecture = null;
  }

  return {
    props: {
      os: os?.toLowerCase() ?? null,
      architecture: architecture?.toLowerCase() ?? null,
    },
  };
}

export default Home;
