import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { CSLogoText } from "../logo/CSLogo";
import { YCLogo } from "../logo/YCLogo";

import styled from "styled-components";
import { CodeStoryColours } from "../../styles/CodeStory.colours";

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  color: ${CodeStoryColours.primary};
  background-color: ${CodeStoryColours.ash};
`;

const Header = () => {
  const node = useRef<HTMLDivElement>(null);
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const handleRedirect = () => {
    setShowMobileHeader(false);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (node.current && !node.current.contains(event.target as Node)) {
      setShowMobileHeader(false);
    }
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

  const menuItems = [
    { url: "https://docs.codestory.ai", title: "Docs", external: true },
    { url: "/blog", title: "Blog" },
    { url: "/changelog", title: "Changelog" },
    { url: "/about", title: "About" },
  ];

  return (
    <HeaderStyled ref={node}>
      <Link href="/">
        <CSLogoText />
      </Link>
      <div>
        backed by
        <YCLogo />
      </div>
      {menuItems.map((item) => (
        <h3 key={item.title} onClick={handleRedirect}>
          <Link href={item.url}>{item.title}</Link>
        </h3>
      ))}
      <div id="menu-toggle" onClick={() => setShowMobileHeader(!showMobileHeader)}>
        Menu
      </div>
    </HeaderStyled>
  );
};

export default Header;
