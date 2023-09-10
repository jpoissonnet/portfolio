<script setup>
const { project } = defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <nuxt-link :href="project._path">
    <div>
      <img
        :src="project.coverImage"
        :alt="project.alt"
      />
    </div>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <ul>
      <ProjectPill v-for="tag in project.tags" :key="tag" :rank="1" :color="tag[1]">
        {{ tag[0] }}
      </ProjectPill>
    </ul>
  </nuxt-link>
</template>

<style scoped>
a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 1rem;
  gap: 1rem;
  isolation: isolate;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  transition: border 300ms ease-in-out;
}

a:hover {
  border: 1px solid var(--text-color);
}

img {
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 180px;
  object-fit: cover;

}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
}

p {
  font-size: 1rem;
  font-weight: 400;
  line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}

ul {
  display: flex;
  gap: 0.5rem;
}

</style>
