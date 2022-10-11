import styled from "styled-components";
import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const CardContainer = styled.a`
  display: flex;
  flex: 1 1 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  height: 300px;
  margin: 2rem 0;
  padding: 1rem 1rem;
  transform: rotate(0.4deg);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  opacity: 0.9;

  &:hover {
    transform: rotate(-0.4deg);
    opacity: 1;
  }
`;
const Img = styled.div`
  flex: 0 0 50%;
  width: 100%;
  position: relative;
`;
export const Card: FC<{
  children: ReactNode;
  title: string;
  src: string;
  alt: string;
  href: string;
}> = ({ children, title, src, alt, href }) => {
  return (
    <Link href={href} passHref>
      <CardContainer>
        <Img>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Img>
        <h3>{title}</h3>
        <p>{children}</p>
      </CardContainer>
    </Link>
  );
};
