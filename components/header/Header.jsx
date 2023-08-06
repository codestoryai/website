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
                <Link href="/">
                    <Element as="div" className="cs-logo">
                        <CSLogo />
                    </Element>
                </Link>

                <Element as="div" className="yc-logo" verticallyCentreItems>
                    <Text size="small" marginRight="nano">Backed by</Text>
                    <YCLogo />
                </Element>
            </Card>
        </HeaderStyled>
    );
}

export default Header;
