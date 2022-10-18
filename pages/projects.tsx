import Container from "../components/Layout/Container/container";
import NavbarTop from "../components/Navigation/NavbarTop/navbartop";
import { getAllProjects } from "../lib/api";
import { Card } from "../components/Card/card";
import styled from "styled-components";
import Footer from "../components/Layout/Footer/footer";
import { ProjectType } from "../interface/ProjectType";

const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Projects = ({ allProjects }: { allProjects: ProjectType[] }) => {
  return (
    <>
      <NavbarTop />
      <Container>
        <Cards>
          {allProjects.length &&
            allProjects.map((project) => (
              <Card
                key={project.slug}
                title={project.title}
                src={project.coverImage}
                alt={project.title}
                href={`/projects/${project.slug}`}
              >
                {project.excerpt}
              </Card>
            ))}
        </Cards>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allProjects },
  };
};
