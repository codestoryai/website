//  External deps
import { createGlobalStyle } from "styled-components";
import { defaultColours } from "fictoan-react";

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
        //z-index        : 500;x
    }
    
    #footer {
        align-self: flex-end;
    }

    a:focus,
    button:focus { box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }

    .line-height-one { line-height : 1; }

    .font-replica { font-family: "Replica", sans-serif; }
    .font-akkurat { font-family: "Akkurat", sans-serif; }
`;
