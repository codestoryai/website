import styled from "styled-components";

import { CodeStoryColours, theme } from "../../styles/theme";
import { PostStyled } from "@/styles/Post.styled";

export const ChangelogStyled = styled(PostStyled)`
  ul {
    font-size: ${theme.font.size.sm};
    margin-top: 0px;
  }

  h4 {
    color: ${theme.primary};
  }

  h6 {
    margin: 20px 0 10px 0;
    display: inline-block;
    font-size: 1.1rem;
    padding: 4px 8px;
    background-color: ${theme.card};
    color: ${theme.fadeText};
  }

  img {
    margin: 1rem 0;
  }
`;
