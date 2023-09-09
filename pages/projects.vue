<script setup>


const projects = [
  {
    title: "Project 1",
    slug: "project-1",
    date: "2021-01-01",
    excerpt: "This is the excerpt for Project 1.",
    coverImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Project 1",
    tags: [["tag1", "red"], ["tag2", "blue"]]
  }
];

</script>
<template>
  <h2>Projects</h2>
  <section>
    <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
  </section>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
  letter-spacing: 0.1rem;
}

section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
</style>