import React from "react";
import { getProjectBySlug } from "../projectsConnector";
import Image from "next/image";
import Content from "./content";
import { serialize } from "next-mdx-remote/serialize";

const Page = async ({ params }: { params: any }) => {
  const project = getProjectBySlug(params.slug, [
    "title",
    "content",
    "coverImage",
  ]);
  return (
    <>
      <h1 className={"text-5xl mb-5"}>{project.title}</h1>
      <div className={"relative h-32 md:h-64 w-full my-8 md:my-4"}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        />
      </div>
      <Content content={await serialize(project.content)} />
    </>
  );
};

export default Page;
