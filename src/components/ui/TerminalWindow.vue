<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface Line {
  prompt: boolean
  text: string
  color?: string
}

const script: Line[] = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'calon_mahasiswa@teknik-informatika', color: 'text-white/70' },
  { prompt: true, text: 'ls peminatan/' },
  {
    prompt: false,
    text: 'rekayasa-perangkat-lunak  ai-data-science  jaringan-siber  multimedia-game',
    color: 'text-brand-yellow',
  },
  { prompt: true, text: './cek-masa-depan.sh --run' },
  { prompt: false, text: '[====================] 100%', color: 'text-white/50' },
  { prompt: false, text: 'status: siap_bersaing_di_industri ✔', color: 'text-brand-green' },
]

const renderedLines = ref<{ prompt: boolean; text: string; color?: string; done: boolean }[]>([])
let timeouts: ReturnType<typeof setTimeout>[] = []

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function typeSequence() {
  if (prefersReducedMotion) {
    renderedLines.value = script.map((l) => ({ ...l, done: true }))
    return
  }

  let lineIndex = 0

  const typeLine = () => {
    if (lineIndex >= script.length) return
    const line = script[lineIndex]
    renderedLines.value.push({ ...line, done: false })
    const rowIndex = renderedLines.value.length - 1

    if (!line.prompt) {
      // Output lines appear instantly beneath a prompt
      renderedLines.value[rowIndex].done = true
      lineIndex += 1
      timeouts.push(setTimeout(typeLine, 260))
      return
    }

    let charIndex = 0
    const full = line.text
    const typeChar = () => {
      charIndex += 1
      renderedLines.value[rowIndex].text = full.slice(0, charIndex)
      if (charIndex < full.length) {
        timeouts.push(setTimeout(typeChar, 38))
      } else {
        renderedLines.value[rowIndex].done = true
        lineIndex += 1
        timeouts.push(setTimeout(typeLine, 320))
      }
    }
    renderedLines.value[rowIndex].text = ''
    typeChar()
  }

  typeLine()
}

onMounted(() => {
  typeSequence()
})

onUnmounted(() => {
  timeouts.forEach(clearTimeout)
})
</script>

<template>
  <div class="terminal-window w-full max-w-xl overflow-hidden font-mono text-sm">
    <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
      <span class="terminal-dot bg-brand-red" />
      <span class="terminal-dot bg-brand-yellow" />
      <span class="terminal-dot bg-brand-green" />
      <span class="ml-3 text-xs text-white/40">ti-terminal — zsh</span>
    </div>
    <div class="min-h-[260px] space-y-2 px-5 py-5">
      <div v-for="(line, i) in renderedLines" :key="i" :class="line.color ?? 'text-white'">
        <span v-if="line.prompt" class="text-brand-yellow">$&nbsp;</span>
        <span>{{ line.text }}</span>
        <span
          v-if="line.prompt && !line.done"
          class="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-brand-yellow"
        />
      </div>
    </div>
  </div>
</template>
