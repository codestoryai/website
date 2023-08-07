//  External deps
import { createGlobalStyle } from "styled-components";

//  Internal deps

//  Local components

//  Local assets


export const GlobalStyle = createGlobalStyle`
    * { border-collapse : collapse; }

    p { margin : 0; }

    div[class*="border"] { border-width : 1px !important; }

    article {
        position       : relative;
        display        : flex;
        min-height     : 100vh;
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
`;
