<script setup>

const getBySlug = (slug) => {
  return [{
    title: "Project 1",
    slug: "project-1",
    date: "2021-01-01",
    excerpt: "This is the excerpt for Project 1.",
    coverImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Project 1",
    tags: [["tag1", "red"], ["tag2", "blue"]]
  }].filter((project) => project.slug === slug)[0];
};
const route = useRoute();
const project = getBySlug(route.params.slug);
</script>

<template>
  <h2>{{ project.title }}</h2>
  <section>
    <div>
      <!--      <Content content={await serialize(project.content)} />-->
    </div>
    <img
      :src="project.coverImage"
      :alt="project.title"
    />
  </section>
</template>

<style scoped>
h2 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.05rem;
  margin-bottom: 1rem;
}

section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}

.content {
  flex: 1 1 100%;
  max-width: 100%;
}

img {
  flex: 1;
  position: relative;
  height: 300px;
  object-fit: cover;
}

</style>