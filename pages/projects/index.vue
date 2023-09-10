<script setup>
const projects = useAsyncData("projects", () => queryContent("projects").find()).data;
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