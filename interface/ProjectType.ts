export type ProjectType = {
  tags: { color: string; text: string }[];
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
