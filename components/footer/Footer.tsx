import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { links, socialLinks } from "../../content/base";

import { CSLogoText as CSLogo } from "../logo/CSLogo";
import { YCLogo } from "../logo/YCLogo";
import { theme } from "@/styles/theme";
import { AideLogoText } from "../logo/Aide";
import { Icon } from "@iconify/react";

const Backedby = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FooterStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  padding: calc(2 * ${theme.font.size.base});
  background-color: ${theme.background};
  border: 1px solid ${theme.borderTight};
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    color: ${theme.text};
    border-top: 2px solid ${theme.borderTight};
    text-decoration: none;
    background-color: ${theme.card};
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    border-top: 2px solid ${theme.primary};
  }

  a.socialLink {
    padding: 0.25rem;
    border: none;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    font-size: ${theme.font.size.sm};
  }
  a.socialLink svg {
    font-size: ${theme.font.size.base};
  }
  a.socialLink:hover {
    border: none;
    color: ${theme.primary};
    background-color: ${theme.card};
  }

  a.main-logo {
    font-size: ${theme.font.size.lg};
  }

  .yc-logo svg {
    height: 1.5rem;
  }
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
  height: inherit;
  width: max-content;
  &:first-child {
    flex: 1;
    max-width: max-content;
  }
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
          <a className="main-logo">
            <AideLogoText />
          </a>
        </Link>

        <Link href="/about">
          <a>
            Made with ♥︎ by <CSLogo />
          </a>
        </Link>
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
            <a key={index} href={link.href} className="socialLink" target="_blank" rel="noopener noreferrer">
              {link.icon && <Icon icon={link.icon} />}
              {link.label}
            </a>
          ))}
        </Row>
        <Backedby className="yc-logo">
          Backed by <YCLogo />
        </Backedby>
      </Col>
    </FooterStyled>
  );
};

export default Footer;
