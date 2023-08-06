import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderStyled = styled(motion.div)`
    width           : 100%;
    height          : 100%;

    #header-card {
        flex-direction : row;
        background     : linear-gradient(0.72turn, #0ba360, #3cba92);
        height         : 100%;
        padding        : 16px;
    }

    .cs-logo svg { width : 140px; }
    .yc-logo svg { width : 96px; }
`;
