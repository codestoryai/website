//  External deps
import { desaturate } from "polished";
import { createGlobalStyle } from "styled-components";

//  Internal deps
import { CodeStoryColours } from "./CodeStory.colours";
//  Local components

//  Local assets


export const GlobalStyle = createGlobalStyle`
    * { border-collapse : collapse; }

    p { margin : 0; }

    div[class*="border"] { border-width : 1px !important; }

    article {
        position       : relative;
        display        : flex;
        min-height     : 100vh - 56px;
        flex-direction : column;
    }

    #footer {
        align-self : flex-end;
    }

    a:focus,
    button:focus { box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }

    h1, h2, h3, h4, h5, h6 {
        letter-spacing : -0.4px;
    }

    .line-height-one { line-height : 1; }

    .headline {
        line-height             : 1.1; 
    }

    .title {
        color: ${desaturate(0.2, CodeStoryColours.primary)};
    }

	.author-image {
		border-radius: 50%;
		overflow: hidden;
	}

    .video-react {
        border-radius: 8px;
        font: unset !important;
    }

    .video-react .video-react-video {
        border-radius: 8px;
    }

    .video-react .video-react-control-bar {
        border-radius: 8px;
    }
`;
