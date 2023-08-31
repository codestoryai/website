import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeStyled = styled(motion.article)`
    span {
        -webkit-text-fill-color : revert;
        text-decoration         : line-through red;
    }
`;
