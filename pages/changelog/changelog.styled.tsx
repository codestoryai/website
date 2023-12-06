import styled from "styled-components";

import { CodeStoryColours, theme } from "../../styles/theme";
import { PostStyled } from "@/styles/Post.styled";

export const ChangelogStyled = styled(PostStyled)`
  .markdownContent h4 {
    font-size: ${theme.font.size.md};
    color: ${theme.headingColored};
  }
  .markdownContent p {
    margin: 1rem 0;
  }

  h6 .headingLink {
    display: none;
  }

  .markdownContent h6 {
    margin: 0;
    display: inline-flex;
    font-size: 1.1rem;
    padding: 4px 8px;
    background-color: rgba(${theme.fadeTextRgb}, 0.1);
    color: ${theme.fadeText};
  }

  img {
    margin: 1rem 0;
  }
`;
