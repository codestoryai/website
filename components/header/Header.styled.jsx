import styled from "styled-components";
import { motion } from "framer-motion";
import { darken, lighten, transparentize } from "polished";

import { CodeStoryColours } from "@/styles/CodeStory.colours";

export const HeaderStyled = styled(motion.header)`
  position: sticky;
  top: 0;
  width: 100%;
  height: 56px;
  z-index: 5000;
  padding: 12px 0;
  background: ${transparentize(0.2, CodeStoryColours.shrub)};
  backdrop-filter: blur(6px);
  border-bottom: 1px solid ${transparentize(0.44, CodeStoryColours.canopy)};

  .cs-logo svg {
    width: 160px;
  }
  .yc-logo svg {
    width: 108px;
  }

  nav {
    display: flex;
    gap: 16px;
  }

  a {
    color: ${lighten(0.64, CodeStoryColours.undergrowth)};
  }

  #menu-toggle {
    margin-top: -5px;
  }

  #menu-toggle h5 {
    line-height: 6px;
    user-select: none;
  }

  .mobile-menu {
    position: fixed;
    z-index: 100;
    display: flex;
    flex-direction: column;
    width: 84vw;
    height: 105vh;
    top: 0;
    right: 0;
    transition: all 0.2s;
    transform: translateX(100vw);
    background-color: ${CodeStoryColours.undergrowth};
    padding: 12px;
    border-left: 1px solid ${darken(0.08, CodeStoryColours.shrub)};
    box-shadow: -4px 0 12px -2px hsla(0, 0%, 0%, 0.16);

    &.closed {
      display: none;
    }
    &.open {
      transform: translateX(0);
    }

    .cs-logomark svg {
      width: 36px;
    }

    .menu-close {
      margin-top: -6px;
      font-size: 32px;
      cursor: pointer;
      color: ${CodeStoryColours.canopy};
    }

    .menu-items {
      position: absolute;
      top: 10px;
    }

    h3,
    a {
      color: ${lighten(0.7, CodeStoryColours.undergrowth)};
    }

    hr {
      background-color: ${lighten(0.2, CodeStoryColours.undergrowth)};
      outline: none;
      border: none;
      height: 1px;
      margin-top: 8px;
      margin-bottom: 12px;
    }
  }
`;
