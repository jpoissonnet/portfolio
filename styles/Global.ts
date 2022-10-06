import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html,body{
    min-height: 100vw;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.darkest};
    color: ${({ theme }) => theme.lightest};
    font-family: Roboto, Arial,sans-serif;
    transition: all 0.50s linear;
  }
`;
