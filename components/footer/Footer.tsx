import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { FooterStyled } from "./Footer.styled";
import { links, socialLinks } from "../../content/base";

import { CSLogoText as CSLogo } from "../logo/CSLogo";
import { YCLogo } from "../logo/YCLogo";

const Backedby = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Footer = () => {
  const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  }
  return (
    <FooterStyled>
      <Link href="/">
        <a>
          Made with ♥︎ by <CSLogo />
        </a>
      </Link>

      <Backedby className="yc-logo">
        Backed by <YCLogo />
      </Backedby>

      <Row>
        {links.map((link, index) => (
          <Link key={index} href={link.href} passHref>
            <a {...(link.external ? externalLinkProps : {})}>
              {link.label}
            </a>
          </Link>
        ))}
      </Row>

      <Row>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </Row>
    </FooterStyled>
  );
};

export default Footer;
