import styled from "styled-components";
import { defaultColours } from "fictoan-react";
import { transparentize } from "polished";

export const BlogStyled = styled.article`
    .blog-content h1,
    .blog-content h2,
    .blog-content h3,
    .blog-content h4,
    .blog-content h5,
    .blog-content h6 {
        color: ${defaultColours.white};
        margin-top    : 32px;
        margin-bottom : 16px;
    }

    .blog-content p,
    .blog-content li {
        font-family   : "Weissenhof Grotesk", sans-serif;
        font-size     : 140%;
        color         : ${transparentize(0.2, defaultColours.white)};
        margin-bottom : 24px;
    }

    pre { margin-bottom : 24px; }

    hr {
        background-color : #2a886b;
        outline          : none;
        border           : none;
        height           : 1px;
        margin-top       : 24px;
        margin-bottom    : 24px;
    }
`;
