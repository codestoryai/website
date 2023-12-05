import styled from "styled-components";
import { motion } from "framer-motion";

import { theme } from "./theme";

export const PostStyled = styled(motion.article)`
  margin: 8rem auto 8rem;
  max-width: 70ch;
  padding: 2rem;
  border: 1px solid ${theme.borderTight};
  background: ${theme.background};

  h1.title {
    color: ${theme.primary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p,
  li {
    font-family: ${theme.font.family};
    margin-bottom: 24px;
  }

  .postImgWrapper {
    margin: 2rem 0;
  }

  hr {
    margin: 2rem 0;
    border: 0px;
    height: 1px;
    opacity: 0.2;
    background: ${theme.fadeText};
  }

  pre {
    margin-bottom: 24px;
  }

  li {
    margin-bottom: 8px !important;
  }

  blockquote {
    border-left: 4px solid ${theme.primary};
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    font-style: italic;
  }

  blockquote p {
    margin: 0;
  }

  h1.post-title {
    font-size: ${theme.font.size.xl};
    margin: 2rem 0;
  }

  em,
  strong {
    color: ${theme.heading};
  }

  .author-intro {
    display: flex;
    align-items: center;
    gap: 1rem;

    h6,
    p,
    svg {
      color: ${theme.text};
      margin: 0;
    }
  }

  pre {
    font-size: 0.9rem;
  }

  figure.image {
    margin: 2rem 0;
  }
`;
