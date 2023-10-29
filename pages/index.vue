x²
<template>
  <section>
    <h2>
      Hello,
      <br />
      <span>
        I am Jules,
        <br />
        nice to meet you.
      </span>
    </h2>
    <p>
      I like to learn things, and I like to share what I learn.
      <br />
      I am a frontend apprentice, and I am currently learning React and Next.js.
    </p>
    <nuxt-link href="/projects">
      <p>See my projects</p>
    </nuxt-link>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 3rem 0;
  gap: 3rem;
}

h2 {
  font-size: 3rem;
  line-height: 1.375em;
  font-weight: bold;

  letter-spacing: -0.025em;
}

span {
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(to right, var(--blue), var(--purple));
}

section > p {
  font-size: 1.5rem;
  line-height: 1.75em;
  font-weight: 300;

  letter-spacing: -0.025em;
}

a {
  padding: 1.25rem;
  border-radius: 0.5rem;
  letter-spacing: -0.025em;
  --background-image: linear-gradient(to right, var(--blue), var(--purple));
  background-image: var(--background-image);
  filter: hue-rotate(0) saturate(100%);
  transition:
    filter 1s ease-out,
    transform 150ms ease-in-out;
}

a:hover {
  filter: hue-rotate(70deg) saturate(50%);
  transform: translateY(-2px);
}

a::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: -2px;
  border-radius: 0.5rem;
  background-image: var(--background-image);
  transition: width 150ms ease-in-out;
  filter: blur(20px);
  animation: flow 2s ease-in-out infinite alternate;
}

@keyframes flow {
  from {
    inset: -2px;
  }
  to {
    inset: -4px;
  }
}
</style>
