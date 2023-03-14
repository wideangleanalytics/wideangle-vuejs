<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/sample">Sample</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>


<style scoped>
nav {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;    
}
</style>
