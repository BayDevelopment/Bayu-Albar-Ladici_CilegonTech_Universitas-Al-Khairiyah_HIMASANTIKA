<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="mb-4 inline-flex items-center gap-2 font-mono text-xs text-brand-green">
    <span aria-hidden="true">&gt;</span>
    <span class="tracking-wide">{{ text }}</span>
    <span class="h-1.5 w-1.5 animate-blink rounded-full bg-brand-yellow" aria-hidden="true" />
  </div>
</template>
