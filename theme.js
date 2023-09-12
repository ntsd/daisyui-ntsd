import chroma from "chroma-js";

// css variables https://daisyui.com/docs/themes/#-5
const cssVariables = {
  "--rounded-box": "0",
  "--rounded-btn": "0",
  "--rounded-badge": "0",
  "--btn-text-case": "normal-case",
  "--tab-radius": "0",
};

const fontFamily =
  "SFMono-Regular, Consolas, Menlo, Monaco, Liberation Mono, Courier New, monospace";

const white = chroma("#fff");
const black = chroma("#000");
const primaryLight = chroma("#3b5bfb");
const primaryDark = primaryLight.brighten(0.5);
const secondaryLight = chroma("#5b7292");
const secondaryDark = secondaryLight.brighten(0.5);
const accentLight = chroma("#67cba0");
const accentDark = accentLight.brighten(0.5);
const neutralLight = chroma("#6b7280");
const neutralDark = neutralLight.brighten(0.5);
const errorLight = chroma("#e24056");
const errorDark = errorLight.brighten(0.5);
const baseLight = chroma("#eef");
const baseDark = chroma("#0d1117");

// colors: https://daisyui.com/docs/colors/#-2
export const light = {
  "color-scheme": "light",
  fontFamily: fontFamily,
  primary: primaryLight.hex(),
  "primary-content": white.hex(),
  secondary: secondaryLight.hex(),
  "secondary-content": white.hex(),
  accent: accentLight.hex(),
  "accent-content": white.hex(),
  neutral: neutralLight.hex(),
  "neutral-content": white.hex(),
  error: errorLight.hex(),
  "error-content": white.hex(),
  "base-100": baseLight.hex(),
  "base-200": baseLight.darken(0.1).hex(),
  "base-300": baseLight.darken(0.2).hex(),
  "base-content": black.hex(),
  ...cssVariables,
};

export const dark = {
  "color-scheme": "dark",
  fontFamily: fontFamily,
  primary: primaryDark.hex(),
  "primary-content": white.hex(),
  secondary: secondaryDark.hex(),
  "secondary-content": white.hex(),
  accent: accentDark.hex(),
  "accent-content": white.hex(),
  neutral: neutralDark.hex(),
  "neutral-content": white.hex(),
  error: errorDark.hex(),
  "error-content": white.hex(),
  "base-100": baseDark.brighten(0.6).hex(),
  "base-200": baseDark.brighten(0.3).hex(),
  "base-300": baseDark.hex(),
  "base-content": white.hex(),
  ...cssVariables,
};

export default [
  {
    light: light,
  },
  {
    dark: dark,
  },
];
