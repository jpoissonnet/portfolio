import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = ({ project }: any) => {
  return (
    <Link
      href={"/"}
      className={
        "flex basis-1/4 flex-col justify-between " +
        "items-start gap-1 h-[350px] m-8"
      }
    >
      <div className={"flex-shrink-0 flex-grow-0 basis-2/3 w-full relative"}>
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
