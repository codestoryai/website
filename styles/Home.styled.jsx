import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeStyled = styled(motion.article)`
    #home-content {
        display               : grid;
        max-width             : 2400px;
        margin                : 0 auto;
        gap                   : 8px;
        padding               : 8px;
        grid-template-columns : repeat(4, 1fr);
        grid-template-rows    : 72px 40vh auto 64vh auto;
        grid-template-areas   : 
                "header header header      header"
                "intro  intro  description description"
                "aide   aide    aide       aide"
                "usp-1  usp-1   usp-2      usp-2"
                "footer footer  footer     footer";

        @media screen and (max-width : 900px) {
            display        : flex;
            flex-direction : column;
        }
    }

    .content-card {
        display         : flex;
        flex-direction  : column;
        justify-content : center;
    }

    #header { grid-area : header; }

    #intro {
        grid-area  : intro;
        background : linear-gradient(0.33turn, #0ba360, #3cba92);
    }

    #description {
        grid-area  : description;
        background : linear-gradient(0.73turn, #0ba360, #3cba92);
    }

    #aide {
        grid-area  : aide;
        background : linear-gradient(0.93turn, #0ba360, #3cba92);
    }

    #usp-1 {
        grid-area  : usp-1;
        background : linear-gradient(0.16turn, #0ba360, #3cba92);
    }

    #usp-2 {
        grid-area  : usp-2;
        background : linear-gradient(0.82turn, #0ba360, #3cba92);
    }
    
    #footer { grid-area: footer; }
`;