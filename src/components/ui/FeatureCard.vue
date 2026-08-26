<script setup lang="ts">
import { computed } from 'vue'
import * as OutlineIcons from '@heroicons/vue/24/outline'

const props = defineProps<{
  title: string
  description: string
  icon: string
}>()

const IconComponent = computed(() => {
  const icons = OutlineIcons as unknown as Record<string, object>
  return icons[props.icon]
})
</script>

<template>
  <div
    class="group rounded-2xl border border-black/5 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-xl hover:shadow-brand-green/10"
  >
    <div
      class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white"
    >
      <component :is="IconComponent" class="h-6 w-6" aria-hidden="true" />
    </div>
    <h3 class="mb-2 text-lg font-semibold text-ink">{{ title }}</h3>
    <p class="text-sm leading-relaxed text-ink/60">{{ description }}</p>
  </div>
</template>
