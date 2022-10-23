import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Regular.ttf");
  }

  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Light.ttf");
    font-weight: 300;
  }

  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Medium.ttf");
    font-weight: 500;
  }

  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Bold.ttf");
    font-weight: 700;
  }

  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Black.ttf");
    font-weight: 900;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    min-width: fit-content;
    min-height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.darkest};
    color: ${({ theme }) => theme.lightest};
    font-family: Roboto, Arial, sans-serif;
    transition: all 0.50s linear;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
