import styled from "styled-components";
import { defaultColours } from "fictoan-react";

import { CodeStoryColours } from "../../styles/CodeStory.colours";

export const ChangelogStyled = styled.article`
  .post-body p {
    font-size: 1.4rem;
    color: ${defaultColours.white};
  }

  .post-body ul {
    font-size: 1.2rem;
    margin-top: 0px;
    color: ${defaultColours.white};
  }

  .post-body h4 {
    padding-top: 40px;
    color: #15c28c;
  }

  .post-body h6 {
    margin: 20px 0 10px 0;
    display: inline-block;
    font-size: 1.1rem;
    padding: 4px 8px;
    border-radius: 4px;
    background-color: ${CodeStoryColours.shrub};
    border: none;
    color: black;
  }

  .post-body img {
    padding: 10px 0;
  }
`;
