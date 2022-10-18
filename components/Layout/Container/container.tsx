import React, { FC } from "react";
import styled from "styled-components";
import { ScriptProps } from "next/script";

const ContainerWrap = styled.main`
  max-width: 1060px;
  margin: auto;
  padding: 2rem;
`;

const Container: FC<ScriptProps> = ({ children }) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

export default Container;
