import styled from "styled-components";
import { motion } from "framer-motion";
import { lighten } from "polished";

import { CodeStoryColours } from "@/styles/CodeStory.colours";

export const FooterStyled = styled(motion.footer)`
    #social-links,
    #nav-links {
        display        : flex;
        flex-direction : column;
    }

    a { color : ${lighten(0.64, CodeStoryColours.undergrowth)}; }

    .cs-logo svg { width : 160px; }
    .yc-logo svg { width : 108px; }
`;
