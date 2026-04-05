<template>
  <SectionBlock id="projects" :title="projects.title" eyebrow="Projects">
    <div class="stack-list">
      <article v-for="project in projects.items" :key="project.name" class="card content-card timeline-card">
        <div class="item-head">
          <div>
            <h3>{{ project.name }}</h3>
            <p class="item-subtitle">{{ project.role }}</p>
          </div>
          <span class="item-period">{{ project.period }}</span>
        </div>
        <p class="item-text">{{ project.description }}</p>
        <div class="chip-list">
          <span v-for="tag in project.tags" :key="tag" class="chip subtle">{{ tag }}</span>
        </div>
        <ul class="bullet-list compact">
          <li v-for="bullet in project.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </article>
    </div>
  </SectionBlock>
</template>

<script setup>
import SectionBlock from '../SectionBlock.vue'

defineProps({
  projects: {
    type: Object,
    required: true,
  },
})
</script>
