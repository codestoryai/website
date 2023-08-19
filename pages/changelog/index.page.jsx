import React from "react";
import Head from "next/head";

import {
    Element,
    Row,
    Portion,
    Text, Heading, HRule, Card
} from "fictoan-react";

import { ChangelogStyled } from "./changelog.styled";
import Header from "../../components/header/Header";

const Changelog = () => {
    return (
        <ChangelogStyled>
            <Head>
                <title>Changelog — Aide by CodeStory</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>

            <Header />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="medium" marginTop="small" marginBottom="small">
                <Portion desktopSpan="one-third">
                    <Heading as="h2">
                        Changelog
                    </Heading>
                </Portion>

                <Portion desktopSpan="two-third">
                    <Element as="main" className="post-body">
                        {/* Content goes here */}
                    </Element>
                </Portion>
            </Row>
        </ChangelogStyled>
    );
}

export default Changelog;
