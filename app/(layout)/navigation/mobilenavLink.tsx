"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinkMobile = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <li className={"text-xl text-accent-slate-80"}>
      <Link href={href}>
        {usePathname() === href ? (
          <span
            className={
              "text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
            }
          >
            {children}
          </span>
        ) : (
          children
        )}
      </Link>
    </li>
  );
};
