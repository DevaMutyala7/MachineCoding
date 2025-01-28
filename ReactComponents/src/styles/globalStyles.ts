import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#E7E8D1",
    secondary: "#A7BEAE",
    background: "#F5F7FA",
    text: "#333",
    button: "#E74C3C",
    buttonText: "#FFF",
    borderColor: "#f0f0f0",
  },
  fonts: {
    primary: "Courier New, Courier, monospace",
  },
  spacing: {
    padding: "1rem",
  },
};

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

html{
  height: 100%;
}

body {
  margin: 0px;
  padding: 0px;
  font-family:${theme.fonts.primary};
  background-color:${theme.colors.borderColor};
  color:${theme.colors.text}
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding:0;
}

`;
