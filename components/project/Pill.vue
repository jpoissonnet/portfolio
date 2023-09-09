<script setup>
const { color, rank } = defineProps({
  color: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
});

const computedStyle = computed(() => {
  return {
    "--pill-color": color,
    "--rank": rank
  };
});
</script>

<template>
  <li :style="computedStyle">
    <slot />
  </li>
</template>

<style scoped>
li {
  display: inline-block;
  position: relative;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 300;
  white-space: nowrap;
  letter-spacing: 0.05rem;
  background-color: var(--primary-background-color);
  border-radius: 0.75rem;
  overflow: clip;
  overflow-clip-margin: var(--clip-margin);
  --clip-margin: 2px;
  --pill-color: var(--primary-action);
  --rank: 1;
}

li::before {
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 0.5rem);
  aspect-ratio: 1/1;
  transform: translate(-50%, -50%);
  content: "";
  /*rainbow conic gradient*/
  background: conic-gradient(
    var(--pill-color),
    var(--text-color),
    var(--pill-color)
  );
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-name: rotation;
  animation-delay: calc(var(--rank) * 1s);
}

@keyframes rotation {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

</style>