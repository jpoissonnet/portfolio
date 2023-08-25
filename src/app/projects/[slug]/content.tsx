"use client";
import React from "react";
import { MDXRemote } from "next-mdx-remote";

const Content = ({ content }: { content: any }) => {
  const components = {
    wrapper: ({ children }: { children: any }) => (
      <div className={"flex flex-col gap-2"}>{children}</div>
    ),
    h1: (props: any) => <h1 className={"text-3xl"} {...props} />,
    h2: (props: any) => <h2 className={"text-2xl"} {...props} />,
    h3: (props: any) => <h3 className={"text-xl"} {...props} />,
    h4: (props: any) => <h4 className={"text-lg"} {...props} />,
    p: (props: any) => <p className={"text-base"} {...props} />,
    a: (props: any) => <a className={"text-blue-500"} {...props} />,
    ul: (props: any) => <ul className={"list-disc"} {...props} />,
  };
  return <MDXRemote {...content} components={components} />;
};

export default Content;
