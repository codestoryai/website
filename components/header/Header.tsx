import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { AideLogoText } from "../logo/Aide";

import { links } from "content/base";
import { HeaderStyled } from "./Header.styled";


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

  return (
    <HeaderStyled ref={node}>
      <Link href="/">
        <a>
          <AideLogoText />
        </a>
      </Link>
      <nav>
        {links.map((item) => (
          <div key={item.label} onClick={handleRedirect}>
            <Link href={item.href}>{item.label}</Link>
          </div>
        ))}
      </nav>
      <div id="menu-toggle" onClick={() => setShowMobileHeader(!showMobileHeader)}>
        Menu
      </div>
    </HeaderStyled>
  );
};

export default Header;
