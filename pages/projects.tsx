import React, { FC, ReactNode } from "react";
import NavbarTop from "../components/NavbarTop/navbartop";
import styled from "styled-components";

const Container = styled.main`
  max-width: 1060px;
  margin: auto;
  padding: 2rem;
`;

const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  display: flex;
  flex: 0 0 50%;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
  gap: 1rem;
  min-height: 400px;
  align-items: flex-start;
  width: auto;
  margin: 2rem 0;
  @media (min-width: 768px) {
    flex: 0 0 30%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-position: center;
  object-fit: cover;
`;

const Card: FC<{
  children: ReactNode;
  title: string;
  src: string;
  alt: string;
}> = ({ children, title, src, alt }) => {
  return (
    <CardContainer>
      <Image src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{children}</p>
    </CardContainer>
  );
};

const Projects = () => {
  return (
    <>
      <NavbarTop />
      <Container>
        <Cards>
          <Card
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
    </>
  );
};

export default Projects;
