<template>
  <SectionBlock id="about" :title="about.title" eyebrow="About">
    <div class="content-grid two-columns">
      <div class="card content-card prose-block">
        <p v-for="paragraph in about.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
      <div class="card content-card">
        <h3>我的特点</h3>
        <ul class="bullet-list">
          <li v-for="item in about.highlights" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </SectionBlock>
</template>

<script setup>
import SectionBlock from '../SectionBlock.vue'

defineProps({
  about: {
    type: Object,
    required: true,
  },
})
</script>
