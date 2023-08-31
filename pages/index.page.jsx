import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";

import {
    Row,
    Portion,
    Heading, Button,
} from "fictoan-react";

import { HomeStyled } from "../styles/Home.styled";

import Header from "../components/header/Header";
import FeaturesGrid from "../components/features-grid/FeaturesGrid";
import Footer from "../components/footer/Footer";
import AnimatedBackground from "../components/animated-background/AnimatedBackground";

const Home = () => {
    const [release, setRelease] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/repos/codestoryai/binaries/releases")
            .then((res) => res.json())
            .then((releases) => {
                setRelease(releases[0]);
            });
    }, []);

    return (
        <HomeStyled
            initial={{ opacity : 0 }}
            animate={{ opacity : 1 }}
            exit={{ opacity : 0 }}
            transition={{ ease : "easeInOut", duration : 0.24 }}
        >
            <Head>
                <title>Aide by CodeStory — Bringing the joy of creation back to development</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>

            <NextSeo
                title="Aide by CodeStory — Bringing the joy of creation back into development"
                description="Roundabout setups, complex tool-chains, dependency hells. Coding has started to feel like a chore these days. We want to reduce and eventually remove the time spent on mundane tasks so that you can focus instead on building and shipping."
                openGraph={{
                    url         : "https://codestory.ai/",
                    title       : "Aide by CodeStory — Bringing the joy of creation back into development",
                    description :
                        "Roundabout setups, complex tool-chains, dependency hells. Coding has started to feel like a chore these days. We want to reduce and eventually remove the time spent on mundane tasks so that you can focus instead on building and shipping.",
                    images      : [
                        {
                            url : "https://codestory.ai/",
                        },
                    ],
                    site_name   : "Aide by CodeStory",
                }}
            />

            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  HEADER  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Header />

            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  PROBLEM STATEMENT  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row sidePadding="medium" marginTop="small" marginBottom="small">
                <Portion desktopSpan="11">
                    <Heading as="h2" className="headline" textColour="white">
                        Welcome to a whole new way of <span>writing</span> creating code.
                    </Heading>
                </Portion>

                <Portion desktopSpan="1" />

                <Portion desktopSpan="half">
                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        Typing code by hand is dead. Aide lets you create code by simply describing what you want—and
                        then let the AI agent do the rest.
                    </Heading>

                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        Writing snippets, refactoring, conflict resolution—Aide can do it all. And, it’s built on
                        VSCode, which means you can migrate seamlessly, and use it with your favourite extensions.
                    </Heading>

                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        It’s nothing short of magic.
                    </Heading>

                    <Link
                        href={release?.assets?.[0]?.browser_download_url ?? ""}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button kind="primary" shadow="hard">
                            Download for MacOS (Apple Silicon)
                        </Button>
                    </Link>

                    {/*<Link href="/manifesto">Read our manifesto &rarr;</Link>*/}
                </Portion>
            </Row>


            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  FEATURE GRID  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row sidePadding="medium" marginBottom="small">
                <Portion>
                    <FeaturesGrid />
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

export default Home;
