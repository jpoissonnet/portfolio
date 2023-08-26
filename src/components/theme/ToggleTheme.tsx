"use client";
import React, { useEffect } from "react";
import { useTernaryDarkMode } from "usehooks-ts";
import style from "./ToggleTheme.module.css";

const ToggleTheme = () => {
  const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } =
    useTernaryDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  return (
    <form className={style.wrapper}>
      <input
        className={style.darkInput}
        type="radio"
        name="theme"
        id="dark"
        onChange={() => setTernaryDarkMode("dark")}
        checked={ternaryDarkMode === "dark"}
      />
      <label htmlFor="dark" className={style.darkLabel}></label>
      <input
        className={style.systemInput}
        type="radio"
        name="theme"
        id="system"
        onChange={() => setTernaryDarkMode("system")}
        checked={ternaryDarkMode === "system"}
      />
      <label htmlFor="system" className={style.systemLabel}></label>
      <input
        className={style.lightInput}
        type="radio"
        name="theme"
        id="light"
        onChange={() => setTernaryDarkMode("light")}
        checked={ternaryDarkMode === "light"}
      />
      <label htmlFor="light" className={style.lightLabel}></label>
    </form>
  );
};

export default ToggleTheme;
