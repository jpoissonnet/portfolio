import React from "react";
import style from "./page.module.css";
import ToggleTheme from "../../components/theme/ToggleTheme";

const Playground = () => {
  return (
    <>
      <header>
        <h1 className={style.title}>Welcome to the playground!</h1>
        <p className={style.subtitle}>
          This is the page where I will put all my experiments, tests and other
          stuff.
        </p>
      </header>
      <ul className={style.section}>
        <li className={style.listItem}>
          <h2>Toggle theme</h2>
          <ToggleTheme />
          <p>Three positions : Dark / Auto (system) / Light</p>
        </li>
      </ul>
    </>
  );
};

export default Playground;
