//  External deps
import { desaturate } from "polished";
import { createGlobalStyle } from "styled-components";

//  Internal deps
import { CodeStoryColours, theme, themeCssVars } from "./theme";
//  Local components

//  Local assets
const varcss = Object.entries(themeCssVars).reduce((p, c) => `${p}; --${c[0]}: ${c[1]}`, '');
// console.log({ varcss })

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Sans&family=Outfit:wght@300;400;500;700&display=swap');

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

/* Remove default margin in favour of better control in authored CSS */
body, h1, h2, h3, h4, p,
figure, blockquote, dl, dd {
  margin-block: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
}

/* Set shorter line heights on headings and interactive elements */
h1, h2, h3, h4,
button, input, label {
  line-height: 1.25;
}

/* Balance text wrapping on headings */
h1, h2,
h3, h4 {
  text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input, button,
textarea, select {
  font: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}
* { border-collapse : collapse; }

p { margin : 0; }

div[class*="border"] { border-width : 1px !important; }

#footer {
  align-self : flex-end;
}

:root {
  ${varcss};
}

html, body {
  color: ${theme.text};
  background: ${theme.background};
  font-size: ${theme.font.size.base};
  margin: 0;
}

body, p, div {
  font-family: 'IBM Plex Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  color: ${theme.heading};
  font-family: 'IBM Plex Mono', sans-serif;
}

a:focus,
button:focus { box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }

h1, h2, h3, h4, h5, h6 {
    letter-spacing : -0.4px;
}

.line-height-one { line-height : 1; }

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
