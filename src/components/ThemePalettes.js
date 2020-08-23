import { colors } from "@material-ui/core";

export const lightModeTheme = {
  myColor: {
    main: colors.blue[100],
  },
  primary: {
    contrastText: colors.green[100],
    dark: colors.blue[100],
    main: "#0077b5",
    light: colors.blue[100],
  },
  text: {
    clr1: "#fff",
    clr2: "#292222",
  },
  link: {
    clr1: "purple",
  },
  bgColor: { clr1: "#fff" },
};

export const darkModeTheme = {
  myColor: {
    main: colors.grey[900],
  },
  primary: {
    contrastText: colors.grey[900],
    dark: colors.grey[900],
    main: colors.grey[900],
    light: colors.grey[900],
  },
  text: {
    clr1: "#fff",
    clr2: "#e5e5e6",
  },
  link: {
    clr1: "red",
  },
  bgColor: { clr1: "#282c35" },
};
