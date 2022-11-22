"use client";
import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import { GlobalStyles } from "../styles/Global";

const ContainerWrap = styled.main`
  max-width: 1060px;
  margin: auto;
  padding: 2rem;
`;

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <ContainerWrap>{children}</ContainerWrap>
      </>
    </ThemeProvider>
  );
};

export default RootLayout;
