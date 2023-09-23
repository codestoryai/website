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

                <Portion desktopSpan="half" marginBottom="micro">
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

                <Portion mobileSpan="whole" desktopSpan="half">
                    <Row>
                        <Portion mobileSpan="half" desktopSpan="half">
                            <Element as="div" id="nav-links">
                                <Link href="https://docs.codestory.ai" passHref>
                                    <a target="_blank" rel="noopener noreferrer">
                                        Docs
                                    </a>
                                </Link>

                                <Link href="/blog">
                                    Blog
                                </Link>

                                <Link href="/changelog">
                                    Changelog
                                </Link>

                                <Link href="/about">
                                    About
                                </Link>
                            </Element>
                        </Portion>

                        <Portion mobileSpan="half" desktopSpan="half">
                            <Element as="div" id="social-links">
                                <a
                                    href="https://www.ycombinator.com/launches/JCn-codestory-an-ai-first-ide-re-imagined-for-the-future"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    YC
                                </a>

                                <a
                                    href="https://discord.gg/DNnh6tC9VA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Discord
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
                </Portion>
            </Row>
        </FooterStyled>
    );
};

export default Footer;
