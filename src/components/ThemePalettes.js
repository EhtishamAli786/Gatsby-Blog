import { colors } from "@material-ui/core";

export const lightModeTheme = {
  myColor: {
    main: colors.blue[100],
  },
  primary: {
    contrastText: colors.green[100],
    dark: colors.blue[100],
    main: colors.green[100],
    light: colors.blue[100],
  },
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
};
