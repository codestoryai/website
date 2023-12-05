import styled from "styled-components";
import { transparentize } from "polished";
import { theme } from "../../styles/theme"

export const BlogStyled = styled.article`
  .blog-content h1,
  .blog-content h2,
  .blog-content h3,
  .blog-content h4,
  .blog-content h5,
  .blog-content h6 {
    color: ${theme.heading};
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .blog-content p,
  .blog-content li {
    font-family: ${theme.font.heading};
    font-size: 140%;
    color: ${transparentize(0.2, 'white')};
    margin-bottom: 24px;
  }

  pre {
    margin-bottom: 24px;
  }

  hr {
    background-color: #2a886b;
    outline: none;
    border: none;
    height: 1px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
