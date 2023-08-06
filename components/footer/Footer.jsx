import Image from "next/image";

import { FooterStyled } from "./Footer.styled";
import { Card, Element } from "fictoan-react";

import { AiFillSlackCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import CSLogo from "../../public/images/cs-logo.svg";
import Link from "next/link";
import React from "react";


const Footer = () => {
    return (
        <FooterStyled>
            <Card id="footer-card" shape="rounded" padding="micro" verticallyCentreItems pushItemsToEnds>
                <Link href="/">
                    <Element as="div" className="cs-logo">
                        <CSLogo />
                    </Element>
                </Link>

                <div className="grow">
                    <div className="flex gap-4 float-right align-middle">
                        <p className="text-lg">Follow us on</p>

                        <a
                            href="https://twitter.com/codestoryai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={32} color="#26a7de" />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/codestory-ai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillLinkedin size={32} color="#2d64bc" />
                        </a>

                        <a
                            href="https://join.slack.com/t/codestoryai/shared_invite/zt-1x4zy3mk1-9fL5k~7XGSNNku7~iYr51w"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillSlackCircle size={32} color="#2d64bc" />
                        </a>
                    </div>
                </div>
            </Card>
        </FooterStyled>
    );
};

export default Footer;
