import styled from "styled-components";
import { motion } from "framer-motion";

export const PostPreviewStyled = styled(motion.div)`

    .post-excerpt {
        -webkit-line-clamp : 4;
        -webkit-box-orient : vertical;
        overflow           : hidden;
        text-overflow      : ellipsis;
        white-space        : nowrap;
    }
`;
