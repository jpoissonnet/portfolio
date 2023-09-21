<script setup>
const route = useRoute();
const project = useAsyncData("projects", () => queryContent("projects").where({ _path: route.path }).findOne()).data;

</script>

<template>
  <div><h2>{{ project.title }}</h2>
    <section>
      <img
        :src="project.coverImage"
        :alt="project.title"
      />
      <ContentRenderer tag="article" :value="project" />
    </section>
  </div>
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

img {
  flex: 1;
  position: relative;
  height: 300px;
  object-fit: cover;
}

</style>