import React from "react";
import NavbarTop from "../components/NavbarTop/navbartop";
import styled from "styled-components";
import Footer from "../components/Footer/footer";
import Container from "../components/Container/container";
import { Card } from "../components/Card/card";

const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Projects = () => {
  return (
    <>
      <NavbarTop />
      <Container>
        <Cards>
          <Card
            href={"#"}
            title={"Project name"}
            src={
              "https://images.unsplash.com/photo-1664821661295-b63459d963fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt={"a tower"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            autem earum eum exercitationem fuga hic
          </Card>
          <Card
            href={"#"}
            title={"Project name"}
            src={
              "https://images.unsplash.com/photo-1664821661295-b63459d963fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt={"a tower"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            autem earum eum exercitationem fuga hic
          </Card>
          <Card
            href={"#"}
            title={"Project name"}
            src={
              "https://images.unsplash.com/photo-1664821661295-b63459d963fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt={"a tower"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            autem earum eum exercitationem fuga hic
          </Card>
          <Card
            href={"#"}
            title={"Project name"}
            src={
              "https://images.unsplash.com/photo-1664821661295-b63459d963fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt={"a tower"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            autem earum eum exercitationem fuga hic
          </Card>
          <Card
            href={"#"}
            title={"Project name"}
            src={
              "https://images.unsplash.com/photo-1664821661295-b63459d963fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt={"a tower"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            autem earum eum exercitationem fuga hic
          </Card>
          <Card
            href={"#"}
            title={"Project name"}
            src={
              "https://images.unsplash.com/photo-1664821661295-b63459d963fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt={"a tower"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            autem earum eum exercitationem fuga hic
          </Card>
          <Card
            href={"#"}
            title={"Project name"}
            src={
              "https://images.unsplash.com/photo-1664821661295-b63459d963fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt={"a tower"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            autem earum eum exercitationem fuga hic
          </Card>
        </Cards>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;
