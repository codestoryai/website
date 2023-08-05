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
                {/*  HEADER  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card id="header" className="content-card" shape="rounded" padding="micro">
                    <Link href="/">
                        <Element as="div" className="cs-logo">
                            <CSLogo />
                        </Element>
                    </Link>

                    <Element as="div" className="yc-logo" verticallyCentreItems>
                        <Text marginRight="nano">Backed by</Text>
                        <YCLogo />
                    </Element>
                </Card>

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  OPENER  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card id="intro" className="content-card" shape="rounded" padding="huge">
                    <Heading
                        as="h2" className="line-height-one"
                    >
                        We want to bring the joy of creation back into development
                    </Heading>
                </Card>

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  PROBLEM STATEMENT  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card id="description" className="content-card" shape="rounded" padding="huge">
                    <Heading as="h5" weight="400" className="font-akkurat" marginBottom="micro">
                        Roundabout setups, complex tool-chains, dependency hells. Coding has started to feel like
                        a chore these days. We want to reduce and eventually remove the time spent on mundane tasks
                        so that you can focus instead on building and shipping.
                    </Heading>

                    <Link href="/manifesto">
                        <Heading as="h5" weight="600" className="font-n27">
                            Read our manifesto &rarr;
                        </Heading>
                    </Link>
                </Card>

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  AIDE INTRO  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card id="aide" className="content-card" shape="rounded" padding="huge">
                    <Heading
                        as="h2" align="centre"
                        marginTop="micro" marginBottom="nano"
                        className="line-height-one"
                        title="AI + IDE = Aide = help / assist / assitant. Clever, huh?"
                    >
                        So, we built Aide, an AI-first IDE
                    </Heading>

                    <Heading as="h4" align="centre" weight="400" marginBottom="micro" className="font-akkurat">
                        Just tell it what to do, and it shall be done.
                    </Heading>

                    <Element as="img" src={AideSS.src} />
                </Card>

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  AIDE USP 1  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card id="usp-1" className="content-card" shape="rounded" padding="huge">
                    <Heading
                        as="h4"
                        marginBottom="nano"
                        className="line-height-one"
                        title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                    >
                        Create via chat
                    </Heading>

                    <Heading as="h5" weight="400" marginBottom="micro" className="font-akkurat">
                        Instruct Aide to do things, and watch the magic happen.
                    </Heading>

                    <Card shape="rounded" padding="micro" marginBottom="nano" bgColour="green-60" borderColour="green">
                        <Text>&rarr; Create a NextJS repo with Tailwind</Text>
                    </Card>

                    <Card shape="rounded" padding="micro" marginBottom="nano" bgColour="green-60" borderColour="green">
                        <Text>&rarr; Fix the dependency mismatch errors in this NodeJS project</Text>
                    </Card>

                    <Card shape="rounded" padding="micro" marginBottom="nano" bgColour="green-60" borderColour="green">
                        <Text>&rarr; Identify the async functions and check if they are being awaited properly to prevent race conditions.</Text>
                    </Card>

                    <Card shape="rounded" padding="micro" marginBottom="nano" bgColour="green-60" borderColour="green">
                        <Text>&rarr; Solve world hunger</Text>
                    </Card>

                    <Text marginTop="micro">Ok, maybe not the last one.</Text>
                </Card>

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  AIDE USP 2  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card id="usp-2" className="content-card" shape="rounded" padding="huge">
                    <Heading
                        as="h4"
                        marginBottom="nano"
                        className="line-height-one"
                        title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                    >
                        Decision making, also made easy
                    </Heading>

                    <Heading as="h5" weight="400" marginBottom="micro" className="font-akkurat">
                        Aide pre-evaluates and picks the best option for you, out of the box.
                    </Heading>
                </Card>
            </Element>
        </HomeStyled>
    )
        ;
}

export default Home;
