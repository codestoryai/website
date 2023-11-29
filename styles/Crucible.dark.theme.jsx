import { darken, lighten, transparentize } from "polished";
import { defaultColours } from "fictoan-react";

import { CodeStoryColours } from "./CodeStory.colours";

// GLOBALS  ///////////////////////////////////////////////////////////////////
export const globalVariables = {
    borderWidth  : "1px",
    borderRadius : "16px",
};

export const CrucibleDarkTheme = {
    body : {
        bg : "rgba(20, 23, 27, 1)",
    },

    //  TEXT  /////////////////////////////////////////////////////////////////
    text : {
        font      : {
            sans  : "Weissenhof Grotesk",
            mono  : "Parse Grotesk Mono",
            serif : "Replica",
        },
        paras     : {
            font       : "Weissenhof Grotesk",
            color      : lighten(0.76, CodeStoryColours.undergrowth),
            lineHeight : 1.44,
            size       : 1,
            subtext    : defaultColours.white,
        },
        headings  : {
            font       : "Weissenhof Grotesk",
            weight     : 1000,
            lineHeight : 1.4,
            color      : lighten(0.76, CodeStoryColours.undergrowth),
            multiplier : 1.26,
        },
        links     : {
            font    : "Weissenhof Grotesk",
            default : {
                color : defaultColours.spring
            },
            onHover : {
                color : `${transparentize(0.64, defaultColours.black)}`,
            },
        },
        selection : {
            bg   : defaultColours.spring,
            text : defaultColours.black,
        },
        code : {
            inline : {
                bg    : defaultColours.green60,
                text  : defaultColours.black,
                scale : 80
            },
        },
    },


    // CARD ///////////////////////////////////////////////////////////////////
    card : {
        border       : "transparent",
        borderRadius : "12px",
    },


    // BUTTON /////////////////////////////////////////////////////////////////
    button : {
        font      : "Weissenhof Grotesk",
        isLoading : {
            spinnerBorder : defaultColours.red90,
        },
        primary   : {
            default    : {
                bg           : defaultColours.spring,
                border       : defaultColours.green,
                text         : defaultColours.black,
                borderRadius : "999px",
            },
            onHover    : {
                bg     : defaultColours.spring70,
                border : defaultColours.green,
                text   : defaultColours.black,
            },
            isActive   : {
                bg     : defaultColours.spring,
                border : defaultColours.green,
                text   : defaultColours.black,
            },
            isDisabled : {
                bg     : defaultColours.red90,
                border : defaultColours.red90,
                text   : defaultColours.white,
            },
            isLoading  : {
                spinnerBorder : String(defaultColours.white),
            },
        },
        secondary : {
            default    : {
                bg           : `${transparentize(0.64, defaultColours.spring)}`,
                border       : defaultColours.spring,
                text         : defaultColours.black,
                borderRadius : "999px",
            },
            onHover    : {
                bg     : `${transparentize(0.4, defaultColours.spring)}`,
                border : defaultColours.spring,
                text   : defaultColours.black,
            },
            isActive   : {
                bg     : `${transparentize(0.24, defaultColours.spring)}`,
                border : defaultColours.spring,
                text   : defaultColours.black,
            },
            isDisabled : {
                bg     : defaultColours.red90,
                border : defaultColours.red90,
                text   : defaultColours.black,
            },
            isLoading  : {
                spinnerBorder : String(defaultColours.white),
            },
        },
    },

    //  RULE  /////////////////////////////////////////////////////////////////
    hr : {
        primary   : {
            bg     : defaultColours.white,
            height : "4px",
        },
        secondary : {
            bg     : defaultColours.white,
            height : "1px",
        },
        tertiary  : {
            bg     : `${transparentize(0.4, defaultColours.white)}`,
            height : "1px",
        },
    },
};
