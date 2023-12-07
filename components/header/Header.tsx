import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { AideLogoText } from "../logo/Aide";

import { links } from "content/base";
import { HeaderStyled, HeaderTab } from "./Header.styled";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { icons } from "content/icons";

const Header = () => {
  const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  const node = useRef<HTMLDivElement>(null);
  const [showMobileHeader, setShowMobileHeader] = useState(false);

  const router = useRouter();

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
      <nav>
        <Link href="/">
          <HeaderTab className={router.pathname === "/" ? "active" : ""}>
            <AideLogoText />
          </HeaderTab>
        </Link>
        {links.map((item) => (
          <Link key={item.label} href={item.href} passHref>
            <HeaderTab
              {...(item.external ? externalLinkProps : {})}
              className={router.pathname.startsWith(item.href) ? "active" : ""}
              onClick={handleRedirect}
            >
              {item.icon && <Icon icon={item.icon} />}
              {item.label}
              {item.external && <Icon icon={icons.external} />}
            </HeaderTab>
          </Link>
        ))}
      </nav>
      {/* <div id="menu-toggle" onClick={() => setShowMobileHeader(!showMobileHeader)}>
        Menu
      </div> */}
    </HeaderStyled>
  );
};

export default Header;
