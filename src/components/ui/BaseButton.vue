<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    href?: string
  }>(),
  { variant: 'primary', href: undefined },
)

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2'

const variants: Record<string, string> = {
  primary:
    'bg-brand-red text-white shadow-lg shadow-brand-red/25 hover:bg-brand-red-dark hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'border-2 border-ink text-ink hover:border-brand-green hover:text-brand-green hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-ink hover:text-brand-green',
}
</script>

<template>
  <a :href="href ?? '#'" :class="[base, variants[variant]]">
    <slot />
  </a>
</template>
