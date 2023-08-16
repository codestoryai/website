import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

import { Button, Card, Element, Heading, Text, Portion, Row } from "fictoan-react";

import Debugging from "../../public/images/home/debugging.mp4";
import IDEReplacement from "../../public/images/home/ide-replacement.png";
import ImportSettings from "../../public/images/home/import.png";
import NLPSearch from "../../public/images/home/nlp-search.png";
import Explanations from "../../public/images/home/explanations.jpg";
import GitDiff from "../../public/images/home/git-diff.png";
import LogoTS from "../../public/images/logo-ts.svg";
import LogoJS from "../../public/images/logo-js.svg";
import { FeaturesGridStyled } from "./FeaturesGrid.styled";

const FeaturesGrid = () => {
    const [release, setRelease] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/repos/codestoryai/binaries/releases")
            .then((res) => res.json())
            .then((releases) => {
                setRelease(releases[0]);
            });
    }, []);

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
            <Element as="div" id="features-grid" className="features" ref={featuresRef}>
                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  AIDE INTRO  */}
                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card
                    id="aide" className="feature content-card"
                    shape="rounded" padding="huge" borderColour="green"
                >
                    <Heading
                        as="h2" align="centre"
                        marginBottom="micro"
                        className="line-height-one"
                        title="AI + IDE = Aide = help / assist / assitant. Clever, huh?"
                    >
                        Introducing CodeStory ✨, an AI-powered mod of VSCode.
                    </Heading>

                    <Heading as="h5" align="centre" weight="400" marginBottom="micro" paddingLeft="small" paddingRight="small">
                        Rather than humans to write code, we’ve optimised the IDE for AI to perform tasks and solve
                        problems across your dev environment.
                    </Heading>

                    <Row>
                        <Portion>
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
                        </Portion>
                    </Row>

                    <Element as="div" id="image-wrapper" shadow="soft">
                        <video muted loop autoPlay playsInline width="100%">
                            <source src={Debugging} type="video/mp4" />
                        </video>

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

                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  IDE REPLACEMENT  */}
                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card
                    id="ide-replacement"
                    className="feature content-card"
                    shape="rounded" padding="huge" borderColour="green"
                >
                    <Heading
                        as="h4"
                        marginBottom="nano"
                        className="line-height-one"
                        title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                    >
                        Migrate in a snap
                    </Heading>

                    <Heading as="h5" weight="400" marginBottom="micro">
                        All your VSCode extensions, shortcuts and customizations—Aide supports it all
                    </Heading>

                    <Element as="img" src={ImportSettings.src} />
                </Card>


                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  CODE EXPLANATIONS  */}
                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card
                    id="code-explanation"
                    className="feature content-card"
                    shape="rounded" padding="huge"
                >
                    <Row>
                        <Portion desktopSpan="one-third">
                            <Heading
                                as="h4"
                                marginTop="micro"
                                marginBottom="nano"
                            >
                                Get code explanations with surrounding context
                            </Heading>
                        </Portion>

                        <Portion desktopSpan="two-third">
                            <Element as="img" src={Explanations.src} />
                        </Portion>
                    </Row>
                </Card>

                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  AUTO GEN COMMIT MESSAGES  */}
                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Card
                    id="commit-messages"
                    className="feature content-card"
                    shape="rounded" padding="huge"
                >
                    <Heading
                        as="h4"
                        marginBottom="nano"
                        className="line-height-one"
                        title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                    >
                        Auto generated PR summaries
                    </Heading>

                    <Heading as="h5" weight="400" marginBottom="micro">
                        Summaries and changelogs created with full context.
                    </Heading>
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
                        title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                    >
                        Search as you think
                    </Heading>

                    <Heading as="h5" weight="400" marginBottom="micro">
                        Type intuitively without worrying about syntax—Aide understands all.
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
                        title="AI + IDE = Aide = help/assist/assitant. Clever, huh?"
                    >
                        Group git diffs into related chunks
                    </Heading>

                    <Heading as="h5" weight="400" marginBottom="micro">
                        Interactively manage merging and refactoring, without descending into chaos.
                    </Heading>

                    <Element as="img" src={GitDiff.src} />
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
                    </Element>

                    <Text>More languages on the way&mdash;next up is Python.</Text>
                </Card>

                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  MORE FEATURES  */}
                {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
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
            </Element>
        </FeaturesGridStyled>
    );
}

export default FeaturesGrid;
