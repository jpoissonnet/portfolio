"use client";
import React, { ReactNode } from "react";
import style from "./MobileNavLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNavLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  const pathname = usePathname();
  return (
    <li
      className={style.item}
      onClick={() => {
        (
          document.querySelector("input[type=checkbox]") as HTMLInputElement
        ).checked = false;
      }}
    >
      <Link href={href} className={pathname === href ? style.active : ""}>
        {children}
      </Link>
    </li>
  );
};
