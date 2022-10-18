import { getProjectBySlug, getAllProjects } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import NavbarTop from "../../components/Navigation/NavbarTop/navbartop";
import Container from "../../components/Layout/Container/container";
import styled from "styled-components";
import Image from "next/image";
import { FC } from "react";
import Footer from "../../components/Layout/Footer/footer";
import { MDXRemote } from "next-mdx-remote";
import Rainbow from "../../components/Rainbow/rainbow";

type ProjectType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: {
    name: string;
    picture: string;
  };
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

const Img = styled.div`
  flex-basis: 200px;
  width: 100%;
  position: relative;
`;

const ProjectContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 auto;
  height: 100%;
  max-width: 750px;
  gap: 1rem;
  padding: 1rem 1rem;
`;

const ProjectTitle = styled.h1`
  flex: 1;
  letter-spacing: 2px;
  font-weight: 700;
`;

const Project: FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <>
      <NavbarTop />
      <Container>
        <ProjectContainer>
          <ProjectTitle>{project.title}</ProjectTitle>
          <Img>
            <Image
              src={project.coverImage}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Img>
          <MDXRemote {...(project.content as any)} components={{ Rainbow }} />
        </ProjectContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Project;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
