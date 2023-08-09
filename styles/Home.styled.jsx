import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeStyled = styled(motion.article)`
    #opener-headline {
        background-image        : radial-gradient(circle at center left, rgba(255, 255, 255, 0.88) 0%, rgba(60, 186, 146, 0.96) 100%);
        background-clip         : text;
        -webkit-background-clip : text;
        -webkit-text-fill-color : transparent;
        line-height             : 1.1;
    }

    #product-grid {
        display               : grid;
        margin                : 0 auto;
        gap                   : 16px;
        grid-template-columns : repeat(4, 1fr);
        grid-template-rows    : auto 64vh 40vh 720px;
        grid-template-areas   : 
                "aide             aide             aide             aide"
                "prompt-examples  prompt-examples  ide-replacement  ide-replacement"
                "code-explanation code-explanation code-explanation commit-messages"
                "nlp-search       nlp-search       git-diff         git-diff ";

        @media screen and (max-width : 1200px) {
            display        : flex;
            flex-direction : column;
        }
    }

    .content-card {
        display         : flex;
        flex-direction  : column;
        justify-content : center;
        box-shadow      : inset 0 1px 1px rgba(255, 255, 255, .24);
        overflow        : hidden;
        backdrop-filter : blur(6px);
    }

    // AIDE INTRO CARD
    #aide {
        grid-area  : aide;
        background : radial-gradient(circle at top center, rgba(163, 249, 35, 0.6) 0%, rgba(60, 186, 146, 0.6) 100%);
    }

    #image-wrapper {
        border-radius : 16px;
        background    : linear-gradient(217deg, rgb(238, 84, 28), rgba(255, 0, 0, 0) 70.71%),
        linear-gradient(127deg, rgba(167, 232, 95, 0.8), rgba(0, 255, 0, 0) 70.71%),
        linear-gradient(336deg, rgba(46, 161, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
        border        : 8px solid;
        border-image  : conic-gradient(from var(--angle), #ee4545, #ffce51, #4a92ff, #e9a8ff, red) 1;
        animation     : 10s rotate linear infinite;
        padding       : 0;
    }

    @keyframes rotate {
        to {
            --angle : 360deg;
        }
    }

    #prompt-examples {
        grid-area  : prompt-examples;
        background : radial-gradient(circle at top center, #3cba92 0%, #2a886b 70%);
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

    #code-explanation {
        grid-area  : code-explanation;
        background : linear-gradient(0.33turn, #0ba360, #3cba92);

        img {
            margin-bottom : -20%;
        }
    }

    #nlp-search {
        grid-area  : nlp-search;
        background : linear-gradient(0.73turn, #0ba360, #3cba92);

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

    #git-diff {
        grid-area  : git-diff;
        background : linear-gradient(0.73turn, #0ba360, #3cba92);

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

    #commit-messages {
        grid-area  : commit-messages;
        background : linear-gradient(0.73turn, #0ba360, #3cba92);
    }

    #ide-replacement {
        grid-area  : ide-replacement;
        background : linear-gradient(0.82turn, #0ba360, #3cba92);

        img {
            margin : 0 -24% -24% -24%;
            width  : 148%;
        }
    }

`;
