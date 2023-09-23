import React from "react";
import Head from "next/head";

import {
    Element,
    Row,
    Portion,
    Text, Heading, HRule, Card
} from "fictoan-react";

import { AboutStyled } from "./about.styled";

const About = () => {

    return (
        <AboutStyled
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.24 }}
        >
            <Head>
                <title>Manifesto — CodeStory</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="medium" marginTop="small" marginBottom="small">
                <Portion desktopSpan="half">
                    <Heading as="h2" className="headline">
                        Manifesto
                    </Heading>
                </Portion>

                <Portion desktopSpan="half">
                    <Element as="main" className="post-body">
                        <Heading as="h4" weight="600" marginTop="nano" marginBottom="micro">
                            Engineers spend 70% of their working time not writing code<sup>[1]</sup>
                            —we want to increase the time spent for value creation.
                        </Heading>

                        <Heading as="h6" weight="400" marginBottom="micro">
                            And the best way to do that is to leverage AI. Already, tools like CoPilot are drastically
                            increasing developer productivity by a significant margin. If AI can be a game-changer when
                            it comes to generating code, what if we applied it to other aspects of coding, such as
                            debugging, refactoring and reviews?
                        </Heading>

                        <HRule marginTop="tiny" marginBottom="tiny" bgColour="green" />

                        <Heading as="h6" weight="400" marginBottom="micro">
                            Most engineering processes today such as code reviews and PRs involve a lot of manual
                            intervention and verification by multiple people. These are typically considered bottlenecks
                            or even annoyances during a standard work day.
                        </Heading>

                        <Heading as="h6" weight="400" marginBottom="micro">
                            Why not use AI to do the heavy lifting here—thus dramatically reducing the time taken and
                            effort required to finish these tasks?
                        </Heading>

                        <Heading as="h6" weight="400" marginBottom="micro">
                            Coding is truly fun. We want to bring the focus back to the joyful process of
                            building and creating—testing ideas, iterating, trying and even failing.
                        </Heading>

                        <HRule marginTop="tiny" marginBottom="tiny" bgColour="green" />

                        <Heading as="h6" weight="400" marginBottom="micro">
                            The human mind is the single most powerful resource we have. It is capable of some truly
                            great things, but it is usually bogged down by the mundane and the inane.
                        </Heading>

                        <Heading as="h6" weight="400" marginBottom="micro">
                            When you want to create the next killer app, when you want to solve problems at scale,
                            nothing ought to get in the way of execution. We want to build tools that remove
                            hindrances
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

                    <HRule marginTop="tiny" marginBottom="tiny" bgColour="green" />

                    <Text>
                        <Element as="sup" marginRight="nano">[1]</Element>
                        <a
                            href="https://www.microsoft.com/en-us/research/uploads/prod/2019/04/devtime-preprint-TSE19.pdf"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Today was a Good Day: The Daily Life of Software Developers
                        </a>
                    </Text>
                </Portion>
            </Row>
        </AboutStyled>
    );
}

export default About;
