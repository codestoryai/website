import styled from "styled-components";
import { motion } from "framer-motion";
import { lighten } from "polished";

import { CodeStoryColours } from "./CodeStory.colours";

export const PostStyled = styled(motion.article)`
	.author-intro {
		h6, p {
			color: ${lighten(0.2, CodeStoryColours.canopy)};
		}
	}
`;
