"use client";
import styled from "styled-components";
import { getAllProjects } from "../../lib/api";
import { Card } from "../../components/Card/card";

const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Projects = () => {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
  ]);
  return (
    <Cards>
      {allProjects.length &&
        allProjects.map((project) => (
          <Card
            key={project.slug}
            title={project.title}
            src={project.coverImage}
            alt={project.title}
            href={`/projects/${project.slug}`}
            pills={project.tags}
          >
            {project.excerpt}
          </Card>
        ))}
    </Cards>
  );
};

export default Projects;
