import React, { FC, useState } from "react";
import { NextRouter } from "next/router";
import styled from "styled-components";
import { NavLinkMobile } from "./navLinkMobile";

const Hamburger = styled.div`
  display: block;
  position: relative;
  height: 30px;
  width: 40px;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Checkbox = styled.input`
  display: block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 3rem;
  aspect-ratio: 1/1;
  opacity: 0;
  z-index: 30;
`;
const Bar = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: ${({ theme }) => theme.lightest};
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  z-index: 20;

  &:nth-of-type(1) {
    top: 0;
  }

  &:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  &:nth-of-type(3) {
    bottom: 0;
  }

  ${Checkbox}:checked ~ &:nth-of-type(1) {
    top: 50%;
    transform: rotate(45deg);
  }

  ${Checkbox}:checked ~ &:nth-of-type(2) {
    opacity: 0;
    transform: rotate(-45deg);
  }

  ${Checkbox}:checked ~ &:nth-of-type(3) {
    top: 50%;
    transform: rotate(-45deg);
  }
`;
const MobileNav = styled.div<{ displayed: boolean }>`
  transform: ${({ displayed }) =>
    displayed ? "translateY(0)" : "translateY(-100%)"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.dark};
  z-index: 10;
  transition: all 0.3s ease-in-out;
`;
const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  list-style: none;
`;

export const NavMobile: FC<{ router: NextRouter }> = ({ router }) => {
  const [displayed, setDisplay] = useState(false);
  return (
    <>
      <Hamburger>
        <Checkbox
          type="checkbox"
          defaultChecked={displayed}
          onChange={() => setDisplay(!displayed)}
        />
        <Bar></Bar>
        <Bar></Bar>
        <Bar></Bar>
      </Hamburger>
      <MobileNav displayed={displayed}>
        <MobileNavLinks>
          <NavLinkMobile router={router} href={"/"}>
            Home
          </NavLinkMobile>
          <NavLinkMobile router={router} href={"/projects"}>
            Projects
          </NavLinkMobile>
          <NavLinkMobile router={router} href={"/playground"}>
            Playground
          </NavLinkMobile>
          <NavLinkMobile router={router} href={"/resume"}>
            Resume
          </NavLinkMobile>
        </MobileNavLinks>
      </MobileNav>
    </>
  );
};
