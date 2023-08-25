import React from "react";

const Footer = () => {
  return (
    <footer className={"italic font-light text-center my-3"}>
      Made with <span className={"text-red-500"}>❤</span> by{" "}
      <span
        className={
          "font-normal bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
        }
      >
        Jules
      </span>
    </footer>
  );
};

export default Footer;
