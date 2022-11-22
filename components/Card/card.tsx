import styled from "styled-components";
import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import PillList from "../Pills/pillList";

export const CardContainer = styled.a`
  display: flex;
  flex: 1 1 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  height: 350px;
  margin: 2rem 0;
  padding: 1rem 1rem;
  transform: rotate(0.4deg);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  opacity: 0.9;

  &:hover {
    transform: rotate(-0.4deg);
    opacity: 1;

    & ul > li {
      color: ${({ theme }) => theme.dark};
      border: 1px solid ${({ theme }) => theme.dark};

      &::before {
        left: 0;
      }
    }
`;
const Img = styled.div`
  flex: 0 0 60%;
  width: 100%;
  position: relative;
  object-fit: cover;
`;
export const Card: FC<{
  children: ReactNode;
  title: string;
  src: string;
  alt: string;
  href: string;
  pills: any[];
}> = ({ children, title, src, alt, href, pills }) => {
  return (
    <Link href={href} passHref>
      <CardContainer>
        <Img>
          <Image
            src={src}
            alt={alt}
            fill={true}
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </Img>
        <h3>{title}</h3>
        <p>{children}</p>
        <PillList pills={pills} />
      </CardContainer>
    </Link>
  );
};
