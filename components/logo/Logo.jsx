import React from "react";
import { Element } from "fictoan-react";

import { LogoStyled } from "./Logo.styled";

const SujanLogo = () => {
  return (
    <LogoStyled
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.24 }}
    >
      <Element as="div" id="logo-wrapper">
        <Element as="div" id="logo">
          {/* S ========================================================================================= */}
          <Element as="div" id="s" className="letter" />
          <Element as="div" id="h-one-one" className="line horizontal-line s-line-one" />
          <Element as="div" id="h-one-two" className="line horizontal-line s-line-one" />
          <Element as="div" id="h-two-one" className="line horizontal-line s-line-two" />
          <Element as="div" id="h-two-two" className="line horizontal-line s-line-two" />

          {/* DIVIDER ------------------------------------------- */}
          <Element as="div" id="h-three" className="line horizontal-line" />

          {/* U ========================================================================================= */}
          <Element as="div" id="u" className="letter" />
          <Element as="div" id="v-one-one" className="line vertical-line u-line-one" />
          <Element as="div" id="v-one-two" className="line vertical-line u-line-one" />

          {/* DIVIDER ------------------------------------------- */}
          <Element as="div" id="v-two" className="line vertical-line" />

          {/* J ========================================================================================= */}
          <Element as="div" id="j" className="letter" />
          <Element as="div" id="h-four-one" className="line horizontal-line j-line-one" />
          <Element as="div" id="h-four-two" className="line horizontal-line j-line-one" />

          {/* DIVIDER ------------------------------------------- */}
          <Element as="div" id="h-five" className="line horizontal-line" />

          {/* A ========================================================================================= */}
          <Element as="div" id="a" className="letter" />
          <Element as="div" id="v-three-one" className="line vertical-line a-line-one" />
          <Element as="div" id="v-three-two" className="line vertical-line a-line-one" />

          {/* N ========================================================================================= */}
          <Element as="div" id="n" className="letter" />
          <Element as="div" id="v-four-one" className="line vertical-line n-line-one" />
          <Element as="div" id="v-four-two" className="line vertical-line n-line-one" />
          <Element as="div" id="v-five-one" className="line vertical-line n-line-two" />
          <Element as="div" id="v-five-two" className="line vertical-line n-line-two" />
        </Element>
      </Element>
    </LogoStyled>
  );
};

export default SujanLogo;
