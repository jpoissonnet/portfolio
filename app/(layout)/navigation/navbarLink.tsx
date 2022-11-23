"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => {
  const isActive = usePathname() === href;
  return (
    <li
      className={
        "relative after:bg-slate-50 " +
        "after:absolute after:bottom-[-10px] after:rounded after:translate-x-[-50%] " +
        "after:transition-all after:duration-300 after:ease-in-out " +
        "hover:after:opacity-100 hover:after:left-1/2 " +
        (isActive
          ? "after:opacity-100 after:left-1/2 after:w-[5px] after:h-[5px]"
          : "after:opacity-0 after:left-0 after:w-4 after:h-[3px]")
      }
    >
      <Link className={"px-4"} href={href}>
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
