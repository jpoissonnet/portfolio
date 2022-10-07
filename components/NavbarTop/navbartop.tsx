import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

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
  display: flex;
  list-style: none;
`;

const NavItem = styled.li<{ router: NextRouter; href: string }>`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.lightest};
  position: relative;

  &:after {
    display: block;
    content: "";
    position: absolute;
    bottom: -10px;
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
  ${({ router, href }) => 
    router.pathname === href &&`
        &:after {
          visibility: visible;
          opacity: 1;
          left: 50%;
          width: 5px;
          height: 5px;
          border-radius: 100px;
        }
      `
  }}
  &:hover:after {
    visibility: visible;
    opacity: 1;
    left: 50%;
  }
`;

const A = styled.a`
  padding: 1rem;
`;

const NavLink: FC<{
  children: ReactNode;
  href: string;
  router: NextRouter;
}> = ({ children, href, router }) => {
  return (
    <NavItem router={router} href={href}>
      <Link passHref href={href}>
        <A>{children}</A>
      </Link>
    </NavItem>
  );
};

const NavbarTop = () => {
  const router = useRouter();
  return (
    <Navbar>
      <NavWrap>
        <Name>
          <Link href={"/"}>Jules Poissonnet</Link>
        </Name>
        <NavItems>
          <NavLink router={router} href={"/"}>
            Home
          </NavLink>
          <NavLink router={router} href={"/projects"}>
            Projects
          </NavLink>
          <NavLink router={router} href={"/contact"}>
            Contact
          </NavLink>
          <NavLink router={router} href={"/cv"}>
            CV
          </NavLink>
        </NavItems>
      </NavWrap>
    </Navbar>
  );
};

export default NavbarTop;
