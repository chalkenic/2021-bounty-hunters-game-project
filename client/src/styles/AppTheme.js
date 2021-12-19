import { createTheme } from "@material-ui/core/styles";

const AppTheme = createTheme({
  palette: {
    primary: {
      // Icon color
      light: "#ffff",
      // Accent Color
      main: "#a5a2d1",
      // Text field color
      dark: "#4E5055",
    },
    background: {
      default: "#79d6e7",
      paper: "#31394E",
      board: "#0277bd",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },

    progressBar: {
      lowProgress: "#DD2C00",
      medProgress: "##FFEB3B",
      highProgress: "##1B5E20",
    },
  },
});
export default AppTheme;
