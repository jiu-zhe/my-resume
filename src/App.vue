<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import { navItems, resumeData } from './data/resume'

const theme = ref('light')

const isDark = computed(() => theme.value === 'dark')

const applyTheme = (value) => {
  document.documentElement.dataset.theme = value
}

const toggleTheme = () => {
  theme.value = isDark.value ? 'light' : 'dark'
}

const scrollToSection = (target) => {
  const element = document.getElementById(target)

  if (!element) {
    return
  }

  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  const savedTheme = window.localStorage.getItem('resume-theme')
  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.value = savedTheme || (preferredDark ? 'dark' : 'light')
  applyTheme(theme.value)
})

watch(theme, (value) => {
  applyTheme(value)
  window.localStorage.setItem('resume-theme', value)
})
</script>

<template>
  <div class="page-shell">
    <NavBar
      :name="resumeData.profile.name"
      :items="navItems"
      :is-dark="isDark"
      @navigate="scrollToSection"
      @toggle-theme="toggleTheme"
    />

    <main class="container main-content">
      <HeroSection :profile="resumeData.profile" @navigate="scrollToSection" />
      <AboutSection :about="resumeData.about" />
      <SkillsSection :skills="resumeData.skills" />
      <ProjectsSection :projects="resumeData.projects" />
      <ExperienceSection :experience="resumeData.experience" />
      <EducationSection :education="resumeData.education" />
      <ContactSection :contact="resumeData.contact" />
    </main>
  </div>
</template>
