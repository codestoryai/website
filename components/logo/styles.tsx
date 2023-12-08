import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: ${theme.font.brand};
  svg {
    max-width: 1.25em;
    max-height: 1.25em;
  }
`;
