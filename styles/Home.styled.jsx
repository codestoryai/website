import styled from "styled-components";
import { motion } from "framer-motion";

import { CodeStoryColours } from "./theme";

export const HomeStyled = styled(motion.article)`
  span {
    font-weight: 600;
    font-size: 125%;
    color: ${CodeStoryColours.pear};
  }
`;
