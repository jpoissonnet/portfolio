"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "./NavLink.module.css";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  const isActive = usePathname() === href;
  
return (
    <li className={isActive ? style.active : style.item}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavLink;
