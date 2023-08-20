import styled from "styled-components";
import { motion } from "framer-motion";

export const PostPreviewStyled = styled(motion.div)`
    .post-card {
        display         : flex;
        flex-direction  : column;
        justify-content : space-between;
        background      : linear-gradient(0.42turn, #bffa4a, #66bd43);

        &:hover {
            cursor : pointer;
        }
    }

    .post-excerpt {
        -webkit-line-clamp : 4;
        -webkit-box-orient : vertical;
        overflow           : hidden;
        text-overflow      : ellipsis;
        white-space        : nowrap;
    }
`;
