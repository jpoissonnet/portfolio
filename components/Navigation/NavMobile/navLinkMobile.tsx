import React, { FC, ReactNode } from "react";
import { NextRouter } from "next/router";
import Link from "next/link";
import Rainbow from "../../Rainbow/rainbow";
import styled from "styled-components";

export const MobileNavLink = styled.li`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.lightest};
  padding: 30px 0;
`;
export const NavLinkMobile: FC<{
  children: ReactNode;
  href: string;
  router: NextRouter;
}> = ({ children, href, router }) => {
  return (
    <MobileNavLink>
      <Link passHref href={href}>
          {router.pathname === href ? <Rainbow>{children}</Rainbow> : children}
      </Link>
    </MobileNavLink>
  );
};
