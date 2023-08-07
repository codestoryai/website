import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";

import {
    Element,
    Heading,
    Card, Text, InputField, Button, Row, Portion
} from "fictoan-react";

import { HomeStyled } from "../styles/Home.styled";

import Header from "../components/header/Header";

import AideSS from "../public/images/home/aide.png";
import Footer from "../components/footer/Footer";

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

            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  HEADER  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Header />

            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  INTRO  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row sidePadding="medium" marginTop="small">
                <Portion desktopSpan="half">
                    <Heading as="h2" id="opener-headline" textColour="white" className="line-height-one">
                        We want to bring the joy of creation back into development
                    </Heading>
                </Portion>

                <Portion desktopSpan="half">
                    <Heading as="h5" marginBottom="micro">
                        Roundabout setups, complex tool-chains, dependency hells. Coding has started to feel like
                        a chore these days. We want to reduce and eventually remove the time spent on mundane tasks
                        so that you can focus instead on building and shipping.
                    </Heading>

                    <Link href="/manifesto">
                        <Button kind="primary" shadow="hard">
                            Read our manifesto &rarr;
                        </Button>
                    </Link>
                </Portion>
            </Row>

            <Row sidePadding="medium" marginTop="small" marginBottom="small">
                <Portion>
                    <Element as="section" id="product-grid">
                        {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  AIDE INTRO  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                        <Card
                            id="aide" className="content-card"
                            shape="rounded" padding="huge"
                            borderColour="green"
                        >
                            <Heading
                                as="h2" align="centre"
                                marginTop="micro" marginBottom="nano"
                                className="line-height-one"
                                title="AI + IDE = Aide = help / assist / assitant. Clever, huh?"
                            >
                                So, we built Aide, an AI-first IDE
                            </Heading>

                            <Heading as="h4" align="centre" weight="400" marginBottom="micro">
                                Just tell it what to do, and it shall be done.
                            </Heading>

                            <Element as="img" src={AideSS.src} />
                        </Card>


                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  AIDE USP 1  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        <Card
                            id="prompt-examples" className="content-card"
                            shape="rounded" shadow="hard" padding="huge"
                            borderColour="green"
                        >
                            <Heading
                                as="h4"
                                className="line-height-one"
                                title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                                marginBottom="nano"
                            >
                                Prompt anything and everything
                            </Heading>

                            <Heading as="h5" weight="400" marginBottom="micro">
                                Instruct Aide to do things, and watch the magic happen.
                            </Heading>

                            {/* PROMPT 1 ================================== */}
                            <Card
                                className="prompt-examples"
                                shape="rounded" marginBottom="nano"
                                bgColour="green-60" borderColour="transparent" shadow="hard"
                            >
                                <Card
                                    className="prompt-wrapper"
                                    padding="nano" shape="rounded" bgColour="white" borderColour="transparent"
                                >
                                    <Text margin="nano" weight="600">&rarr; Implement the notification handler
                                        interface</Text>
                                </Card>
                            </Card>

                            {/* PROMPT 2 ================================== */}
                            <Card
                                id="prompt-example-2" className="prompt-examples"
                                shape="rounded" marginBottom="nano"
                                bgColour="green-60" borderColour="transparent" shadow="hard"
                            >
                                <Card
                                    className="prompt-wrapper"
                                    padding="nano" shape="rounded" bgColour="white" borderColour="transparent"
                                >
                                    <Text margin="nano" weight="600">&rarr; Refactor the file uploader package to use
                                        dependency injection for the logger</Text>
                                </Card>
                            </Card>

                            {/* PROMPT 3 ================================== */}
                            <Card
                                id="prompt-example-3" className="prompt-examples"
                                shape="rounded" marginBottom="nano"
                                bgColour="green-60" borderColour="transparent" shadow="hard"
                            >
                                <Card
                                    className="prompt-wrapper"
                                    padding="nano" shape="rounded" bgColour="white" borderColour="transparent"
                                >
                                    <Text margin="nano" weight="600">&rarr; Fix the race condition in the event consumer
                                        causing files to be overwritten</Text>
                                </Card>
                            </Card>

                            {/* PROMPT 4 ================================== */}
                            <Card
                                id="prompt-example-4" className="prompt-examples"
                                shape="rounded" marginBottom="nano"
                                bgColour="green-60" borderColour="transparent" shadow="hard"
                            >
                                <Card
                                    className="prompt-wrapper"
                                    padding="nano" shape="rounded" bgColour="white" borderColour="transparent"
                                >
                                    <Text margin="nano" weight="600">&rarr; Solve world hunger</Text>
                                </Card>
                            </Card>

                            <Text marginTop="micro">Ok, maybe not the last one.</Text>
                        </Card>

                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  AIDE USP 2  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        <Card id="usp-2" className="content-card" shape="rounded" padding="huge">
                            <Heading
                                as="h4"
                                marginBottom="nano"
                                className="line-height-one"
                                title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                            >
                                Drop-in replacement for your IDE
                            </Heading>

                            <Heading as="h5" weight="400" marginBottom="micro">
                                Aide is build on VSCodium—so you can switch back to the familiar editor layout
                                seamlessly
                            </Heading>
                        </Card>


                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  OPENER  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        <Card id="intro" className="content-card" shape="rounded" padding="huge">
                        </Card>

                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  PROBLEM STATEMENT  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        <Card id="description" className="content-card" shape="rounded" padding="huge">
                            <Heading
                                as="h5"
                                marginBottom="nano"
                                title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                            >
                                All your VSCode extensions are still available within Aide, but we’re betting you won’t
                                need most of them.
                            </Heading>
                        </Card>

                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  AIDE USP 2  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                    </Element>

                </Portion>
            </Row>

            <Footer />

        </HomeStyled>
    )
        ;
}

export default Home;
