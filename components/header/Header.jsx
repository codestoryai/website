import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button, Heading, Element, Portion, Row, Text, HRule } from "fictoan-react";

import { HeaderStyled } from "./Header.styled";
import CSLogo from "../../public/images/logo-cs.svg";
import CSLogoMark from "../../public/assets/logos/cs-logomark.svg";
import YCLogo from "../../public/images/logo-yc.svg";
import { useDownload } from "../../hooks/useDownload";

const Header = () => {
    const node = useRef();
    const [showMobileHeader, setShowMobileHeader] = useState(false);
    const release = useDownload();

    const handleRedirect = () => {
        setShowMobileHeader(false);
    }

    const handleClickOutside = (e) => {
        if (node.current.contains(e.target)) {
            return;
        }
        setShowMobileHeader(false);
    };

    useEffect(() => {
        if (showMobileHeader) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showMobileHeader]);

    return (
        <HeaderStyled ref={node}>
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

                        <Element as="nav" hideOnMobile hideOnTabletPortrait verticallyCentreItems>
                            <Link href="https://docs.codestory.ai" passHref>
                                <a target="_blank" rel="noopener noreferrer">
                                    DOCS
                                </a>
                            </Link>

                            <Link href="/blog">BLOG</Link>

                            <Element as="div">
                                <Link href="/changelog">CHANGELOG</Link>
                            </Element>

                            <Link href="/about">ABOUT</Link>
                        </Element>

                        <Element
                            as="div"
                            id="menu-toggle"
                            showOnlyOnMobile
                            showOnlyOnTabletPortrait
                            onClick={() => setShowMobileHeader(!showMobileHeader)}
                        >
                            <Heading as="h5" weight="600" align="right">
                                &mdash;
                            </Heading>

                            <Heading as="h5" weight="600" align="right">
                                &ndash;
                            </Heading>
                        </Element>
                    </Element>
                </Portion>
            </Row>

            <Element
                as="nav"
                className={`mobile-menu ${showMobileHeader ? "open" : "closed"}`}
            >
                <Row>
                    <Portion verticallyCenterItems pushItemsToEnds>
                        <Element as="div" className="cs-logomark">
                            <CSLogoMark />
                        </Element>
                        <Element as="div" className="menu-close" onClick={() => setShowMobileHeader(false)}>
                            &times;
                        </Element>
                    </Portion>
                </Row>

                <Row>
                    <Portion>
                        <Heading as="h3" onClick={handleRedirect}>
                            <Link href="https://docs.codestory.ai" passHref>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Element as="div">
                                        Docs
                                    </Element>
                                </a>
                            </Link>
                        </Heading>
                        <HRule />

                        <Heading as="h3" onClick={handleRedirect}>
                            <Link href="/blog">
                                <Element as="div">
                                    Blog
                                </Element>
                            </Link>
                        </Heading>
                        <HRule />

                        <Heading as="h3" onClick={handleRedirect}>
                            <Link href="/changelog">
                                <Element as="div">
                                    Changelog
                                </Element>
                            </Link>
                        </Heading>
                        <HRule />

                        <Heading as="h3" onClick={handleRedirect}>
                            <Link href="/about">
                                <Element as="div">
                                    About
                                </Element>
                            </Link>
                        </Heading>
                        <HRule />
                    </Portion>
                </Row>

                <Row>
                    <Portion>
                        <Link
                            href={release?.assets?.[0]?.browser_download_url ?? ""}
                            passHref
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button kind="primary" shadow="hard">
                                Download for MacOS (Apple Silicon)
                            </Button>
                        </Link>
                    </Portion>
                </Row>
            </Element>
        </HeaderStyled>
    );
};

export default Header;
