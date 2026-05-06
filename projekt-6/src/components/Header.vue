<script setup>
    import { ref } from 'vue'
    
    const open = ref(false)
    
    const toggle = () => {
      open.value = !open.value
    }
</script>

<template>
    <header class="header">
        <div class="header__logo">
            <RouterLink :to="{ name: 'home' }">
              <!-- <img src="@/assets/logo-naer.png" alt="Logo.">-->
            </RouterLink>
        </div>
        <button
          class="header__button"
          :aria-expanded="open.toString()"
          :aria-label="open ? 'Luk menu' : 'Åben menu'"
          aria-controls="header__primary-navigation"
          @click="toggle"
        >
          <span class="header__burger-line" :class="{ open }"></span>
          <span class="header__burger-line" :class="{ open }"></span>
          <span class="header__burger-line" :class="{ open }"></span>
        </button>

        <div v-if="open" class="header__overlay" @click="toggle"></div>

        <nav id="header__primary-navigation" class="header__side-menu" :class="{ open }">
          <ul>
            <li><RouterLink :to="{ name: 'about' }" @click="toggle">Vores historie og værdier</RouterLink></li>
            <li><RouterLink :to="{ name: 'kontakt' }" @click="toggle">Kontakt</RouterLink></li>
          </ul>
        </nav>
    </header>
</template>
