import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

import { Button, Card, Element, Heading, Text, Portion, Row, HRule } from "fictoan-react";

import { useDownload } from "../../hooks/useDownload"

import Debugging from "../../public/images/home/debugging.mp4";
import ImportSettings from "../../public/images/home/import.png";
import NLPSearch from "../../public/images/home/nlp-search.png";
import Agent from "../../public/images/home/agent.png";
import Omnibar from "../../public/images/home/omnibar.png"
import GitDiff from "../../public/images/home/git-diff.png";
import SlashCommands from "../../public/images/home/slash-commands.png";
import DebugPrompt from "../../public/images/home/debug.png";
import ExplainPrompt from "../../public/images/home/explain-prompt.png";
import Migration from "../../public/images/home/migrate.png";
import LogoTS from "../../public/images/logo-ts.svg";
import LogoJS from "../../public/images/logo-js.svg";
import LogoPython from "../../public/images/logo-python.svg";
import LogoGo from "../../public/images/logo-go.svg";

import { ListOfAdditionalFeatures } from "./ListOfFeatures";

import { FeaturesGridStyled } from "./FeaturesGrid.styled";
import { Player } from "video-react";


const FeaturesGrid = () => {
    const release = useDownload();
    const featuresRef = useRef(null);

    useEffect(() => {
        const featuresEl = featuresRef.current;
        if (!featuresEl) return;

        const featureEls = featuresEl.querySelectorAll(".content-card");

        const handlePointerMove = (ev) => {
            featureEls.forEach((featureEl) => {
                const rect = featureEl.getBoundingClientRect();
                featureEl.style.setProperty("--x", ev.clientX - rect.left);
                featureEl.style.setProperty("--y", ev.clientY - rect.top);
            });
        };

        featuresEl.addEventListener("pointermove", handlePointerMove);

        return () => {
            featuresEl.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    return (
        <FeaturesGridStyled>
            <Element as="div" ref={featuresRef}>
                <Element as="div" id="features-grid" className="features">
                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  AIDE INTRO  */}
                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Card
                        id="aide" className="feature content-card"
                        shape="rounded" borderColour="green"
                        style={{ padding: "4px" }}
                    >
                        {/*<Heading*/}
                        {/*    as="h2" align="centre"*/}
                        {/*    marginBottom="micro"*/}
                        {/*    className="line-height-one"*/}
                        {/*    */}
                        {/*>*/}
                        {/*    Introducing CodeStory ✨<br />An AI-powered mod of VSCode*/}
                        {/*</Heading>*/}

                        {/*<Heading as="h5" align="centre" weight="400" marginBottom="micro" paddingLeft="small" paddingRight="small">*/}
                        {/*    Rather than humans to write code, we’ve optimised the IDE for AI to perform tasks and solve*/}
                        {/*    problems across your dev environment.*/}
                        {/*</Heading>*/}

                        {/*<Row>*/}
                        {/*    <Portion>*/}
                        {/*        <Link*/}
                        {/*            href={release?.assets?.[0]?.browser_download_url ?? ""}*/}
                        {/*            passHref*/}
                        {/*            target="_blank"*/}
                        {/*            rel="noopener noreferrer"*/}
                        {/*        >*/}
                        {/*            <Button horizontallyCenterThis kind="primary" shadow="hard">*/}
                        {/*                Download for MacOS (Apple Silicon)*/}
                        {/*            </Button>*/}
                        {/*        </Link>*/}
                        {/*    </Portion>*/}
                        {/*</Row>*/}

                        {/* <Element as="div" id="image-wrapper" shadow="soft"> */}
                        <Player muted loop autoPlay playsInline width="100%">
                            <source src={Debugging} type="video/mp4" />
                        </Player>

                        <Element as="div" id="gradient-wrapper" />
                        {/* </Element> */}

                    </Card>

                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  CODE EXPLANATIONS  */}
                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Card
                        id="code-explanation"
                        className="feature content-card"
                        shape="rounded" padding="large"
                    >
                        <Heading
                            as="h4"
                            marginTop="micro"
                            marginBottom="nano"
                        >
                            AI that understands new & existing codebases.
                        </Heading>
                        <Row>
                            <Portion desktopSpan="one-fourth">
                                <Heading as="h5" weight="400" marginTop="nano">
                                    The agent can scan your codebase, navigate it,
                                    find the right places to edit, make changes and verify it's work
                                    before reporting back to you.
                                </Heading>
                            </Portion>

                            <Portion desktopSpan="three-fourth" padding="nano">
                                <Element as="img" src={Agent.src} />
                            </Portion>
                        </Row>
                    </Card>

                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  AUTO GEN COMMIT MESSAGES  */}
                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Card
                        id="commit-messages"
                        className="feature content-card"
                        shape="rounded"
                    >
                        <Element as="div" padding="micro" marginTop="nano">
                            <Heading
                                as="h4"
                                marginBottom="micro"
                            >
                                At your command.
                            </Heading>
                            <Heading
                                as="h6"
                                marginBottom="micro"
                                className="line-height-one"
                            >
                                <Element as="span" className="kbd">shift</Element> + <Element as="span" className="kbd">shift</Element>
                            </Heading>

                            <Heading as="h5" weight="400">
                                You're always a keyboard shortcut away from accessing the AI agent.
                            </Heading>
                        </Element>

                        <Element as="img" src={Omnibar.src} />
                    </Card>

                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  AIDE USP 1  */}
                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Card
                        id="prompt-examples"
                        className="feature content-card"
                        shape="rounded" shadow="hard" padding="huge" borderColour="green"
                    >
                        <Heading
                            as="h4"
                            className="line-height-one"
                            marginBottom="micro"
                        >
                            Prompt anytime, anywhere.
                        </Heading>

                        <Heading as="h5" weight="400" marginBottom="micro">
                            Ask general questions, or use slash commands and `@` context providers
                            for powerful workflows.
                        </Heading>

                        {/* PROMPT 1 ================================== */}
                        <Card
                            className="prompt-examples"
                            shape="rounded" marginBottom="nano"
                            bgColour="green-60" borderColour="transparent" shadow="hard"
                        >
                            <Card
                                className="prompt-wrapper"
                                shape="rounded" bgColour="white" borderColour="transparent"
                            >
                                <Text margin="nano" weight="600">Make changes to your codebase</Text>
                            </Card>
                        </Card>

                        <Element as="img" src={SlashCommands.src} marginBottom="micro" />

                        {/* PROMPT 2 ================================== */}
                        <Card
                            id="prompt-example-2" className="prompt-examples"
                            shape="rounded" marginBottom="nano"
                            bgColour="green-60" borderColour="transparent" shadow="hard"
                        >
                            <Card
                                className="prompt-wrapper"
                                shape="rounded" bgColour="white" borderColour="transparent"
                            >
                                <Text margin="nano" weight="600">Debug issues in the code</Text>
                            </Card>
                        </Card>

                        <Element as="img" src={DebugPrompt.src} marginBottom="micro" />

                        {/* PROMPT 3 ================================== */}
                        <Card
                            id="prompt-example-3" className="prompt-examples"
                            shape="rounded" marginBottom="nano"
                            bgColour="green-60" borderColour="transparent" shadow="hard"
                        >
                            <Card
                                className="prompt-wrapper"
                                shape="rounded" bgColour="white" borderColour="transparent"
                            >
                                <Text margin="nano" weight="600">Understand unfamiliar code</Text>
                            </Card>
                        </Card>

                        <Element as="img" src={ExplainPrompt.src} marginBottom="micro" />

                        {/* PROMPT 4 ================================== */}
                        <Card
                            id="prompt-example-4" className="prompt-examples"
                            shape="rounded" marginBottom="nano"
                            bgColour="green-60" borderColour="transparent" shadow="hard"
                        >
                            <Card
                                className="prompt-wrapper"
                                shape="rounded" bgColour="white" borderColour="transparent"
                            >
                                <Text margin="nano" weight="600">Eliminate all your tech debt</Text>
                            </Card>
                        </Card>

                        <Text marginTop="nano" weight="600">Ok, we don't support this one yet.</Text>
                    </Card>

                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  NATURAL LANGUAGE SEARCH  */}
                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Card
                        id="nlp-search"
                        className="feature content-card"
                        shape="rounded" padding="huge"
                    >
                        <Heading
                            as="h4"
                            marginBottom="nano"
                            className="line-height-one"
                            paddingTop="micro"
                        >
                            Search as you’d think
                        </Heading>

                        <Heading as="h5" weight="400" marginBottom="micro">
                            Type intuitively even when you can't remember what you're looking for.
                        </Heading>

                        <Element as="img" src={NLPSearch.src} />
                    </Card>

                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  GIT DIFF  */}
                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Card
                        id="git-diff"
                        className="feature content-card"
                        shape="rounded" padding="huge"
                    >
                        <Heading
                            as="h4"
                            marginBottom="nano"
                            className="line-height-one"
                            paddingTop="micro"
                        >
                            Stay on top of your work
                        </Heading>

                        <Heading as="h5" weight="400" marginBottom="micro">
                            Keep track of your changes through grouped summaries provided by AI.
                        </Heading>

                        <Element as="img" src={GitDiff.src} />
                    </Card>

                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  MORE FEATURES  */}
                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Card
                        id="more-features"
                        className="feature content-card"
                        shape="rounded" padding="huge"
                    >
                        <Heading
                            as="h4"
                            marginBottom="nano"
                            className="line-height-one"
                        >
                            Migrate from VSCode in 1-click. And stay updated.
                        </Heading>

                        <Heading as="h5" weight="400" marginBottom="nano">
                            We’ll keep Aide up to date with VSCode releases, so you never have to compromise between editors.
                        </Heading>

                        <Element as="img" src={Migration.src} />
                    </Card>

                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  LANGUAGE SUPPORT  */}
                    {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Card
                        id="language-support"
                        className="feature content-card"
                        shape="rounded" padding="medium"
                    >
                        <Heading as="h5" marginBottom="micro">
                            Supported languages
                        </Heading>

                        <Element as="div" id="language-grid" marginBottom="micro">
                            <Element as="div" className="language-logo" marginRight="nano">
                                <LogoTS />
                            </Element>

                            <Element as="div" className="language-logo">
                                <LogoJS />
                            </Element>

                            <Element as="div" className="language-logo python" >
                                <LogoPython />
                            </Element>

                            <Element as="div" className="language-logo">
                                <LogoGo />
                            </Element>
                        </Element>

                        <Text>With more languages on the way!</Text>
                    </Card>
                </Element>

                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/* FEATURES LOADED FROM ARRAY */}
                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/* <Row id="other-features" marginTop="nano">
                    {ListOfAdditionalFeatures.map((featureItem, index) => {
                        return (
                            <Portion key={index} desktopSpan={featureItem.portionWidth}>
                                <Card
                                    className="feature content-card array-card"
                                    shape="rounded" padding="medium"
                                    bgColour="green-60" borderColour="green" shadow="hard"
                                    marginBottom="nano"
                                >
                                    <Heading as="h4">{featureItem.heading}</Heading>
                                    <Heading as="h5" weight="400">{featureItem.subHeading}</Heading>

                                    {featureItem.imagePath
                                        ? <Element as="img" src={featureItem.imagePath.src} />
                                        : ""
                                    }
                                </Card>
                            </Portion>
                        )
                    })}
                </Row> */}
            </Element>

            <HRule marginTop="micro" marginBottom="micro" bgColour="green" />

            <Card
                id="more-features"
                className="feature content-card"
                shape="rounded" padding="medium"
            >
                <Heading as="h6" weight="400" align="centre" marginBottom="micro">
                    A lot more features coming soon—take our early build for a spin in the meanwhile!
                </Heading>

                <Link
                    href={release?.assets?.[0]?.browser_download_url ?? ""}
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button horizontallyCenterThis kind="primary" shadow="hard">
                        Download for MacOS (Apple Silicon)
                    </Button>
                </Link>
            </Card>
        </FeaturesGridStyled>
    );
}

export default FeaturesGrid;
