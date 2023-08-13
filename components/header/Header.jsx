import React from "react";
import Link from "next/link";
import { Card, Element, Portion, Row, Text } from "fictoan-react";

import { HeaderStyled } from "./Header.styled";
import CSLogo from "../../public/images/logo-cs.svg";
import YCLogo from "../../public/images/logo-yc.svg";

const Header = () => {
    return (
        <HeaderStyled>
            <Row sidePadding="medium">
                <Portion>
                    <Element as="div" verticallyCentreItems pushItemsToEnds>
                        <Element as="div" verticallyCentreItems>
                            <Link href="/">
                                <Element as="div" className="cs-logo">
                                    <CSLogo />
                                </Element>
                            </Link>

                            <Element as="div" className="yc-logo" verticallyCentreItems hideOnMobile>
                                <Text size="small" marginLeft="nano" marginRight="nano">
                                    &mdash;
                                </Text>
                                <Text size="small" marginRight="nano">
                                    backed by
                                </Text>
                                <YCLogo />
                            </Element>
                        </Element>

                        <Element as="nav" verticallyCentreItems>
                            <Link href="https://docs.codestory.ai" passHref>
                                <a target="_blank" rel="noopener noreferrer">
                                    DOCS
                                </a>
                            </Link>
                            <Link href="/blog">BLOG</Link>
                        </Element>
                    </Element>
                </Portion>
            </Row>
        </HeaderStyled>
    );
};

export default Header;
