<template>
  <section :id="id" class="resume-section">
    <div class="section-heading">
      <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <p v-if="description" class="section-description">{{ description }}</p>
    </div>
    <div class="section-body">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  eyebrow: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
