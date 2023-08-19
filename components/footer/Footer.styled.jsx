import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterStyled = styled(motion.footer)`
    #social-links,
    #nav-links {
        display        : flex;
        flex-direction : column;
    }

    a { color : #15c28c; }

    .cs-logo svg { width : 140px; }
    .yc-logo svg { width : 96px; }
`;
