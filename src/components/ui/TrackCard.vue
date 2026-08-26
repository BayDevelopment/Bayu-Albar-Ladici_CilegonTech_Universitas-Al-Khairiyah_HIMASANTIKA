<script setup lang="ts">
defineProps<{
  code: string
  title: string
  description: string
  tags: string[]
}>()
</script>

<template>
  <div
    class="relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink p-7 text-white transition-transform duration-300 hover:-translate-y-1"
  >
    <div
      class="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-yellow/10 blur-2xl"
    />
    <div>
      <span class="font-mono text-xs text-brand-yellow">{{ code }}</span>
      <h3 class="mb-2 mt-2 text-xl font-semibold">{{ title }}</h3>
      <p class="mb-5 text-sm leading-relaxed text-white/60">{{ description }}</p>
    </div>
    
    <!-- Class mt-auto mengunci posisi tag di paling bawah -->
    <div class="mt-auto flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>