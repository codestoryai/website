import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Title = styled.h1`
  margin: 4rem 0 2rem;
  font-size: ${theme.font.size.xl};
  font-weight: normal;
  color: ${theme.primary};

  &.post-title,
  &.title,
  & {
    font-size: ${theme.font.size.xl};
    font-weight: normal;
    color: ${theme.primary};
  }
`;
