import Image from "next/image";

import { FooterStyled } from "./Footer.styled";
import { Card, Element, HRule, Portion, Row, Text } from "fictoan-react";

import { AiFillSlackCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import CSLogo from "../../public/images/cs-logo.svg";
import Link from "next/link";
import React from "react";


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
                </Portion>

                <Portion desktopSpan="one-fourth">
                    <a
                        href="https://www.ycombinator.com/launches/JCn-codestory-an-ai-first-ide-re-imagined-for-the-future"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Text>Blog</Text>
                    </a>

                    <a
                        href="https://www.ycombinator.com/launches/JCn-codestory-an-ai-first-ide-re-imagined-for-the-future"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Text>Team</Text>
                    </a>
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

                    <a
                        href="https://join.slack.com/t/codestoryai/shared_invite/zt-1x4zy3mk1-9fL5k~7XGSNNku7~iYr51w"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Text>Join our Slack</Text>
                    </a>
                </Portion>
            </Row>
        </FooterStyled>
    );
};

export default Footer;
