<template>
  <SectionBlock id="skills" :title="skills.title" eyebrow="Skills">
    <div class="card-grid skill-grid">
      <article v-for="group in skills.groups" :key="group.name" class="card content-card skill-card">
        <h3>{{ group.name }}</h3>
        <div class="chip-list">
          <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
        </div>
      </article>
    </div>
  </SectionBlock>
</template>

<script setup>
import SectionBlock from '../SectionBlock.vue'

defineProps({
  skills: {
    type: Object,
    required: true,
  },
})
</script>
