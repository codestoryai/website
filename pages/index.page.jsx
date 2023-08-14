import React from "react";
import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";

import {
    Row,
    Portion,
    Heading,
} from "fictoan-react";

import { HomeStyled } from "../styles/Home.styled";

import Header from "../components/header/Header";
import FeaturesGrid from "../components/features-grid/FeaturesGrid";
import Footer from "../components/footer/Footer";
import AnimatedBackground from "../components/animated-background/AnimatedBackground";

const Home = () => {
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
                    description : "Roundabout setups, complex tool-chains, dependency hells. Coding has started to feel like a chore these days. We want to reduce and eventually remove the time spent on mundane tasks so that you can focus instead on building and shipping.",
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
                    <Heading as="h2" id="opener-headline" textColour="white">
                        We want to bring the joy of creation back into development
                    </Heading>
                </Portion>

                <Portion desktopSpan="1" />

                <Portion desktopSpan="half">
                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        What if AI could do the all the heavy-lifting, while you focused on meaningful ideation and
                        iteration?
                    </Heading>

                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        So, we’ve built an editor that not only generates code—but can also execute terminal
                        commands, refactor, fix bugs, review PRs, and handle git, too.
                    </Heading>

                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        It’s nothing short of magic.
                    </Heading>

                    <Link href="/manifesto">
                        Read our manifesto &rarr;
                    </Link>
                </Portion>
            </Row>


            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  LIST OF FEATURES  */}
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
