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
        margin-top    : 32px;
        margin-bottom : 16px;
    }

    p, li {
        font-family   : "Weissenhof Grotesk", sans-serif;
        font-size     : 120%;
        color         : ${transparentize(0.4, defaultColours.white)};
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

    .hljs {
        background    : #063324;
        border-radius : 8px;
    }

    .hljs-addition,
    .hljs-keyword,
    .hljs-literal,
    .hljs-selector-tag {
        color : ${defaultColours.red90};
    }

    .hljs-built_in,
    .hljs-name,
    .hljs-section,
    .hljs-title {
        color : #38a3a5;
    }

    .hljs-attr { color : #77bfa3; }

    .hljs-params { color : #ffbe0b; }

    .hljs-function { color : #3a86ff; }

    .hljs.language-js { color : #9370ff; }
`;
