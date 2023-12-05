import styled from "styled-components";

import { CodeStoryColours, theme } from "../../styles/theme";

export const ChangelogStyled = styled.article`
  margin: 8rem auto 8rem;
  max-width: 60ch;
  padding: 1rem;

  p {
    font-size: 1.4rem;
  }

  ul {
    font-size: 1.2rem;
    margin-top: 0px;
  }

  h4 {
    padding-top: 40px;
    color: ${theme.primary};
  }

  h6 {
    margin: 20px 0 10px 0;
    display: inline-block;
    font-size: 1.1rem;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: ${theme.card};
    border: none;
    color: ${theme.text};
  }

  img {
    margin: 1rem 0;
  }
`;
