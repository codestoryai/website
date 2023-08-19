import styled from "styled-components";
import { defaultColours } from "fictoan-react";
import { transparentize } from "polished";

import { CodeStoryColours } from "../../styles/CodeStory.colours"

export const ChangelogStyled = styled.article`
    .post-body p {
        font-size: 1.4rem;
        color: black;
    }

    .post-body ul {
        font-size: 1.2rem;
        margin-top: 0px;
    }

    .post-body h4 {
        padding-top: 40px;
        color: ${transparentize(0.4, defaultColours.white)};
    }

    .post-body h6 {
        margin: 20px 0 10px 0;
        display: inline-block;
        font-size: 1rem;
        padding: 4px 8px;
        border-radius: 4px;
        background-color: ${CodeStoryColours.shrub};
        border: none;
        color: white;
    }

    .post-body img {
        padding: 10px 0;
    }
`;
