import React from "react";
import Head from "next/head";
import Link from "next/link";

import {
    Element,
    Row,
    Portion,
    Text, Heading, HRule,
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
                            We're on a mission to empower developers reach new heights of creativity and productivity.
                        </Heading>

                        <Heading as="h6" weight="400" marginBottom="micro">
                            Developers today accomplish incredible things with programming, a highly delicate art that allows immense levels of mastery and value creation.
                        </Heading>

                        <Heading as="h6" weight="400" marginBottom="micro">
                            But the development process hasn't fundamentally changed in decades and requires substantial time commitment and navigation through the ever-growing complexities it brings.
                        </Heading>

                        <HRule marginTop="tiny" marginBottom="tiny" bgColour="green" />

                        <Heading as="h6" weight="400" marginBottom="micro">
                            We want to build tools that bring the focus back to the joyful process of building and creating—testing ideas, iterating, trying and even failing.
                        </Heading>

                        <Heading as="h6" weight="400" marginBottom="micro">
                            And we're starting this with <Link href="/">Aide</Link>, an AI-powered IDE. We see AI not just as a tool, but a trusted partner willing and capable of doing all the heavy-lifting for you. Like a team member who has your back.
                        </Heading>
                    </Element>

                    <HRule marginTop="tiny" marginBottom="tiny" bgColour="green" />

                    <Text size="large">
                        <a
                            href="https://stevejobsarchive.com/book"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            &ldquo;Give people wonderful tools, and they'll do wonderful things&rdquo;
                        </a>
                    </Text>
                </Portion>
            </Row>
        </AboutStyled>
    );
}

export default About;
