import styled from "styled-components";

export const FeaturesGridStyled = styled.section`
    // PRIMARY CARD GRID ==============================================================================================
    #features-grid {
        display               : grid;
        margin                : 0 auto;
        gap                   : 16px;
        grid-template-columns : repeat(4, 1fr);
        grid-template-rows    : auto 640px 520px 720px auto;
        grid-template-areas   : 
                "aide             aide             aide             aide"
                "prompt-examples  prompt-examples  ide-replacement  ide-replacement"
                "code-explanation code-explanation code-explanation commit-messages"
                "nlp-search       nlp-search       git-diff         git-diff"
                "language-support more-features    more-features    more-features";
        // max-width             : 1440px;

        @media screen and (max-width : 1200px) {
            display        : flex;
            flex-direction : column;
        }
    }

    // COMMON CLASS FOR ALL PRODUCT EXPLANATION CARDS
    .content-card {
        display         : flex;
        flex-direction  : column;
        justify-content : center;
        box-shadow      : inset 0 1px 1px rgba(255, 255, 255, .24);
        overflow        : hidden;
        backdrop-filter : blur(6px);
        background      : radial-gradient(circle at top center,
        rgba(60, 186, 146, 0.4) 0%, rgba(42, 136, 107, 0.4) 70%);
    }

    // AIDE INTRO CARD
    #aide {
        grid-area  : aide;
        background : radial-gradient(circle at top center, rgba(163, 249, 35, 0.4) 0%, rgba(60, 186, 146, 0.4) 100%);
    }

    // PARENT CARD TO HOLD THE COLOURED BORDER
    #image-wrapper {
        position      : relative;
        padding       : 8px;
        border-radius : 16px;
        overflow      : hidden;

        img, video {
            z-index       : 500;
            border-radius : 12px;
            margin-bottom : -3px;
        }
    }

    // CHILD WITH THE ACTUAL ROTATING COLOUR BOX
    #gradient-wrapper {
        position        : absolute;
        z-index         : -1;
        width           : 200%;
        height          : 200%;
        top             : -50%;
        left            : -50%;
        background      : linear-gradient(0deg, #63caff, #f96c6c, #fdce3b, #b97dff);
        background-size : 100% 100%;
        animation       : loading 3s linear 0s infinite;
    }

    // ANIMATION FOR THE ABOVE
    @keyframes loading {
        0% { transform : rotate(0deg); }
        100% { transform : rotate(360deg); }
    }

    // FOUR EXAMPLE PROMPTS ===================================================
    #prompt-examples {
        grid-area : prompt-examples;
    }

    .prompt-examples {
        padding       : 4px;
        border-radius : 16px;
        background    : linear-gradient(0.2turn, #bffa4a, #66bd43);
        border        : none;
    }

    .prompt-wrapper {
        background : linear-gradient(0.2turn, #82de5d, #bffa4a);
        border     : none;
    }

    // CODE EXPLANATIONS ======================================================
    #code-explanation {
        grid-area : code-explanation;

        img {
            margin-bottom : -20%;
        }
    }

    // DROP-IN REPLACEMENT ====================================================
    #ide-replacement {
        grid-area : ide-replacement;

        img {
            margin : 0 -64px -64px -64px;
            width  : calc(100% + 128px);
        }
    }

    // NLP SEARCH =============================================================
    #nlp-search {
        grid-area : nlp-search;

        img {
            height        : 600px;
            margin-bottom : -80px;
            border-radius : 12px;
            width         : max-content;
            max-width     : 500px;
            margin-left   : auto;
            margin-right  : auto;
        }
    }

    // GROUP GIT DIFF =========================================================
    #git-diff {
        grid-area : git-diff;

        img {
            height        : 600px;
            margin-bottom : -80px;
            border-radius : 12px;
            width         : max-content;
            max-width     : 500px;
            margin-left   : auto;
            margin-right  : auto;
        }
    }

    // AUTOGEN COMMIT MSGS ====================================================
    #commit-messages {
        grid-area : commit-messages;
    }

    // LANGUAGE SUPPORT =======================================================
    #language-support {
        grid-area : language-support;
    }

    // AUTOGEN COMMIT MSGS ====================================================
    #more-features {
        grid-area : more-features;
    }

    // AUTOGEN COMMIT MSGS ====================================================
    #language-grid {
        display   : flex;
        gap       : 8px;
        flex-wrap : wrap;
    }

    .language-logo {
        svg {
            width  : 48px;
            height : 48px;
        }
    }

    // THAT SUBTLE GLOW UNDER THE CURSOR
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

    #other-features { margin-top : 16px; }

    .array-card {

    }
`;
