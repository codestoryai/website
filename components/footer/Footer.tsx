import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { FooterStyled } from "./Footer.styled";

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
  const links = [
    { href: "https://docs.codestory.ai", label: "Docs", external: true },
    { href: "/blog", label: "Blog" },
    { href: "/changelog", label: "Changelog" },
    { href: "/about", label: "About" },
  ];

  const socialLinks = [
    {
      href: "https://www.ycombinator.com/launches/JCn-codestory-an-ai-first-ide-re-imagined-for-the-future",
      label: "YC",
      external: true,
    },
    { href: "https://discord.gg/DNnh6tC9VA", label: "Discord", external: true },
    { href: "https://twitter.com/codestoryai", label: "Twitter", external: true },
    { href: "https://www.linkedin.com/company/codestory-ai", label: "LinkedIn", external: true },
  ];

  return (
    <FooterStyled>
      <Link href="/">
        <CSLogo />
      </Link>

      <Backedby className="yc-logo">
        Backed by
        <YCLogo />
      </Backedby>

      <Row>
        {links.map((link, index) => (
          <Link key={index} href={link.href} passHref>
            {link.external ? (
              <a target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <a>{link.label}</a>
            )}
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
