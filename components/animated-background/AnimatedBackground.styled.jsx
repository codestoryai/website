import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimatedBackgroundStyled = styled(motion.div)`
    z-index  : -1;
    position : fixed;
    top      : 0;
    left     : 0;
    width    : 100%;
    height   : 100%;
    opacity  : 0.24;
`;
