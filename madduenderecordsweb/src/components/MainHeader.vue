<script setup lang="ts">
import { ref } from 'vue';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Canciones', href: '#' },
  { label: 'Vídeo', href: '#' },
  { label: 'Nosotros', href: '#' },
  { label: 'Contacto', href: '#' },
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="main-header">
    <nav class="nav-bar" aria-label="Navegación principal">
      <div class="brand">
        <div class="logo" aria-label="Logo de MadDuendeRecords">M</div>
        <span class="brand-name brand-name-full">Mad Duende Records</span>
        <span class="brand-name brand-name-mobile">MDR</span>
      </div>

      <button
        class="menu-toggle"
        :class="{ active: isMenuOpen }"
        type="button"
        aria-label="Abrir menú"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-menu" :class="{ open: isMenuOpen }">
        <li v-for="item in navItems" :key="item.label">
          <a :href="item.href" @click="closeMenu">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.main-header {
  width: 100%;
  background: #f28c28;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
}

.nav-bar {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  gap: 24px;
  position: relative;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #ffffff;
  z-index: 2;
}

.logo {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  border: 2px solid rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.3rem;
  color: #ffffff;
}

.brand-name {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.brand-name-full {
  display: inline;
}

.brand-name-mobile {
  display: none;
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin: 0;
}

.nav-menu a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 999px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.98rem;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.nav-menu a:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
}

.menu-toggle {
  display: none;
  width: 46px;
  height: 46px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: transparent;
  border-radius: 10px;
  padding: 10px 8px;
  cursor: pointer;
  z-index: 2;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background: #ffffff;
  margin: 5px 0;
  transition: all 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

@media (max-width: 768px) {
  .nav-bar {
    padding: 16px 20px;
    min-height: 72px;
    flex-wrap: wrap;
  }

  .brand {
    flex: 1;
  }

  .brand-name {
    font-size: 1.35rem;
  }

  .brand-name-full {
    display: none;
  }

  .brand-name-mobile {
    display: inline;
  }

  .menu-toggle {
    display: block;
  }

  .nav-menu {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    background: rgba(242, 140, 40, 0.98);
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    padding: 12px 0 8px;
    margin-top: 4px;
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-menu li {
    width: 100%;
  }

  .nav-menu a {
    width: 100%;
    justify-content: center;
    border-radius: 0;
    padding: 14px 16px;
  }
}
</style>
