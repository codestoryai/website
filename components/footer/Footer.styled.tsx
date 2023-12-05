import styled from "styled-components";
import { lighten } from "polished";

import { CodeStoryColours } from "@/styles/theme";

export const FooterStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;

  #social-links,
  #nav-links {
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${lighten(0.64, CodeStoryColours.undergrowth)};
  }

  .cs-logo svg {
    width: 160px;
  }
  .yc-logo svg {
    width: 108px;
  }
`;
