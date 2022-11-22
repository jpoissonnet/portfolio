import React, { ReactNode } from "react";
import styled from "styled-components";

export const PillRoot = styled.li<{ color: string | undefined; rank: number }>`
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme, color }) => color || theme.lightest};
  color: ${({ theme, color }) => color || theme.lightest};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: -0.5px;
  transition: 0.3s ease-in-out;
  overflow: hidden;

  &::before {
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    top: 0;
    left: -100%;
    background-image: linear-gradient(
      ${({ theme, color }) => color || theme.lightest},
      ${({ theme, color }) => color || theme.lightest}
    );
    transition: left 0.3s ease-in-out;
    transition-delay: ${({ rank }) => rank * 50}ms;
  }
`;

const Pill = ({
  children,
  color,
  rank,
}: {
  children: ReactNode;
  color: string;
  rank: number;
}) => {
  return (
    <PillRoot rank={rank} color={color}>
      {children}
    </PillRoot>
  );
};

export default Pill;
