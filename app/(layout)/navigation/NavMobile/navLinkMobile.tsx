import React, { FC, ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Rainbow from "../../../../styles/rainbow";

export const MobileNavLink = styled.li`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.lightest};
  padding: 30px 0;
`;
export const NavLinkMobile: FC<{
  children: ReactNode;
  href: string;
}> = ({ children, href }) => {
  return (
    <MobileNavLink>
      <Link href={href}>
        {usePathname() === href ? <Rainbow>{children}</Rainbow> : children}
      </Link>
    </MobileNavLink>
  );
};
