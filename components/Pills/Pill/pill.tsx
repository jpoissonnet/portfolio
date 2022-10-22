import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const PillRoot = styled.li<{ color: string | undefined }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme, color }) => color || theme.lightest};
  color: ${({ theme, color }) => color || theme.lightest};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

const Pill: FC<{ children: ReactNode; color: string }> = ({
  children,
  color,
}) => {
  return <PillRoot color={color}>{children}</PillRoot>;
};

export default Pill;
