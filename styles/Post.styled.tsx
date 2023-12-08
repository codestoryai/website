import styled from "styled-components";
import { motion } from "framer-motion";

import { theme } from "./theme";
import { Title } from "@/components/typography";

export const PostStyled = styled(motion.article)`
  margin: 0rem auto 8rem;
  max-width: ${theme.layout.maxWidth};
  padding: 2rem;
  border: 1px solid ${theme.borderTight};
  background: ${theme.card};

  .postDate {
    margin: 1rem 0;
    font-style: italic;
    font-family: ${theme.font.brand};
    color: ${theme.fadeText};
  }

  .markdownContent h1,
  .markdownContent h2,
  .markdownContent h3,
  .markdownContent h4,
  .markdownContent h5,
  .markdownContent h6 {
    color: ${theme.heading};
    margin-top: 4rem;
    margin-bottom: 1rem;
  }

  h1.title,
  ${Title} {
    color: ${theme.primary};
  }

  .markdownContent ul,
  .markdownContent ol {
    margin: 1rem 0;
  }
  .markdownContent .heading .headingLink {
    color: ${theme.fadeText};
    margin-left: 0.5rem;
    text-decoration: none;
    height: 100%;
    opacity: 0.2;
  }
  .markdownContent .heading .headingLink svg {
    padding-top: 0.25rem;
  }
  .markdownContent .heading:hover .headingLink {
    opacity: 1;
  }

  .markdownContent p,
  .markdownContent li {
    font-family: ${theme.font.family};
  }
  .markdownContent p {
    margin: 2rem 0;
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

  .markdownContent blockquote p {
    margin: 0;
  }

  h1.post-title {
    font-size: ${theme.font.size.xl};
    margin: 2rem 0;
  }

  .markdownContent em,
  .markdownContent strong {
    font-family: ${theme.font.brand};
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
