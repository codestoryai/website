import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeStyled = styled(motion.article)`
    // MAIN TAGLINE ===================================================================================================
    #opener-headline {
        background-image        : radial-gradient(circle at center left, rgba(255, 255, 255, 0.88) 0%, rgba(60, 186, 146, 0.96) 100%);
        background-clip         : text;
        -webkit-background-clip : text;
        -webkit-text-fill-color : transparent;
        line-height             : 1.1;
    }
`;
