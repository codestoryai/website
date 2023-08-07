import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderStyled = styled(motion.div)`
    .cs-logo svg { width : 140px; }
    .yc-logo svg { width : 96px; }

    nav {
        display : flex;
        gap     : 16px;
    }
`;
