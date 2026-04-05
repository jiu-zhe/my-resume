<template>
  <header class="site-header">
    <div class="container nav-shell">
      <button class="brand" type="button" @click="$emit('navigate', 'hero')">
        {{ name }}
      </button>

      <nav class="nav-links" :class="{ open: menuOpen }" aria-label="页面导航">
        <button
          v-for="item in items"
          :key="item.target"
          class="nav-link"
          type="button"
          @click="handleNavigate(item.target)"
        >
          {{ item.label }}
        </button>
      </nav>

      <div class="nav-actions">
        <button class="theme-toggle" type="button" @click="$emit('toggle-theme')">
          {{ isDark ? '浅色模式' : '深色模式' }}
        </button>
        <button class="menu-toggle" type="button" @click="menuOpen = !menuOpen">
          {{ menuOpen ? '关闭' : '菜单' }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  isDark: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['navigate', 'toggle-theme'])
const menuOpen = ref(false)

const handleNavigate = (target) => {
  menuOpen.value = false
  emit('navigate', target)
}
</script>

