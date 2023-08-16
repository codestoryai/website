import React from "react";
import Link from "next/link";

import { Card, Element, HRule, Portion, Row, Text } from "fictoan-react";

import { FooterStyled } from "./Footer.styled";

import CSLogo from "../../public/images/logo-cs.svg";
import YCLogo from "../../public/images/logo-yc.svg";


const Footer = () => {
    return (
        <FooterStyled>
            <Row sidePadding="medium">
                <Portion>
                    <HRule marginTop="micro" marginBottom="micro" bgColour="green" />
                </Portion>

                <Portion desktopSpan="half">
                    <Link href="/">
                        <Element as="div" className="cs-logo">
                            <CSLogo />
                        </Element>
                    </Link>

                    <Element as="div" className="yc-logo" marginTop="nano" verticallyCentreItems>
                        <Text size="small" marginRight="nano">Backed by</Text>
                        <YCLogo />
                    </Element>
                </Portion>

                <Portion desktopSpan="one-fourth">
                    <Link href="/blog">
                        Blog
                    </Link>
                </Portion>

                <Portion desktopSpan="one-fourth">
                    <Element as="div" id="social-links">
                        <a
                            href="https://www.ycombinator.com/launches/JCn-codestory-an-ai-first-ide-re-imagined-for-the-future"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            YC profile
                        </a>

                        <a
                            href="https://discord.gg/DNnh6tC9VA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Join our Discord
                        </a>

                        <a
                            href="https://twitter.com/codestoryai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>

                        <a
                            href="https://www.linkedin.com/company/codestory-ai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </Element>
                </Portion>
            </Row>
        </FooterStyled>
    );
};

export default Footer;
