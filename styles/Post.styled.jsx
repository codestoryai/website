import styled from "styled-components";
import { motion } from "framer-motion";
import { lighten } from "polished";

import { CodeStoryColours } from "./CodeStory.colours";

export const PostStyled = styled(motion.article)`
	.author-intro {
		h6, p, svg {
			color: ${lighten(0.2, CodeStoryColours.canopy)};
		}
	}

	h3, h5 {
		color: ${lighten(0.2, CodeStoryColours.canopy)} !important;
	}

	li {
		margin-bottom: 8px !important;
	}

	blockquote {
		border-left: 4px solid ${lighten(0.2, CodeStoryColours.canopy)};
		padding-left: 16px;
		margin-left: 0;
		font-style: italic;
	}
`;
