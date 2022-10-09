import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import NavbarTop from "../../components/NavbarTop/navbartop";
import Container from "../../components/Container/container";
import styled from "styled-components";
import Image from "next/image";
import { FC } from "react";
import Footer from "../../components/Footer/footer";

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
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Img = styled.div`
  flex-basis: 200px;
  width: 100%;
  position: relative;
`;

const PostContainer = styled.article`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1rem;
`;

const PostTitle = styled.h1`
  flex: 1;
  letter-spacing: 2px;
  font-weight: 700;
`;

const PostContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1rem;
`;

const Post: FC<{ post: PostType }> = ({ post }) => {
  return (
    <>
      <NavbarTop />
      <Container>
        <PostContainer>
          <PostTitle>{post.title}</PostTitle>
          <Img>
            <Image
              src={post.coverImage}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Img>
          <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Post;

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
