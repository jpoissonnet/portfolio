<script setup>
import { useRoute } from "vue-router";

const props = defineProps({
  href: {
    type: String,
    required: true
  }
});

const route = useRoute();

</script>
<template>
  <li :class="{ active: route.path === props.href }">
    <nuxt-link :to="props.href">
      <slot />
    </nuxt-link>
  </li>
</template>
<style scoped>
li {
  position: relative;
  transition: all 0.2s ease-in-out;
  padding: 0 12px;
}

li:after {
  position: absolute;
  content: "";
  bottom: -10px;
  left: 50%;
  border-radius: 100%;
  width: 5px;
  height: 5px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  background-color: var(--text-color);
  transform: translateX(1rem);
}

li:hover:after {
  opacity: 1;
  border-radius: 4px;
  width: 12px;
  transform: translateX(-50%);
}

.active {
  color: var(--primary-action);
  background-clip: text;
}

.active:after {
  opacity: 1;
  border-radius: 4px;
  transform: translateX(-50%);
  background-color: var(--primary-action);
}

</style>
