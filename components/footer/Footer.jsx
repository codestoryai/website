import Image from "next/image";

import { FooterStyled } from "./Footer.styled";
import { Card, Element, HRule, Portion, Row, Text } from "fictoan-react";

import { AiFillSlackCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import CSLogo from "../../public/images/cs-logo.svg";
import Link from "next/link";
import React from "react";
import YCLogo from "../../public/images/yc-logo.svg";


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
                    <a
                        href="https://www.ycombinator.com/launches/JCn-codestory-an-ai-first-ide-re-imagined-for-the-future"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Text>YC profile</Text>
                    </a>

                    <a
                        href="https://discord.gg/4JXfX5YR"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Text>Join our Discord</Text>
                    </a>

                    <a
                        href="https://twitter.com/codestoryai"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Text>Twitter</Text>
                    </a>

                    <a
                        href="https://www.linkedin.com/company/codestory-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Text>LinkedIn</Text>
                    </a>
                </Portion>
            </Row>
        </FooterStyled>
    );
};

export default Footer;
