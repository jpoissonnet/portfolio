import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pill from "./pills";

const Project = ({ project }: any) => {
  return (
    <Link
      href={"projects/" + project.slug}
      className={
        "flex flex-col grow basis-[300px] justify-around h-[350px] p-2 " +
        "border border-transparent hover:border-slate-50 rounded transition-all duration-300 ease-in-out group"
      }
    >
      <div
        className={
          "flex-shrink-0 flex-grow-0 basis-1/2 w-full relative " +
          "transition-all duration-300"
        }
      >
        <Image
          src={project.coverImage}
          alt={project.alt ?? "decorative image"}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <h3 className={"text-xl font-bold"}>{project.title}</h3>
      <p className={"text-sm"}>{project.excerpt}</p>
      <div className={"flex flex-wrap gap-3"}>
        {project.tags.map((tag: any) => (
          <Pill key={tag[0]} color={tag[1]} rank={1}>
            {tag[0]}
          </Pill>
        ))}
      </div>
    </Link>
  );
};

export default Project;
