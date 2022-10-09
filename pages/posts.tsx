import Container from "../components/Container/container";
import NavbarTop from "../components/NavbarTop/navbartop";
import { getAllPosts } from "../lib/api";
import { Card } from "../components/Card/card";
import styled from "styled-components";
import Link from "next/link";
import Footer from "../components/Footer/footer";

type PostType = {
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

type Props = {
  allPosts: PostType[];
};

const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Index({ allPosts }: Props) {
  return (
    <>
      <NavbarTop />
      <Container>
        <Cards>
          {allPosts.length &&
            allPosts.map((post) => (
              <Card
                key={post.slug}
                title={post.title}
                src={post.coverImage}
                alt={post.title}
                href={`/posts/${post.slug}`}
              >
                {post.excerpt}
              </Card>
            ))}
        </Cards>
      </Container>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
