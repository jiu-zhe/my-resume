<template>
  <SectionBlock id="education" :title="education.title" eyebrow="Education">
    <div class="stack-list">
      <article v-for="item in education.items" :key="`${item.school}-${item.period}`" class="card content-card timeline-card">
        <div class="item-head">
          <div>
            <h3>{{ item.school }}</h3>
            <p class="item-subtitle">{{ item.major }} · {{ item.degree }}</p>
          </div>
          <span class="item-period">{{ item.period }}</span>
        </div>
        <p class="item-text">{{ item.description }}</p>
      </article>
    </div>
  </SectionBlock>
</template>

<script setup>
import SectionBlock from '../SectionBlock.vue'

defineProps({
  education: {
    type: Object,
    required: true,
  },
})
</script>
