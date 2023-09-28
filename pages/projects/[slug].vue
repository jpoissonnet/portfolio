<script setup>
const route = useRoute();
const project = useAsyncData("projects", () =>
  queryContent("projects").where({ _path: route.path }).findOne(),
).data;
</script>

<template>
  <h2>{{ project.title }}</h2>
  <section>
    <img :src="project.coverImage" :alt="project.title" />
    <ContentRenderer tag="article" :value="project">
      <template #empty>
        <div class="skeleton-title"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-title"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-title"></div>
        <div class="skeleton-text"></div>
      </template>
    </ContentRenderer>
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

img {
  flex: 1;
  position: relative;
  height: 300px;
  object-fit: cover;
}

.skeleton-title {
  width: 16ch;
  height: 1em;
  font-size: 2em;
  margin: 0.67em 0;
  background: #383838;
  border-radius: 1em;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: shimmer 1s infinite;
  }
}

.skeleton-text {
  width: 100%;
  height: 4em;
  background: #383838;
  border-radius: 1em;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: shimmer 1s ease-in-out infinite;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
