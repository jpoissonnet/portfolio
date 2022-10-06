import React, { FC, ReactNode } from "react";
import NavbarTop from "../components/NavbarTop/navbartop";
import styled from "styled-components";
import { Footer } from "../components/Footer/footer";
import Image from "next/image";

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
  flex: 1 1 300px;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1rem;
  height: 400px;
  margin: 2rem 0;
  padding: 2rem;
`;

const Img = styled.div`
  flex: 0 1 70%;
  position: relative;
  width: 100%;
`;

const Card: FC<{
  children: ReactNode;
  title: string;
  src: string;
  alt: string;
}> = ({ children, title, src, alt }) => {
  return (
    <CardContainer>
      <Img>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" objectPosition="center" />
      </Img>
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
      <Footer />
    </>
  );
};

export default Projects;
