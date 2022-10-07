import React from "react";
import NavbarTop from "../components/NavbarTop/navbartop";
import Footer from "../components/Footer/footer";
import Container from "../components/Container/container";

const Playground = () => {
  return (
    <>
      <NavbarTop />
      <Container>
        <h1>Welcome to my playground !</h1>
        <p>
          This page is a playground for me to test some stuffs. I will try to
          keep it clean and organized. For now it will list the technologies I
          had the chance to work with.
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default Playground;
