import React from "react";
import NavbarTop from "../components/NavbarTop/navbartop";
import Footer from "../components/Footer/footer";
import Container from "../components/Container/container";
import Rainbow from "../components/Rainbow/rainbow";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 1rem;
`;

const Playground = () => {
  return (
    <>
      <NavbarTop />
      <Container>
        <h1>Welcome to my playground !</h1>
        <p>
          This page is a playground for me to test some stuffs. I will try to
          keep it clean and organized.
        </p>
        <H2>
          <Rainbow>Under construction</Rainbow>
        </H2>
      </Container>
      <Footer />
    </>
  );
};

export default Playground;
