import styled from "styled-components";
import { defaultColours } from "fictoan-react";
import { transparentize } from "polished";

export const ChangelogStyled = styled.article`
    .post-body h4,
    .post-body h6 {
        color: ${transparentize(0.4, defaultColours.white)};
    }
`;
