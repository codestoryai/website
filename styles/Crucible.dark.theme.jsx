import { lighten, darken, transparentize } from "polished";
import { defaultColours } from "fictoan-react";

// GLOBALS  ///////////////////////////////////////////////////////////////////
export const globalVariables = {
    borderWidth  : "1px",
    borderRadius : "8px"
}

export const CrucibleDarkTheme = {
    body : {
        bg : "#289472"
    },

    //  TEXT  /////////////////////////////////////////////////////////////////
    text : {
        font      : {
            sans  : "Weissenhof Grotesk",
            mono  : "GT America Mono",
            serif : "Replica"
        },
        paras     : {
            font       : "Weissenhof Grotesk",
            color      : "#1b2022",
            lineHeight : 1.44,
            size       : 1,
            subtext    : defaultColours.white
        },
        headings  : {
            font       : "Weissenhof Grotesk",
            weight     : 800,
            lineHeight : 1.4,
            color      : "#1b2022",
            multiplier : 1.24
        },
        links     : {
            font    : "Weissenhof Grotesk",
            default : {
                color : "#1b2022"
            },
            onHover : {
                color : `${transparentize(0.64, defaultColours.black)}`
            }
        },
        selection : {
            bg   : defaultColours.red20,
            text : defaultColours.black
        },
    },


    // CARD ///////////////////////////////////////////////////////////////////
    card : {
        bg           : "#49CA74",
        border       : "#49CA74",
        borderRadius : "16px",
    },



    // BUTTON /////////////////////////////////////////////////////////////////
    button : {
        font      : "Weissenhof Grotesk",
        isLoading : {
            spinnerBorder : defaultColours.red90
        },
        primary   : {
            default    : {
                bg           : defaultColours.red90,
                border       : defaultColours.red90,
                text         : defaultColours.white,
                borderRadius : globalVariables.borderRadius
            },
            onHover    : {
                bg     : defaultColours.red70,
                border : defaultColours.red70,
                text   : defaultColours.white
            },
            isActive   : {
                bg     : defaultColours.red,
                border : defaultColours.red,
                text   : defaultColours.white
            },
            isDisabled : {
                bg     : defaultColours.red90,
                border : defaultColours.red90,
                text   : defaultColours.white
            },
            isLoading  : {
                spinnerBorder : String(defaultColours.white)
            }
        },
        secondary   : {
            default    : {
                bg           : `${transparentize(0.4, defaultColours.black)}`,
                border       : defaultColours.red90,
                text         : defaultColours.red90,
                borderRadius : globalVariables.borderRadius
            },
            onHover    : {
                bg     : defaultColours.red70,
                border : defaultColours.red70,
                text   : defaultColours.white
            },
            isActive   : {
                bg     : defaultColours.red,
                border : defaultColours.red,
                text   : defaultColours.white
            },
            isDisabled : {
                bg     : defaultColours.red90,
                border : defaultColours.red90,
                text   : defaultColours.white
            },
            isLoading  : {
                spinnerBorder : String(defaultColours.white)
            }
        },
    },

    //  RULE  /////////////////////////////////////////////////////////////////
    hr : {
        primary   : {
            bg     : defaultColours.white,
            height : "4px"
        },
        secondary : {
            bg     : defaultColours.white,
            height : "1px"
        },
        tertiary  : {
            bg     : `${transparentize(0.4, defaultColours.white)}`,
            height : "1px"
        }
    }
}
