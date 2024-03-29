import { createTheme } from '@mui/material';
import { primaryColor, secondaryColor } from './config';

const shared = {
  typography: {
    h1: {
      fontSize: "50pt",
      paddingBottom: 10,
    },
    h2: {
      fontSize: "36pt",
      padding: "40px 0 20px 0",
    },
    h6: {
      lineHeight: 1.2,
    },
    fontSize: 16,
    body1: {
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: '11pt',
      lineHeight: 1.5,
      color: 'gray',
    },
  },
};

const lightTheme = createTheme({
  ...shared,
  ...{
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      action: {
        active: '#0052cc',
      },
      text: {
        primary: "#111",
      },
      background: {
        default: "#dfdfdf",
        paper: "#fafafa",
      },
    },
  },
});

const darkTheme = createTheme({
  ...shared,
  ...{
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      action: {
        active: '#ccc',
      },
      text: {
        primary: "#ccc",
      },
      background: {
        default: "#333",
        paper: "#3a3a3a",
      },
    },
  }
});

export {
  lightTheme,
  darkTheme,
};
