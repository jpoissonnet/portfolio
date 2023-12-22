"use client";
import React from "react";
import { MDXRemote } from "next-mdx-remote";
import style from "./Content.module.css";

const Content = ({ content }: { content: any }) => {
  const components = {
    wrapper: ({ children }: { children: any }) => (
      <div className={style.wrapper}>{children}</div>
    ),
    h1: (props: any) => <h1 className={style.h1} {...props} />,
    h2: (props: any) => <h2 className={style.h2} {...props} />,
    h3: (props: any) => <h3 className={style.h3} {...props} />,
    h4: (props: any) => <h4 className={style.h4} {...props} />,
    p: (props: any) => <p className={style.p} {...props} />,
    a: (props: any) => <a className={style.a} {...props} />,
    ul: (props: any) => <ul className={style.ul} {...props} />,
    pre: (props: any) => <pre className={style.pre} {...props} />,
    code: (props: any) => <code className={style.code} {...props} />,
  };
  
return <MDXRemote {...content} components={components} />;
};

export default Content;
