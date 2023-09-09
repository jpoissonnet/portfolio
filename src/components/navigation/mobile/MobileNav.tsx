import React from "react";
import { MobileNavLink } from "./MobileNavLink";
import style from "./MobileNav.module.css";
export const MobileNav = () => {
  return (
    <>
      <div className={style.wrapper}>
        <input
          aria-label={"Toggle mobile navigation"}
          type="checkbox"
          className={style.hiddenCheckbox}
        />
        <div className={style.topBar}></div>
        <div className={style.middleBar}></div>
        <div className={style.bottomBar}></div>

        <ul className={style.mobileLinkWrapper}>
          <MobileNavLink href={"/"}>Home</MobileNavLink>
          <MobileNavLink href={"/projects"}>Projects</MobileNavLink>
          <MobileNavLink href={"/playground"}>Playground</MobileNavLink>
          <MobileNavLink href={"/resume"}>Resume</MobileNavLink>
        </ul>
      </div>
    </>
  );
};
