import React from "react";
import { getAllProjects, getProjectBySlug } from "../projectsConnector";
import Image from "next/image";
import Content from "./content";
import { serialize } from "next-mdx-remote/serialize";

export function generateStaticParams() {
  const projects = getAllProjects(["slug"]);
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const Page = async ({ params }: { params: any }) => {
  const project = getProjectBySlug(params.slug, [
    "title",
    "content",
    "coverImage",
  ]);
  return (
    <>
      <h1 className={"text-5xl mb-5"}>{project.title}</h1>
      <section className={"flex flex-wrap justify-between gap-3"}>
        <div className={"w-[700px] flex-shrink"}>
          <Content content={await serialize(project.content)} />
        </div>
        <div className={"relative flex-1 h-64"}>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill={true}
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </div>
      </section>
    </>
  );
};

export default Page;
