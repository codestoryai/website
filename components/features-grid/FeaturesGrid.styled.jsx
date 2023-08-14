import styled from "styled-components";

export const FeaturesGridStyled = styled.section`
    .feature {
        --x-px   : calc(var(--x) * 1px);
        --y-px   : calc(var(--y) * 1px);
        overflow : hidden;
    }

    .feature:before,
    .feature:after {
        content       : "";
        display       : block;
        position      : absolute;
        top           : 0;
        left          : 0;
        height        : 100%;
        width         : 100%;
        inset         : 0px;
        border-radius : inherit;
        background    : radial-gradient(800px circle at var(--x-px) var(--y-px),
        rgba(60, 186, 146, 0.4),
        transparent 40%);
    }

    .feature:before { z-index : -1; }

    .feature:after {
        opacity    : 0;
        z-index    : -1;
        transition : opacity 0.4s ease;
    }

    .feature:hover:after { opacity : 0.24; }
`;
