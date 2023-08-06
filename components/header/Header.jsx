import React from "react";
import Link from "next/link";
import { Card, Element, Text } from "fictoan-react";

import { HeaderStyled } from "./Header.styled";
import CSLogo from "../../public/images/cs-logo.svg";
import YCLogo from "../../public/images/yc-logo.svg";

const Header = () => {
    return (
        <HeaderStyled>
            <Card id="header-card" shape="rounded" verticallyCentreItems pushItemsToEnds>
                <Element as="div" verticallyCentreItems>
                    <Link href="/">
                        <Element as="div" className="cs-logo">
                            <CSLogo />
                        </Element>
                    </Link>

                    <Text size="small" marginLeft="nano" marginRight="nano">&mdash;</Text>

                    <Element as="div" className="yc-logo" verticallyCentreItems>
                        <Text size="small" marginRight="nano">A</Text>
                        <YCLogo />
                        <Text size="small" marginLeft="nano"> startup</Text>
                    </Element>
                </Element>

                <Element as="div" verticallyCentreItems>
                    <Link href="/blog">Blog</Link>
                    <Text marginLeft="nano" marginRight="nano">/</Text>
                    <Link href="/team">Team</Link>
                </Element>
            </Card>
        </HeaderStyled>
    );
}

export default Header;
