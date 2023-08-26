import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      Made with ❤️ by
      <span className={style.emphasis}>&nbsp;Jules P.</span>
    </footer>
  );
};

export default Footer;
