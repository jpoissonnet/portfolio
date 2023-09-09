<template>
  <header>
    <nav>
      <nuxt-link href="/">
        <h1>Jules P.</h1>
      </nuxt-link>
      <ul>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/projects">Projects</NavigationLink>
        <NavigationLink href="/playground">Playground</NavigationLink>
        <NavigationLink href="/resume">Resume</NavigationLink>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--primary-background-color);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 1rem;
  max-width: 1280px;
  margin: auto;
}

h1 {
  font-size: 1.5rem;
  font-weight: 700;
}

ul {
  display: none;
  list-style: none;
}

@media (min-width: 768px) {
  ul {
    display: flex;
  }
}

</style>