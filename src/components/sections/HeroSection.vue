<template>
  <section id="hero" class="hero-section">
    <div class="hero-copy card">
      <div class="hero-topline">
        <p class="hero-kicker">{{ profile.availability }}</p>
        <span class="hero-location">{{ profile.location }}</span>
      </div>

      <h1>{{ profile.name }}</h1>
      <p class="hero-title">{{ profile.title }}</p>
      <p class="hero-summary">{{ profile.summary }}</p>

      <div class="hero-meta">
        <span>{{ profile.tagline }}</span>
      </div>

      <div class="hero-actions">
        <button
          v-for="button in profile.heroButtons"
          :key="button.target"
          class="hero-button"
          :class="button.variant"
          type="button"
          @click="$emit('navigate', button.target)"
        >
          {{ button.label }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})

defineEmits(['navigate'])
</script>
