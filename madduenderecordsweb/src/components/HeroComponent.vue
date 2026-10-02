<script setup lang="ts">
import logoImage from '../assets/logo.png';
</script>

<template>
  <section class="hero" aria-label="Portada Mad Duende Records">
    <div class="hero-overlay">
      <img class="hero-logo" :src="logoImage" alt="Logo de Mad Duende Records" />
      <h1 class="hero-title">Música para una nueva era</h1>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  min-height: calc(78vh - 80px);
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url('../assets/discografica.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.hero-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 18px;
}

.hero-logo {
  width: 128px;
  height: 128px;
  object-fit: contain;
  filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.5));
}

.hero-title {
  color: #ffffff;
  font-size: clamp(1.8rem, 5vw, 3.6rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.6);
}
</style>