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
import PillList from "../../components/Pills/pillList";
import { ProjectType } from "../../interface/ProjectType";

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

  & p {
    font-size: 1.2rem;
    line-height: 1.5;
    letter-spacing: -0.01em;
    margin-block-end: 0.5rem;
  }

  & h1 {
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: -0.01em;
    font-weight: 700;
  }

  & blockquote > p {
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 400;
    border-left: 2px solid ${({ theme }) => theme.primary};
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    background: ${({ theme }) => theme.dark};
  }

  & code {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.light};
    padding: 2px 5px;
    border-radius: 5px;
  }
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
          <PillList pills={project.tags} />
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
    "tags",
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
