import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";

import {
    Element,
    Heading,
    Card, Text
} from "fictoan-react";

import { HomeStyled } from "../styles/Home.styled";

import CSLogo from "../public/images/cs-logo.svg";
import YCLogo from "../public/images/yc-logo.svg";
import AideSS from "../public/images/home/aide.png";

const Home = () => {
    const [isCopyEmailClicked, setIsCopyEmailClicked] = useState(false);

    useEffect(() => {
        if (isCopyEmailClicked) {
            setTimeout(() => {
                setIsCopyEmailClicked(false);
            }, 3000);
        }
    }, [isCopyEmailClicked]);

    return (
        <HomeStyled
            initial={{opacity : 0}}
            animate={{opacity : 1}}
            exit={{opacity : 0}}
            transition={{ease : "easeInOut", duration : 0.24}}
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
                            url : "https://codestory.ai/"
                        }
                    ],
                    site_name   : "Aide by CodeStory"
                }}
            />


            <Element as="section" id="home-content">
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  INTRO  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card id="header" className="content-card" shape="rounded" padding="micro">
                    <Element as="div" className="cs-logo">
                        <CSLogo />
                    </Element>

                    <Element as="div" className="yc-logo" verticallyCentreItems>
                        <Text marginRight="nano">Backed by</Text>
                        <YCLogo />
                    </Element>
                </Card>

                <Card id="intro" className="content-card" shape="rounded" padding="huge">
                    <Heading
                        as="h2" className="line-height-one"
                    >
                        We want to bring the joy of creation back into development
                    </Heading>
                </Card>

                <Card id="description" className="content-card" shape="rounded" padding="huge">
                    <Heading as="h5" weight="400">
                        Roundabout setups, complex tool-chains, dependency hells. Coding has started to feel like
                        a chore these days. We want to reduce and eventually remove the time spent on mundane tasks
                        so that you can focus instead on building and shipping.
                    </Heading>

                    <Link href="/manifesto">
                        <Heading as="h5" weight="400">
                            Read our manifesto &rarr;
                        </Heading>
                    </Link>
                </Card>

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  AIDE  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card id="aide" className="content-card" shape="rounded" padding="huge">
                    <Heading
                        as="h2" align="centre"
                        marginTop="micro" marginBottom="nano"
                        className="line-height-one"
                        title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                    >
                        To that end, meet Aide, an AI-first IDE
                    </Heading>

                    <Heading as="h5" align="centre" weight="400" marginBottom="micro">
                        Just tell it what to do, and it shall be done.
                    </Heading>

                    <Element as="img" src={AideSS.src} />
                </Card>
            </Element>
        </HomeStyled>
    )
        ;
}

export default Home;
