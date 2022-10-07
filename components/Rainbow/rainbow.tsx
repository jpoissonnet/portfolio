import React, { FC } from "react";
import styled from "styled-components";
import { ScriptProps } from "next/script";

const RainbowWrap = styled.span`
  background: linear-gradient(70deg, #8cc9d5 0%, #6720e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Rainbow: FC<ScriptProps> = ({ children }) => {
  return <RainbowWrap>{children}</RainbowWrap>;
};

export default Rainbow;
