import styled from "styled-components";
import { motion } from "framer-motion";
import { transparentize } from "polished";
import { defaultColours } from "fictoan-react";

export const FooterStyled = styled(motion.footer)`
    #social-links {
        display        : flex;
        flex-direction : column;
    }

    a { color : #15c28c; }

    .cs-logo svg { width : 140px; }
    .yc-logo svg { width : 96px; }
`;
