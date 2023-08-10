import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";

import {
    Element,
    Heading,
    Card, Text, InputField, Button, Row, Portion, Badge,
} from "fictoan-react";

import { HomeStyled } from "../styles/Home.styled";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import AideSS from "../public/images/home/aide.png";
import IDEReplacement from "../public/images/home/ide-replacement.png";
import GitDiff from "../public/images/home/git-diff.png";
import NLPSearch from "../public/images/home/nlp-search.png";
import Explanations from "../public/images/home/explanations.jpg";
import AnimatedBackground from "../components/animated-background/AnimatedBackground";

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.24 }}
        >
            <Head>
                <title>Aide by CodeStory — Bringing the joy of creation back to development</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>

            <NextSeo
                title="Aide by CodeStory — Bringing the joy of creation back into development"
                description="Roundabout setups, complex tool-chains, dependency hells. Coding has started to feel like a chore these days. We want to reduce and eventually remove the time spent on mundane tasks so that you can focus instead on building and shipping."
                openGraph={{
                    url: "https://codestory.ai/",
                    title: "Aide by CodeStory — Bringing the joy of creation back into development",
                    description: "Roundabout setups, complex tool-chains, dependency hells. Coding has started to feel like a chore these days. We want to reduce and eventually remove the time spent on mundane tasks so that you can focus instead on building and shipping.",
                    images: [
                        {
                            url: "https://codestory.ai/",
                        },
                    ],
                    site_name: "Aide by CodeStory",
                }}
            />

            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  HEADER  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Header />

            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  PROBLEM STATEMENT  */}
            {/*  ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row sidePadding="medium" marginTop="medium" marginBottom="small">
                <Portion desktopSpan="11">
                    <Heading as="h2" id="opener-headline" textColour="white">
                        We want to bring the joy of creation back into development
                    </Heading>
                </Portion>

                <Portion desktopSpan="1" />

                <Portion desktopSpan="half">
                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        What if AI could do the all the heavy-lifting, while you focused on meaningful ideation and iteration?
                    </Heading>

                    <Heading as="h5" weight="400" textColour="white" opacity="80" marginBottom="micro">
                        Today’s editors are built for humans to write code but not specialized for AI. So, we’re building an editor that gives AI the same level of access as a human.
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
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  AIDE INTRO  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
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
                                Introducing CodeStory ✨, an AI-powered mod of VSCode.
                            </Heading>

                            <Heading as="h6" align="centre" weight="400" marginBottom="micro">
                                Just tell it what to do, and it shall be done.
                            </Heading>

                            <Row>
                                <Portion>
                                    <Link
                                        href="https://github.com/codestoryai/binaries/releases/download/v1.0.4/AideappExtra.zip"
                                        passHref
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <Button horizontallyCenterThis kind="primary" shadow="hard">
                                            Download for MacOS (Apple Silicon)
                                        </Button>
                                    </Link>
                                </Portion>
                            </Row>

                            <Element as="div" id="image-wrapper" shadow="soft">
                                <Element
                                    as="img" src={AideSS.src}
                                    id="aide-screenshot"
                                />

                                <Element as="div" id="gradient-wrapper" />
                            </Element>


                            <Text marginTop="micro" align="center" size="large">
                                Some of our core functionality is also available as a <a
                                    href="https://marketplace.visualstudio.com/items?itemName=codestory-ghost.codestoryai"
                                    target="_blank" rel="noopener noreferrer"><strong>VSCode
                                        extension</strong></a> currently, for
                                those interested—It’s part of our development build, so beware of breaking changes!
                            </Text>
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
                        {/*  IDE REPLACEMENT  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        <Card id="ide-replacement" className="content-card" shape="rounded" padding="huge" borderColour="green">
                            <Heading
                                as="h4"
                                marginBottom="nano"
                                className="line-height-one"
                                title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                            >
                                Drop-in replacement for your IDE
                            </Heading>

                            <Heading as="h5" weight="400" marginBottom="micro">
                                Aide is build on VSCode—so you can switch back to the familiar editor layout
                                in a beat
                            </Heading>

                            <Element as="img" src={IDEReplacement.src} />
                        </Card>


                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  CODE EXPLANATIONS  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        <Card id="code-explanation" className="content-card" shape="rounded" padding="huge">
                            <Row>
                                <Portion desktopSpan="one-third">
                                    <Heading
                                        as="h4"
                                        marginTop="micro"
                                        marginBottom="nano"
                                    >
                                        Code explanations with surrounding context
                                    </Heading>
                                </Portion>

                                <Portion desktopSpan="two-third">
                                    <Element as="img" src={Explanations.src} />
                                </Portion>
                            </Row>
                        </Card>

                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  EXTENSIONS  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*<Card id="description" className="content-card" shape="rounded" padding="huge">*/}
                        {/*    <Heading*/}
                        {/*        as="h5"*/}
                        {/*    >*/}
                        {/*        All your VSCode extensions are still available within Aide, but we’re betting you won’t*/}
                        {/*        need most of them.*/}
                        {/*    </Heading>*/}
                        {/*</Card>*/}

                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  NATURAL LANGUAGE SEARCH  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        <Card id="nlp-search" className="content-card" shape="rounded" padding="huge">
                            <Heading
                                as="h4"
                                marginBottom="nano"
                                className="line-height-one"
                                title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                            >
                                Natural language search
                            </Heading>

                            <Heading as="h5" weight="400" marginBottom="micro">
                                Type intuitively without worrying about syntax—Aide understands all.
                            </Heading>

                            <Element as="img" src={NLPSearch.src} />
                        </Card>

                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  IDE REPLACEMENT  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        <Card id="git-diff" className="content-card" shape="rounded" padding="huge">
                            <Heading
                                as="h4"
                                marginBottom="nano"
                                className="line-height-one"
                                title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                            >
                                Group git diffs into related chunks
                            </Heading>

                            <Heading as="h5" weight="400" marginBottom="micro">
                                Interactively manage merging and refactoring, without descending into chaos.
                            </Heading>

                            <Element as="img" src={GitDiff.src} />
                        </Card>

                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  IDE REPLACEMENT  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
                        <Card id="commit-messages" className="content-card" shape="rounded" padding="huge">
                            <Heading
                                as="h4"
                                marginBottom="nano"
                                className="line-height-one"
                                title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                            >
                                Auto generated commit messages
                            </Heading>

                            <Heading as="h5" weight="400" marginBottom="micro">
                                Summaries and changelogs created with full context.
                            </Heading>
                        </Card>
                    </Element>
                </Portion>

                <Portion>
                    <Badge
                        size="medium"
                        bgColour="pistachio-40" textColour="green"
                        shape="curved"
                        marginTop="micro"
                        horizontallyCentreThis
                    >
                        A LOT MORE FEATURES COMING SOON!
                    </Badge>
                </Portion>
            </Row>

            <Footer />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  ANIMATED BG  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <AnimatedBackground />
        </HomeStyled>
    );
};

export default Home;
