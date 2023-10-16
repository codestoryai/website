import React, { useState } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { UAParser } from "ua-parser-js";
import { Row, Portion, Heading } from "fictoan-react";

import { HomeStyled } from "../styles/Home.styled";

import FeaturesGrid from "../components/features-grid/FeaturesGrid";
import Footer from "../components/footer/Footer";
import AnimatedBackground from "../components/animated-background/AnimatedBackground";
import { DownloadButtons } from "../components/download/download";

const Home = ({ os, architecture }: { os?: string, architecture?: string }) => {
    const [latestRelease, setLatestRelease] = useState<any>();
    const [matchingRelease, setMatchingRelease] = useState<any>();

    const fetchReleases = async () => {
        try {
            const response = await fetch("https://api.github.com/repos/codestoryai/binaries/releases")
            const releases = await response.json();
            setLatestRelease(releases[0]);

            const osLookup = os.includes('windows') ? '.exe' : os.includes('mac') ? '.zip' : 'aide-linux';
            const archLookup = !!!architecture || architecture.includes("arm") ? "arm" : architecture === "amd64" ? "64" : undefined;

            if (latestRelease && archLookup) {
                const release = latestRelease.assets.find(
                    asset => asset.name.toLowerCase().includes(osLookup) &&
                        asset.name.toLowerCase().includes(archLookup)
                );
                if (release) {
                    setMatchingRelease(release);
                }
            }
        } catch (err) {
            console.log("error: " + err);
        }
    }
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
                    description:
                        "A whole new paradigm for creating software",
                    images: [
                        {
                            url: "https://codestory.ai/",
                        },
                    ],
                    site_name: "CodeStory",
                }}
            />

            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  PROBLEM STATEMENT  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row sidePadding="medium" marginTop="small" marginBottom="small">
                <Portion desktopSpan="11" marginBottom="nano">
                    <Heading
                        as="h2" className="headline" textColour="white"
                        title="AI + IDE = Aide = help / assist / assitant. Clever, huh?"
                    >
                        Introducing Aide.
                    </Heading>
                    <Heading as="h2" className="headline" textColour="white">
                        The AI-powered mod of VSCode.
                    </Heading>
                </Portion>

                <Portion desktopSpan="1" />

                <Portion desktopSpan="half">
                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        <span>Instruct AI agents to build your software.</span>
                    </Heading>

                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        Editing across files, searching, debugging, refactoring—our agent can do everything you do within the IDE.
                        And Aide is built on VSCode, so you can migrate seamlessly and continue using your favourite extensions.
                    </Heading>

                    <DownloadButtons
                        matchingRelease={matchingRelease}
                        latestRelease={latestRelease}
                        os={os}
                    />
                </Portion>
            </Row>


            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  FEATURE GRID  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row sidePadding="medium" marginBottom="small">
                <Portion>
                    <FeaturesGrid
                        matchingRelease={matchingRelease}
                        latestRelease={latestRelease}
                        os={os}
                    />
                </Portion>
            </Row>

            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  FOOTER  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Footer />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  ANIMATED BG  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <AnimatedBackground />
        </HomeStyled>
    );
};

export async function getServerSideProps(context) {
    const UA = context.req.headers['user-agent'];
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
            architecture: architecture?.toLowerCase() ?? null
        }
    }
}

export default Home;
