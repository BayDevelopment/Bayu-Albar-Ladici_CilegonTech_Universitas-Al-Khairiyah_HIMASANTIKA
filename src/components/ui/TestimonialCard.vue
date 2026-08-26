<script setup lang="ts">
defineProps<{
  name: string
  role: string
  quote: string
  achievement?: string
}>()
</script>

<template>
  <figure class="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
    <span
      v-if="achievement"
      class="mb-4 inline-flex w-fit items-center rounded-full bg-brand-green/10 px-3 py-1 text-xs font-medium text-brand-green"
    >
      {{ achievement }}
    </span>
    <blockquote class="flex-1 text-sm leading-relaxed text-ink/70">"{{ quote }}"</blockquote>
    <figcaption class="mt-5 border-t border-black/5 pt-4">
      <p class="text-sm font-semibold text-ink">{{ name }}</p>
      <p class="text-xs text-ink/50">{{ role }}</p>
    </figcaption>
  </figure>
</template>
