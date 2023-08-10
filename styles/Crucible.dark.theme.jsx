import { lighten, darken, transparentize } from "polished";
import { defaultColours } from "fictoan-react";

// GLOBALS  ///////////////////////////////////////////////////////////////////
export const globalVariables = {
    borderWidth  : "1px",
    borderRadius : "16px",
};

export const CrucibleDarkTheme = {
    body : {
        bg : "#094f39",
    },

    //  TEXT  /////////////////////////////////////////////////////////////////
    text : {
        font      : {
            sans  : "Weissenhof Grotesk",
            mono  : "GT America Mono",
            serif : "Replica",
        },
        paras     : {
            font       : "Weissenhof Grotesk",
            color      : "#1b2022",
            lineHeight : 1.44,
            size       : 1,
            subtext    : defaultColours.white,
        },
        headings  : {
            font       : "Weissenhof Grotesk",
            weight     : 1000,
            lineHeight : 1.4,
            color      : "#1b2022",
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
            bg   : defaultColours.red20,
            text : defaultColours.black,
        },
    },


    // CARD ///////////////////////////////////////////////////////////////////
    card : {
        bg           : "#49ca74",
        border       : defaultColours.green,
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
