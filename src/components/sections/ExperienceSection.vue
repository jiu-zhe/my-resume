<template>
  <SectionBlock id="experience" :title="experience.title" eyebrow="Experience">
    <div class="stack-list">
      <article v-for="item in experience.items" :key="`${item.company}-${item.period}`" class="card content-card timeline-card">
        <div class="item-head">
          <div>
            <h3>{{ item.role }}</h3>
            <p class="item-subtitle">{{ item.company }}</p>
          </div>
          <span class="item-period">{{ item.period }}</span>
        </div>
        <p class="item-text">{{ item.description }}</p>
        <ul class="bullet-list compact">
          <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </article>
    </div>
  </SectionBlock>
</template>

<script setup>
import SectionBlock from '../SectionBlock.vue'

defineProps({
  experience: {
    type: Object,
    required: true,
  },
})
</script>
