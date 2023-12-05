import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { FooterStyled } from "./Footer.styled";
import { links, socialLinks } from "../../content/base";

import { CSLogoText as CSLogo } from "../logo/CSLogo";
import { YCLogo } from "../logo/YCLogo";
import { theme } from "@/styles/theme";

const Backedby = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 100%;
  flex-wrap: wrap;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${theme.borderTight};
  height: inherit;
  max-width: 100%;
`;

const Footer = () => {
  const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  return (
    <FooterStyled>
      <Col>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            Made with ♥︎ by <CSLogo />
          </a>
        </Link>

        <Backedby className="yc-logo">
          Backed by <YCLogo />
        </Backedby>
      </Col>
      <Col>
        <Row>
          {links.map((link, index) => (
            <Link key={index} href={link.href} passHref>
              <a {...(link.external ? externalLinkProps : {})}>{link.label}</a>
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
      </Col>
    </FooterStyled>
  );
};

export default Footer;
