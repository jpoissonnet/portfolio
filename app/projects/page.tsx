import React from "react";
import { getAllProjects } from "./projectsConnector";
import Project from "./project";

const Page = async () => {
  const projects = getAllProjects([
    "title",
    "slug",
    "date",
    "excerpt",
    "coverImage",
    "alt"
  ]);
  return (
    <>
      <h2 className={"text-3xl font-bold my-8"}>Projects</h2>
      <div className={"flex flex-wrap justify-between"}>
        {projects.length &&
          projects.map((project) => (
            <Project project={project} key={project.slug} />
          ))}
      </div>
    </>
  );
};

export default Page;
