import React from "react";
import { Wrapper } from "./styles";

const AideLogo = () => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3112 51.4172L8.55145 62L47.7801 53.9541L51.1624 46.3074L11.3096 22.2076L8 29.8983L36.3581 47.047L13.3112 51.4172Z"
        fill="currentColor"
      />
      <path
        d="M51.4889 12.5828L56.2486 2L17.02 10.0459L13.6377 17.6926L53.4905 41.7924L56.8001 34.1017L28.442 16.953L51.4889 12.5828Z"
        fill="currentColor"
      />
    </svg>
  );
};

const AideLogoText = () => (
  <Wrapper>
    <AideLogo />
    <span>Aide</span>
  </Wrapper>
);

export { AideLogo, AideLogoText };
