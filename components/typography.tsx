import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Title = styled.h1`
  &.post-title,
  & {
    font-size: ${theme.font.size.xl};
    font-weight: normal;
    color: ${theme.primary};
  }
`;
