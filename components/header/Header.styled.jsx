import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderStyled = styled(motion.div)`
    position        : sticky;
    top             : 0;
    width           : 100%;
    height          : 56px;
    z-index         : 5000;
    padding         : 12px 0;
    background      : rgba(15, 126, 91, 0.8);
    backdrop-filter : blur(6px);
    border-bottom   : 1px solid rgba(60, 186, 146, 0.56);

    .cs-logo svg { width : 140px; }
    .yc-logo svg { width : 96px; }

    nav {
        display : flex;
        gap     : 16px;
    }

    a { color : #15c28c; }
`;
