import React from "react";
import Head from "next/head";
import {
    Element,
    Row,
    Portion,
    Heading
} from "fictoan-react";

import Footer from "@/components/footer/Footer";
import { getChangeLogFile } from "../../lib/changelog";
import { ChangelogStyled } from "./changelog.styled";
import Header from "../../components/header/Header";
import { Markdown } from "../../components/markdown/Markdown";

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
                    <Heading as="h2" className="headline">
                        Changelog
                    </Heading>
                </Portion>
            </Row>

            <Row sidePadding="medium">
                <Portion desktopSpan="two-third">
                    <Element as="main" className="post-body">
                        <Markdown content={content} />
                    </Element>
                </Portion>
            </Row>

            <Footer />
        </ChangelogStyled>
    );
}

export async function getStaticProps() {
    const changelog = getChangeLogFile();

    return {
        props: {
            content: changelog,
        },
    };
}
