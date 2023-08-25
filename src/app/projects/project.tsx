import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pill from "./pills";

type Project = {
  slug: string;
  coverImage: string;
  alt: string;
  tags: Array<Array<string>>;
  title: string;
  excerpt: string;
};

const Project = ({ project }: { project: any }) => {
  return (
    <Link
      href={"projects/" + project.slug}
      className={
        "flex flex-col grow basis-[300px] max-w-[500px] justify-between min-h-[350px] m-2 p-2 gap-4 " +
        "border border-transparent hover:border-slate-50 rounded transition-all duration-300 ease-in-out group"
      }
    >
      <div className={"basis-1/2 w-full relative transition-all duration-300"}>
        <Image
          src={project.coverImage}
          alt={project.alt ?? "decorative image"}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <h3 className={"text-xl font-bold"}>{project.title}</h3>
      <p className={"text-sm"}>{project.excerpt}</p>
      <div className={"flex flex-wrap gap-3 "}>
        {project.tags.map((tag, index) => {
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

export default Project;
