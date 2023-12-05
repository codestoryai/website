import React, { useEffect, useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { UAParser } from "ua-parser-js";

import { HomeStyled } from "../styles/Home.styled";

import Hero from "../components/sections/hero";
import { aide } from "content/base";

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

  useEffect(() => {
    fetchReleases();
  }, []);

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
        title={aide.title}
        description={aide.desc}
        openGraph={{
          url: aide.url,
          title: aide.title,
          description: aide.desc,
          images: [{ url: aide.image, }],
          site_name: aide.site_name,
        }}
      />

      <Hero matchingRelease={matchingRelease} latestRelease={latestRelease} os={os} />

      {/* <FeaturesGrid matchingRelease={matchingRelease} latestRelease={latestRelease} os={os} /> */}
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
