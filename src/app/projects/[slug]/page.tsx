import React from "react";
import {
  getAllProjects,
  getProjectBySlug,
} from "../../../components/projects/projectsConnector";
import Image from "next/image";
import Content from "../../../components/projects/Content";
import { serialize } from "next-mdx-remote/serialize";
import style from "./page.module.css";

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
      <h1 className={style.title}>{project.title}</h1>
      <div className={style.image}>
        <Image
            src={project.coverImage}
            alt={project.title}
            fill={true}
            placeholder={"empty"}
            style={{objectFit: "cover", objectPosition: "bottom"}}
        />
      </div>
      <section className={style.section}>
        <div className={style.content}>
          <Content content={await serialize(project.content)} />
        </div>
      </section>
    </>
  );
};

export default Page;
