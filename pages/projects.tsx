import Container from "../components/Container/container";
import NavbarTop from "../components/NavbarTop/navbartop";
import { getAllProjects } from "../lib/api";
import { Card } from "../components/Card/card";
import styled from "styled-components";
import Footer from "../components/Footer/footer";
import { ProjectType } from "../interface/ProjectType";

const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Index({ allProjects }: { allProjects: ProjectType[] }) {
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
                href={`/posts/${project.slug}`}
              >
                {project.excerpt}
              </Card>
            ))}
        </Cards>
      </Container>
      <Footer />
    </>
  );
}

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
