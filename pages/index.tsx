import type { NextPage } from "next";
import styled from "styled-components";
import NavbarTop from "../components/NavbarTop/navbartop";
import Link from "next/link";
import { Footer } from "../components/Footer/footer";

const Container = styled.main`
  max-width: 1060px;
  margin: auto;
  padding: 2rem;
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem 0;
  gap: 3rem;
  align-items: flex-start;
  width: auto;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Rainbow = styled.span`
  background: linear-gradient(70deg, #8cc9d5 0%, #6720e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled.h2`
  font-size: 4rem;
  color: ${({ theme }) => theme.lightest};
  letter-spacing: -2px;
  margin-block: 0;
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.lightest};
  letter-spacing: -1px;
  font-weight: 300;
`;

const Button = styled.div`
  display: block;
  position: relative;
  color: ${({ theme }) => theme.lightest};
  border: none;
  border-radius: 0.2rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  z-index: 1;
  background: linear-gradient(70deg,
  ${({ theme }) => theme.primary} 0%,
  ${({ theme }) => theme.secondary} 100%);

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 0.2rem;
    background: linear-gradient(70deg,
    ${({ theme }) => theme.secondary} 0%,
    ${({ theme }) => theme.primary} 100%);
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  &:hover::before {
    visibility: visible;
    opacity: 1;
  }
`;

const Emoji = styled.span`
  display: inline-block;
  transform: translateY(-0.2rem);
  margin-left: 0.5rem;
`;


const Home: NextPage = () =>
  <>
    <NavbarTop />
    <Container>
      <Hero>
        <Title>
          Hello,
          <br />
          <Rainbow>
            I am Jules,
            <br /> nice to meet you.
          </Rainbow>
        </Title>
        <Description>
          I like to learn things, and I like to share what I learn.
          <br /> I am a frontend apprentice, and I am currently learning React
          and Next.js.
        </Description>
        <Button>
          <Link href={"/projects"} passHref>
            <a>
              <span>See my projects</span>
              <Emoji>👉</Emoji>
            </a>
          </Link>
        </Button>
      </Hero>
    </Container>
    <Footer />
  </>;

export default Home;
