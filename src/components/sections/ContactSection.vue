<template>
  <SectionBlock
    id="contact"
    :title="contact.title"
    eyebrow="Contact"
    :description="contact.intro"
  >
    <div class="card-grid contact-grid">
      <a
        v-for="item in contact.items"
        :key="item.label"
        class="card content-card contact-card"
        :href="item.href"
      >
        <span class="contact-label">{{ item.label }}</span>
        <strong>{{ item.value }}</strong>
      </a>
    </div>
  </SectionBlock>
</template>

<script setup>
import SectionBlock from '../SectionBlock.vue'

defineProps({
  contact: {
    type: Object,
    required: true,
  },
})
</script>
