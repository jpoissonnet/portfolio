import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,body{
    min-width: fit-content;
  }
  body {
    background: ${({ theme }) => theme.darkest};
    color: ${({ theme }) => theme.lightest};
    font-family: Roboto, Arial,sans-serif;
    transition: all 0.50s linear;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
