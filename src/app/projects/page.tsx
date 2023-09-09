import React from "react";
import { getAllProjects } from "../../components/projects/projectsConnector";
import ProjectCard from "../../components/projects/ProjectCard";
import style from "./page.module.css";

const Page = async () => {
  const projects = getAllProjects([
    "title",
    "slug",
    "date",
    "excerpt",
    "coverImage",
    "alt",
    "tags",
  ]);
  
return (
    <>
      <h2 className={style.title}>Projects</h2>
      <section className={style.projects}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </section>
    </>
  );
};

export default Page;
