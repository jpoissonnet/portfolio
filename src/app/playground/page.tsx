import React from "react";
import style from "./page.module.css";

const Playground = () => {
  return (
    <section>
      <h1 className={style.title}>Welcome to the playground!</h1>
      <p className={style.subtitle}>
        This is the page where I will put all my experiments, tests and other
        stuff.
      </p>
    </section>
  );
};

export default Playground;
