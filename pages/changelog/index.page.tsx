import React from "react";
import Head from "next/head";
import {
    Element,
    Row,
    Portion,
    Text, Heading, HRule, Card
} from "fictoan-react";

import { getChangeLogFile } from "../../lib/changelog";
import markdownToHtml from "../../lib/markdownToHtml"
import { ChangelogStyled } from "./changelog.styled";
import Header from "../../components/header/Header";

type Props = {
    content: string;
}

export default function Changelog({ content }: Props) {
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
                <Portion desktopSpan="whole">
                    <Heading as="h2">
                        Changelog
                    </Heading>
                </Portion>
            </Row>

            <Row sidePadding="medium">
                <Portion desktopSpan="two-third">
                    <Element as="main" className="post-body">
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </Element>
                </Portion>
            </Row>
        </ChangelogStyled>
    );
}

export async function getStaticProps() {
    const changelog = getChangeLogFile();
    const content = await markdownToHtml(changelog || "");

    return {
        props: {
            content,
        },
    };
}
