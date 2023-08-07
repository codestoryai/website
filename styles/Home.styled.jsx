import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeStyled = styled(motion.article)`
    #opener-headline {
        //background-image        : linear-gradient(146deg, #51af1f, #289b17);
        //background-clip         : text;
        //-webkit-background-clip : text;
        //-webkit-text-fill-color : transparent;
    }

    #product-grid {
        display               : grid;
        margin                : 0 auto;
        gap                   : 16px;
        grid-template-columns : repeat(4, 1fr);
        grid-template-rows    : auto 64vh 40vh auto;
        grid-template-areas   : 
                "aide            aide            aide   aide"
                "prompt-examples prompt-examples usp-2  usp-2"
                "code-explanation           code-explanation           code-explanation  description"
                "nlp-search           git-diff           git-diff  commit-messages";

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
    }

    #aide {
        grid-area  : aide;
        background : radial-gradient(circle at top center, #a3f923 0%, #3cba92 100%);
    }

    #code-explanation {
        grid-area  : code-explanation;
        background : linear-gradient(0.33turn, #0ba360, #3cba92);
        
        img {
            margin-bottom: -20%;
        }
    }

    #nlp-search {
        grid-area  : nlp-search;
        background : linear-gradient(0.73turn, #0ba360, #3cba92);
    }

    #git-diff {
        grid-area  : git-diff;
        background : linear-gradient(0.73turn, #0ba360, #3cba92);
    }

    #commit-messages {
        grid-area  : commit-messages;
        background : linear-gradient(0.73turn, #0ba360, #3cba92);
    }

    #prompt-examples {
        grid-area  : prompt-examples;
        background : radial-gradient(circle at top center, #3cba92 0%, #2a886b 70%);
    }

    #usp-2 {
        grid-area  : usp-2;
        background : linear-gradient(0.82turn, #0ba360, #3cba92);
    }

    .prompt-examples {
        padding       : 4px;
        border-radius : 8px;
        background    : linear-gradient(0.2turn, #bffa4a, #66bd43);
        border        : none;
    }

    .prompt-wrapper {
        background : linear-gradient(0.2turn, #82de5d, #bffa4a);
        border     : none;
    }
`;
