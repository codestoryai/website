import React from "react";
import Head from "next/head";
import Link from "next/link";

import {
    Element,
    Row,
    Portion,
    Text, Heading, HRule, Card
} from "fictoan-react";

import { ManifestoStyled } from "./manifesto.styled";
import CSLogo from "../../public/images/cs-logo.svg";
import YCLogo from "../../public/images/yc-logo.svg";

const Manifesto = () => {

    return (
        <ManifestoStyled>
            <Head>
                <title>Manifesto — Aide by CodeStory</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" marginTop="nano" marginBottom="micro">
                <Row sidePadding="nano">
                    <Portion desktopSpan="whole">
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
                    </Portion>
                </Row>

                <Row sidePadding="nano">
                    <Portion desktopSpan="one-fourth">
                        <Heading as="h2" align="right">
                            Manifesto
                        </Heading>
                    </Portion>

                    <Portion desktopSpan="one-fourth" />

                    <Portion desktopSpan="one-third">
                        <Element as="main" className="post-body">
                            <Heading as="h4" weight="600" marginTop="nano" marginBottom="micro">
                                Writing code today is more grunt work than actually executing on your idea.
                            </Heading>

                            <Heading as="h4" weight="600" marginBottom="tiny">And we want to change that.</Heading>

                            <Heading as="h6" weight="400" marginBottom="micro">
                                We’ve all been there—you get a great idea, and fire up your dev environment, all excited—and
                                spend the next half an hour setting up your project, managing dependencies, updating apps,
                                and looking up StackOverflow for an overly specific bug that no one seems to have the answer for. And
                                before you know it, your enthusiasm for your idea has all but fizzled out.
                            </Heading>

                            <Heading as="h6" weight="400" marginBottom="micro">
                                What if that wasn’t the norm?
                            </Heading>

                            <HRule marginTop="tiny" marginBottom="tiny" bgColour="green-60" />

                            <Heading as="h6" weight="400" marginBottom="micro">
                                The human mind is the single most powerful resource we have. It is capable of some truly
                                great things, but it is usually bogged down by the mundane and the inane.
                            </Heading>

                            <Heading as="h6" weight="400" marginBottom="micro">
                                When you want to create the next killer app, when you want to solve problems at scale,
                                nothing ought to get in the way of execution. We want to build tools that remove hindrances
                                in your workflow.
                            </Heading>

                            <Heading as="h6" weight="400" marginBottom="micro">
                                We want to build tools that allow people to get from idea to execution as quickly
                                as possible.
                            </Heading>

                            <Heading as="h6" weight="400" marginBottom="micro">
                                We want to help you solve for humanity with the least resistance possible.
                            </Heading>
                        </Element>
                    </Portion>
                </Row>
            </Element>
        </ManifestoStyled>
    );
}

export default Manifesto;
