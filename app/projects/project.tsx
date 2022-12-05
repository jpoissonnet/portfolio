import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = ({ project }: any) => {
  return (
    <Link
      href={project.slug}
      className={
        "flex basis-[250px] flex-col justify-between items-start gap-1 h-[350px] m-4 p-2 " +
        "border border-transparent hover:border-slate-50 rounded transition-all duration-300 ease-in-out "
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
    </Link>
  );
};

export default Project;
