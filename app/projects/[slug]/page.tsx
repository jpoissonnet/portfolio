import React from "react";
import { getProjectBySlug } from "../projectsConnector";
import Image from "next/image";

const Page = ({ params }: { params: any }) => {
  const project = getProjectBySlug(params.slug, ["title", "content", "coverImage"]);
  return (
    <>
      <h1>{project.title}</h1>
      <div className={"relative"}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: project.content }} />
    </>
  );
};

export default Page;