import styled from "styled-components";
import { motion } from "framer-motion";

export const AnimatedBackgroundStyled = styled(motion.div)`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.24;
  svg {
    --color1-start: rgba(255, 292, 255, 1);
    --color1-end: rgba(99, 292, 255, 0);
    --color2-start: rgba(60, 186, 146, 1);
    --color2-end: rgba(60, 186, 146, 0);
    --color3-start: rgba(0, 255, 255, 1);
    --color3-end: rgba(0, 255, 255, 0);
    --color4-start: rgba(0, 255, 0, 1);
    --color4-end: rgba(0, 255, 0, 0);
    --color5-start: rgba(0, 0, 255, 1);
    --color5-end: rgba(0, 0, 255, 0);
    --color6-start: rgba(255, 0, 0, 1);
    --color6-end: rgba(255, 0, 0, 0);
  }
`;
