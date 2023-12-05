import { flattenObject, forObjectReplace } from '../lib/objects'
export const CodeStoryColours = {
  canopy: "#3cba92",
  shrub: "#2B2B2B",
  undergrowth: "#14171B",
  ash: "#1b2022",
  berry: "#eb5160",
  pear: "#F8C762",
  primary: "#F8C762",
};

export const themeVars = {

  font: {
    family: `"IBM Plex Sans", sans-serif`,
    heading: `"IBM Plex Mono", monospace`,

    size: {
      sm: "clamp(0.8rem, 0.21vw + 0.75rem, 0.94rem)",
      base: "clamp(1rem, 0.38vw + 0.9rem, 1.25rem)",
      md: "clamp(1.25rem, 0.64vw + 1.09rem, 1.67rem)",
      lg: "clamp(1.56rem, 1.01vw + 1.31rem, 2.22rem)",
      xl: "clamp(1.95rem, 1.55vw + 1.57rem, 2.96rem)",
      xxl: "clamp(2.44rem, 2.32vw + 1.86rem, 3.95rem)",
      xxxl: "clamp(3.05rem, 3.4vw + 2.2rem, 5.26rem)",
    }
  },

  background: "#14171B",

  text: "#9B9BAE",
  fadeText: "#87879C",

  primary: "#E56A50",
  primaryRgb: "229, 106, 80",
  primaryOver: "#fff",

  heading: "#babace",

  borderRadius: "6px",

  card: "#191D21",

  codeColor: "#333",
  codeBackground: "#f1f4ec",
};

export type Theme = typeof themeVars;

export const themeCssVars: Record<string, string> = flattenObject(themeVars, (keys, value) => [
  `${keys.join("-")}`,
  value,
]);

export const theme = forObjectReplace(themeVars, (keys) => `var(--${keys.join("-")})`)
