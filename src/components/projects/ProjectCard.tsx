import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pill from "./Pill";
import style from "./ProjectCard.module.css";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Link href={`projects/${  project.slug}`} className={style.wrapper}>
      <div className={style.image}>
        <Image
          src={project.coverImage}
          alt={project.alt ?? "decorative image"}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <h3 className={style.title}>{project.title}</h3>
      <p className={style.excerpt}>{project.excerpt}</p>
      <div className={style.pills}>
        {project.tags.map((tag: string, index: number) => {
          return (
            <Pill key={tag[0]} color={tag[1]} rank={index}>
              {tag[0]}
            </Pill>
          );
        })}
      </div>
    </Link>
  );
};

export default ProjectCard;
