import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

*:focus {
  outline: none;
  box-shadow: inset 0px 0px 0px 2px ${( props ) => props.theme.asideBackgroundColor};
}

body {
  margin: 0;
  color: ${(props) => props.theme.mainTextColor};
  background-color: ${(props) => props.theme.mainBackgroundColor};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;

export const darkTheme = {
  mainBackgroundColor: "#2c3338",
  asideBackgroundColor: "#1d2327",
  mainTextColor: "white",
  errorColor: "red",
};

export const lightTheme = {
  mainBackgroundColor: "#d3ccc7",
  asideBackgroundColor: "#e2dcd8",
  mainTextColor: "black",
  errorColor: "red",
};