<script setup>
    import { ref } from 'vue'
    
    const open = ref(false)
    
    const toggle = () => {
      open.value = !open.value
    }
</script>

<template>
    <header class="header">
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

<style lang="scss">
  .header{
    background-color: #362110;
    height: 64px;
  
    &__button {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 2000;
    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 35px;
      height: 24px;
      background: none;
      border: none;
      cursor: pointer;
    }
  
    &__burger-line {
      height: 3px;
      width: 100%;
      background: #FFFED9;
      transition: all 0.3s ease;
    }
  
    &__burger-line.open:nth-child(1) {
      transform: translateY(9.5px) rotate(45deg);
    }
  
    &__burger-line.open:nth-child(2) {
      opacity: 0;
    }
  
    &__burger-line.open:nth-child(3) {
      transform: translateY(-9.5px) rotate(-45deg);
    }
  
    &__overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.4);
      z-index: 1000;
    }
  
    &__side-menu {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 250px;
      background: #362110;
      box-shadow: -2px 0 10px rgba(0,0,0,0.2);
    
      transform: translateX(100%);
      transition: transform 0.3s ease;
    
      z-index: 1001;
      padding: 80px 20px;
    }
  
    &__side-menu.open {
      transform: translateX(0);
    }
  
    &__side-menu ul {
      list-style: none;
      padding: 0;
    }
  
    &__side-menu li {
      margin-bottom: 20px;
    }
  
    a{
      color: #FFFED9;
      text-decoration: none;
    }
  }
</style>