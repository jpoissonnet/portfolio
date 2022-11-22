"use client";
import React from "react";
import styled from "styled-components";
import Rainbow from "../../styles/rainbow";

const H2 = styled.h2`
  font-size: 1rem;
`;

const Page = () => {
  return (
    <>
      <h1>Welcome to my playground !</h1>
      <p>
        This page is a playground for me to test some stuffs. I will try to keep
        it clean and organized.
      </p>
      <H2>
        <Rainbow>Under construction</Rainbow>
      </H2>
    </>
  );
};

export default Page;
