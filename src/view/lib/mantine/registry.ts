import {
  ColorSchemeScript,
  DEFAULT_THEME,
  MantineColorsTuple,
  MantineProvider,
  MantineTheme,
} from "@mantine/core";

export const MantineColorSchemeScript = ColorSchemeScript;
export const MantineContextProvider = MantineProvider;

const mantineColors: MantineColorsTuple = [
  "#ffe7f7",
  "#ffcee6",
  "#ff9bc8",
  "#ff63aa",
  "#ff3691",
  "#ff1880",
  "#ff0178",
  "#e50066",
  "#cc005b",
  "#b4004d",
];

export const MantineDefaultTheme: MantineTheme = {
  ...DEFAULT_THEME,
  colors: {
    ...DEFAULT_THEME.colors,
    main: mantineColors,
  },
  scale: 1.6,
  white: "#ffffff",
  primaryShade: 7,
  primaryColor: "main",
  shadows: {
    md: "0px 3px 12px rgba(0, 0, 0, 0.09)",
    xs: "",
    sm: "",
    lg: "",
    xl: "",
  },
  cursorType: "pointer",
  defaultGradient: { from: "#ff0178", to: "blue", deg: 45 },
};

export default {
  MantineContextProvider,
  MantineColorSchemeScript,
  MantineDefaultTheme,
};
