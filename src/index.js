import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "regenerator-runtime/runtime.js";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#2c387e",
      main: "#3f51b5",
      dark: "#6573c3",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffef62",
      main: "#ffeb3b",
      dark: "#b2a429",
      contrastText: "#000",
    },
    // error: {
    //   light: "#f6685e",
    //   main: "#f44336",
    //   dark: "#aa2e25",
    // },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
