import React from "react";

import { AnimatedBackgroundStyled } from "./AnimatedBackground.styled";

const AnimatedBackground = () => {
    return (
        <AnimatedBackgroundStyled>
            <div id="bg-wrap">
                <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                    <style>
                        {`
      :root {
        --color1-start: rgba(99, 292, 255, 1);
        --color1-end: rgba(99, 292, 255, 0);
        --color2-start: rgba(60, 186, 146, 1);
        --color2-end: rgba(60, 186, 146, 0);
        --color3-start: rgba(0, 255, 255, 1);
        --color3-end: rgba(0, 255, 255, 0);
        --color4-start: rgba(0, 255, 0, 1);
        --color4-end: rgba(0, 255, 0, 0);
        --color5-start: rgba(0,0,255, 1);
        --color5-end: rgba(0,0,255, 0);
        --color6-start: rgba(255,0,0, 1);
        --color6-end: rgba(255,0,0, 0);
      }
    `}
                    </style>
                    <defs>
                        <radialGradient id="Gradient1" cx="50%" cy="50%" fx="1%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="340s" values="0%;3%;0%" repeatCount="indefinite" />
                            <stop offset="0%" stopColor="var(--color1-start)" />
                            <stop offset="100%" stopColor="var(--color1-end)" />
                        </radialGradient>

                        <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="230s" values="0%;5%;0%" repeatCount="indefinite" />
                            <stop offset="0%" stopColor="var(--color2-start)" />
                            <stop offset="100%" stopColor="var(--color2-end)" />
                        </radialGradient>

                        <radialGradient id="Gradient3" cx="50%" cy="50%" fx="3%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="240s" values="0%;5%;0%" repeatCount="indefinite" />
                            <stop offset="0%" stopColor="var(--color3-start)" />
                            <stop offset="100%" stopColor="var(--color3-end)" />
                        </radialGradient>

                        <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="230s" values="0%;5%;0%" repeatCount="indefinite" />
                            <stop offset="0%" stopColor="var(--color4-start)" />
                            <stop offset="100%" stopColor="var(--color4-end)" />
                        </radialGradient>

                        <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="240.5s" values="0%;5%;0%" repeatCount="indefinite" />
                            <stop offset="0%" stopColor="var(--color5-start)" />
                            <stop offset="100%" stopColor="var(--color5-end)" />
                        </radialGradient>

                        <radialGradient id="Gradient6" cx="50%" cy="50%" fx="1%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="250.50s" values="0%;5%;0%" repeatCount="indefinite" />
                            <stop offset="0%" stopColor="var(--color6-start)" />
                            <stop offset="100%" stopColor="var(--color6-end)" />
                        </radialGradient>
                    </defs>

                    <rect
                        x="13.744%"
                        y="1.18473%"
                        width="100%"
                        height="100%"
                        fill="url(#Gradient1)"
                        transform="rotate(334.41 50 50)"
                    >
                        <animate attributeName="x" dur="200s" values="25%;0%;25%" repeatCount="indefinite" />
                        <animate attributeName="y" dur="210s" values="0%;25%;0%" repeatCount="indefinite" />
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            dur="40s"
                            repeatCount="indefinite"
                        />
                    </rect>

                    <rect
                        x="-2.17916%"
                        y="35.4267%"
                        width="100%"
                        height="100%"
                        fill="url(#Gradient2)"
                        transform="rotate(255.072 50 50)"
                    >
                        <animate attributeName="x" dur="230s" values="-25%;0%;-25%" repeatCount="indefinite" />
                        <animate attributeName="y" dur="240s" values="0%;50%;0%" repeatCount="indefinite" />
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            dur="80s"
                            repeatCount="indefinite"
                        />
                    </rect>

                    <rect
                        x="9.00483%"
                        y="14.5733%"
                        width="100%"
                        height="100%"
                        fill="url(#Gradient3)"
                        transform="rotate(139.903 50 50)"
                    >
                        <animate attributeName="x" dur="250s" values="0%;25%;0%" repeatCount="indefinite" />
                        <animate attributeName="y" dur="120s" values="0%;25%;0%" repeatCount="indefinite" />
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="360 50 50"
                            to="0 50 50"
                            dur="50s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </svg>
            </div>
        </AnimatedBackgroundStyled>
    );
};

export default AnimatedBackground;
