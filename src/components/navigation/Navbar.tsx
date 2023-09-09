import React, { Suspense } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import style from "./Navbar.module.css";
import { MobileNav } from "./mobile/MobileNav";
import ToggleTheme from "../theme/ToggleTheme";

const Navbar = () => {
  return (
    <header className={style.wrapper}>
      <nav className={style.nav}>
        <Link href={"/"}>
          <h1 className={style.title}>Jules P.</h1>
        </Link>
        <Suspense>
          <ToggleTheme />
        </Suspense>
        <MobileNav />
        <ul className={style.navLinkWrapper}>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/projects"}>Projects</NavLink>
          <NavLink href={"/playground"}>Playground</NavLink>
          <NavLink href={"/resume"}>Resume</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
