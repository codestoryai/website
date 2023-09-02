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

import { useDownload } from "../hooks/useDownload";
import Header from "../components/header/Header";
import FeaturesGrid from "../components/features-grid/FeaturesGrid";
import Footer from "../components/footer/Footer";
import AnimatedBackground from "../components/animated-background/AnimatedBackground";

const Home = () => {
    const release = useDownload();

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
            {/*  HEADER  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Header />

            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  PROBLEM STATEMENT  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row sidePadding="medium" marginTop="small" marginBottom="small">
                <Portion desktopSpan="11" marginBottom="micro">
                    <Heading as="h2" className="headline" textColour="white">
                        Welcome to a whole new paradigm for creating software.
                    </Heading>
                </Portion>

                <Portion desktopSpan="1" />

                <Portion desktopSpan="half">
                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        <span>CodeStory is an AI-powered mod of VSCode</span>
                    </Heading>

                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        Writing code by hand is dead. Interact with your code instead by simply describing what you want—and let the AI agent do the rest.
                    </Heading>

                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        Editing across files, searching, refactoring, debugging—our agent can do it all. And since it’s built on
                        VSCode, you can migrate seamlessly and use all your favourite extensions.
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
