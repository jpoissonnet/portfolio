"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import { NavMobile } from "../NavMobile/navMobile";
import { usePathname } from "next/navigation";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 100%;
  background: ${({ theme }) => theme.dark};
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Name = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.lightest};
`;

const NavItems = styled.ul`
  display: none;
  list-style: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.lightest};
  position: relative;
  padding: 1rem;

  &:after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transform: translateX(-50%);
    width: 10px;
    height: 3px;
    border-radius: 5px;
    background: ${({ theme }) => theme.lightest};
    transition: all 0.3s ease-in-out;
  }

  ${({ $isActive }) =>
    $isActive
      ? `
        &:after {
          visibility: visible;
          opacity: 1;
          left: 50%;
          width: 5px;
          height: 5px;
          border-radius: 100px;
        }
      `
      : null}
}

&:hover:after {
  visibility: visible;
  opacity: 1;
  left: 50%;
}
`;

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <NavItem $isActive={usePathname() === href}>
      <Link href={href}>{children}</Link>
    </NavItem>
  );
};

const NavbarTop = () => {
  return (
    <Navbar>
      <NavWrap>
        <Name>
          <Link href={"/"}>Jules P.</Link>
        </Name>
        <NavMobile />
        <NavItems>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/projects"}>Projects</NavLink>
          <NavLink href={"/playground"}>Playground</NavLink>
          <NavLink href={"/resume"}>Resume</NavLink>
        </NavItems>
      </NavWrap>
    </Navbar>
  );
};

export default NavbarTop;
