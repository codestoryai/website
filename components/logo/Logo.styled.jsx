import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultColours } from "fictoan-react";

export const LogoStyled = styled(motion.div)`
    #logo-wrapper {
        z-index    : -1;
        position   : absolute;
        top        : 0;
        left       : 0;
        width      : 100vw;
        height     : 100vh;
        padding    : 24px;
        transition : all 0.6s ease-in-out;
    }

    #logo {
        display               : grid;
        width                 : 100%;
        height                : 100%;
        grid-template-columns : repeat(5, 1fr);
        grid-template-rows    : repeat(7, 1fr);
        grid-gap              : 12px;
    }

    .letter {
        background-color          : ${defaultColours.black};
        opacity                   : 0.04;
        border-radius             : 12px;
        overflow                  : hidden;
        transition                : all 1s cubic-bezier(1, 0, 0, 1);
        //animation-name            : background-colour;
        animation-duration        : 60s;
        animation-iteration-count : infinite;
        animation-direction       : alternate;
        animation-timing-function : linear;
    }

    .line {
        background : ${defaultColours.amber};
        position   : relative;
    }

    .horizontal-line {
        margin-top : -12px;
        height     : 12px;
    }

    .vertical-line {
        margin-left : -12px;
        width       : 12px;
    }

    .line::before,
    .line::after {
        content  : "";
        position : absolute;
    }

    .line::before { background-color : ${defaultColours.amber}; }

    .line::after {
        background-color          : ${defaultColours.black};
        //animation-name            : background-colour;
        animation-duration        : 60s;
        animation-iteration-count : infinite;
        animation-direction       : alternate;
        animation-timing-function : linear;
        opacity                   : 0.04;
    }

    @keyframes background-colour {
        0% { background : ${defaultColours.grey60}; }
        16% { background : ${defaultColours.grey60}; }
        32% { background : ${defaultColours.grey60}; }
        48% { background : ${defaultColours.grey60}; }
        64% { background : ${defaultColours.grey60}; }
        72% { background : ${defaultColours.grey60}; }
        100% { background : ${defaultColours.grey60}; }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // S
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    #s {
        grid-column-start : 1;
        grid-row-start    : 1;
        grid-column-end   : 6;
        grid-row-end      : 4;
    }

    .s-line-one {
        grid-column-start : 2;
        grid-column-end   : 6;
        grid-row-start    : 2;
        border-radius     : 6px 0 0 6px;
    }

    // Line 1 — Instance 1 ============================================================================================
    #h-one-one {
        &::before {
            top    : -24px;
            right  : 0;
            height : 24px;
            width  : 24px;
        }

        &::after {
            top                        : -24px;
            right                      : 0;
            height                     : 24px;
            width                      : 24px;
            border-bottom-right-radius : 12px;
        }
    }

    // Line 1 — Instance 2 ============================================================================================
    #h-one-two {
        &::before {
            top    : 12px;
            right  : 0;
            height : 24px;
            width  : 24px;
        }

        &::after {
            top                     : 12px;
            right                   : 0;
            height                  : 24px;
            width                   : 24px;
            border-top-right-radius : 12px;
        }
    }

    // Line 2 — Instance 1 ============================================================================================
    .s-line-two {
        grid-column-start : 1;
        grid-column-end   : 5;
        grid-row-start    : 3;
        border-radius     : 0 6px 6px 0;
    }

    #h-two-one {
        &::before {
            top    : -24px;
            left   : 0;
            height : 24px;
            width  : 24px;
        }

        &::after {
            top                       : -24px;
            left                      : 0;
            height                    : 24px;
            width                     : 24px;
            border-bottom-left-radius : 12px;
        }
    }

    // Line 2 — Instance 2 ============================================================================================
    #h-two-two {
        &::before {
            top    : 12px;
            left   : 0;
            height : 24px;
            width  : 24px;
        }

        &::after {
            top                    : 12px;
            left                   : 0;
            height                 : 24px;
            width                  : 24px;
            border-top-left-radius : 12px;
        }
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // U
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    #u {
        grid-column-start : 1;
        grid-row-start    : 4;
        grid-column-end   : 3;
        grid-row-end      : 6;
    }

    .u-line-one {
        grid-row-start    : 4;
        grid-column-start : 2;
        border-radius     : 0 0 6px 6px;
    }

    #v-one-one {
        &::before {
            top    : 0;
            left   : 12px;
            height : 24px;
            width  : 24px;
        }

        &::after {
            top                    : 0;
            left                   : 12px;
            height                 : 24px;
            width                  : 24px;
            border-top-left-radius : 12px;
        }
    }

    #v-one-two {
        &::before {
            top    : 0;
            right  : 12px;
            height : 24px;
            width  : 24px;
        }

        &::after {
            top                     : 0;
            right                   : 12px;
            height                  : 24px;
            width                   : 24px;
            border-top-right-radius : 12px;
        }
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // J
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    #j {
        grid-column-start : 3;
        grid-row-start    : 4;
        grid-column-end   : 6;
        grid-row-end      : 6;
    }

    .j-line-one {
        grid-column-start : 3;
        grid-column-end   : 5;
        grid-row-start    : 5;
        border-radius     : 0 6px 6px 0;
    }

    #h-four-one {
        &::before {
            top    : -24px;
            left   : 0;
            height : 24px;
            width  : 24px;
        }

        &::after {
            top                       : -24px;
            left                      : 0;
            height                    : 24px;
            width                     : 24px;
            border-bottom-left-radius : 12px;
        }
    }

    #h-four-two {
        &::before {
            top    : 12px;
            left   : 0;
            height : 24px;
            width  : 24px;
        }

        &::after {
            top                    : 12px;
            left                   : 0;
            height                 : 24px;
            width                  : 24px;
            border-top-left-radius : 12px;
        }
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // A
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    #a {
        grid-column-start : 1;
        grid-row-start    : 6;
        grid-column-end   : 3;
        grid-row-end      : 8;
    }

    .a-line-one {
        grid-row-start    : 7;
        grid-row-end      : 8;
        grid-column-start : 2;
        border-radius     : 6px 6px 0 0;
    }

    #v-three-one {
        &::before {
            bottom : 0;
            right  : 12px;
            height : 24px;
            width  : 24px;
        }

        &::after {
            bottom                     : 0;
            right                      : 12px;
            height                     : 24px;
            width                      : 24px;
            border-bottom-right-radius : 12px;
        }
    }

    #v-three-two {
        &::before {
            bottom : 0;
            left   : 12px;
            height : 24px;
            width  : 24px;
        }

        &::after {
            bottom                    : 0;
            left                      : 12px;
            height                    : 24px;
            width                     : 24px;
            border-bottom-left-radius : 12px;
        }
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // N
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    #n {
        grid-column-start : 3;
        grid-row-start    : 6;
        grid-column-end   : 6;
        grid-row-end      : 8;
    }

    .n-line-one {
        grid-row-start    : 7;
        grid-row-end      : 8;
        grid-column-start : 4;
        border-radius     : 6px 6px 0 0;
    }

    #v-four-one {
        &::before {
            bottom : 0;
            right  : 12px;
            height : 24px;
            width  : 24px;
        }

        &::after {
            bottom                     : 0;
            right                      : 12px;
            height                     : 24px;
            width                      : 24px;
            border-bottom-right-radius : 12px;
        }
    }

    #v-four-two {
        &::before {
            bottom : 0;
            left   : 12px;
            height : 24px;
            width  : 24px;
        }

        &::after {
            bottom                    : 0;
            left                      : 12px;
            height                    : 24px;
            width                     : 24px;
            border-bottom-left-radius : 12px;
        }
    }

    .n-line-two {
        grid-row-start    : 6;
        grid-row-end      : 7;
        grid-column-start : 5;
        border-radius     : 0 0 6px 6px;
    }

    #v-five-one {
        &::before {
            top    : 0;
            left   : 12px;
            height : 24px;
            width  : 24px;
        }

        &::after {
            top                    : 0;
            left                   : 12px;
            height                 : 24px;
            width                  : 24px;
            border-top-left-radius : 12px;
        }
    }

    #v-five-two {
        &::before {
            top    : 0;
            right  : 12px;
            height : 24px;
            width  : 24px;
        }

        &::after {
            top                     : 0;
            right                   : 12px;
            height                  : 24px;
            width                   : 24px;
            border-top-right-radius : 12px;
        }
    }


    // DIVIDERS
    #h-three {
        grid-column-start : 1;
        grid-column-end   : 6;
        grid-row-start    : 4;
    }


    #v-two {
        grid-row-start    : 4;
        grid-row-end      : 8;
        grid-column-start : 3;
    }

    #h-five {
        grid-column-start : 1;
        grid-column-end   : 6;
        grid-row-start    : 6;
    }
`;
