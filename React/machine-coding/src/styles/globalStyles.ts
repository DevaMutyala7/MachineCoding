import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#4A90E2", // Soft blue
    secondary: "#50E3C2", // Light teal
    background: "#F5F7FA", // Very light gray
    text: "#333", // Dark gray
    header: "#34495E", // Dark blue-gray
    navbar: "#2C3E50", // Dark blue-gray
    button: "#E74C3C", // Vibrant red
    buttonText: "#FFF",
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

body {
  margin: 0px;
  padding: 0px;
  font-family:${theme.fonts.primary};
  background-color:${theme.colors.background};
  color:${theme.colors.text}
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

`;
