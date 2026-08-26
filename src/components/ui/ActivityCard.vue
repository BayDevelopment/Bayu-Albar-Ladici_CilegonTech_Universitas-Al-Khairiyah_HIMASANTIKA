<script setup lang="ts">
defineProps<{
  tag: string
  title: string
  description: string
  date?: string
}>()
</script>

<template>
  <div class="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7">
    <div class="mb-4 flex items-center justify-between gap-3">
      <span
        class="inline-flex w-fit items-center rounded-full bg-brand-red/10 px-3 py-1 text-xs font-medium text-brand-red"
      >
        {{ tag }}
      </span>
      <span v-if="date" class="font-mono text-[11px] text-ink/40">{{ date }}</span>
    </div>
    <h3 class="mb-2 text-lg font-semibold leading-snug text-ink">{{ title }}</h3>
    <p class="text-sm leading-relaxed text-ink/60">{{ description }}</p>
  </div>
</template>