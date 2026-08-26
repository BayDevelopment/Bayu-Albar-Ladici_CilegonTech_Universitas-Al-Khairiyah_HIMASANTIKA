<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import type { GalleryItem } from '@/types/content'

const props = defineProps<{
  items: GalleryItem[]
}>()

const accentClasses: Record<GalleryItem['accent'], string> = {
  red: 'from-brand-red/90 to-brand-red/60',
  yellow: 'from-brand-yellow/90 to-brand-yellow/60',
  green: 'from-brand-green/90 to-brand-green/60',
  ink: 'from-ink/90 to-ink/60',
}

// Track is duplicated so the loop can jump back invisibly once the first
// copy has fully scrolled past — this is what creates the seamless
// left-to-right auto-scroll, without any external carousel library.
const track = [...props.items, ...props.items]

const scrollerRef = ref<HTMLDivElement | null>(null)
let autoplayId: ReturnType<typeof setInterval> | null = null
const isPaused = ref(false)

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function step(distance: number) {
  const el = scrollerRef.value
  if (!el) return
  el.scrollBy({ left: distance, behavior: 'smooth' })
}

function cardStep() {
  const el = scrollerRef.value
  if (!el) return 0
  const card = el.querySelector<HTMLElement>('[data-card]')
  return card ? card.offsetWidth + 20 : 280
}

function next() {
  step(cardStep())
}

function prev() {
  step(-cardStep())
}

function loopIfNeeded() {
  const el = scrollerRef.value
  if (!el) return
  const halfway = el.scrollWidth / 2
  if (el.scrollLeft >= halfway) {
    el.scrollLeft -= halfway
  }
}

function startAutoplay() {
  if (prefersReducedMotion || autoplayId) return
  autoplayId = setInterval(() => {
    if (isPaused.value) return
    const el = scrollerRef.value
    if (!el) return
    el.scrollBy({ left: 1.1, behavior: 'auto' })
    loopIfNeeded()
  }, 16)
}

function stopAutoplay() {
  if (autoplayId) {
    clearInterval(autoplayId)
    autoplayId = null
  }
}

onMounted(startAutoplay)
onUnmounted(stopAutoplay)
</script>

<template>
  <div
    class="relative group/carousel"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
    @focusin="isPaused = true"
    @focusout="isPaused = false"
  >
    <!-- BUNGKUSAN AREA SCROLL -->
    <div
      ref="scrollerRef"
      class="flex gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      @touchstart="isPaused = true"
      @touchend="isPaused = false"
    >
      <div
        v-for="(item, i) in track"
        :key="`${item.id}-${i}`"
        data-card
        class="relative aspect-[4/5] w-64 shrink-0 overflow-hidden rounded-2xl sm:w-72 group"
      >
        <!-- 1. INI DIA TAG FOTONYA -->
        <img 
          :src="item.src" 
          :alt="item.caption" 
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />

        <!-- 2. Gradien warna aksen kita jadikan efek multiply/overlay transparan -->
        <div :class="['absolute inset-0 bg-gradient-to-br opacity-40 mix-blend-multiply', accentClasses[item.accent]]" />
        
        <!-- 3. Gradien gelap dari bawah ke atas agar teks warna putih tetap terbaca -->
        <div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
        
        <!-- 4. Konten Teks -->
        <div class="absolute inset-0 flex flex-col justify-end gap-1 p-6 text-white">
          <p class="font-mono text-[11px] uppercase tracking-wider text-brand-yellow font-bold">
            {{ item.category }}
          </p>
          <p class="text-base font-semibold leading-snug">{{ item.caption }}</p>
        </div>
      </div>
    </div> <!-- ✅ INI TAG PENUTUP YANG TADI HILANG -->

    <!-- Tombol Prev -->
    <button
      type="button"
      aria-label="Foto sebelumnya"
      class="absolute -left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-ink shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 sm:flex opacity-0 group-hover/carousel:opacity-100 duration-300"
      @click="prev"
    >
      <ChevronLeftIcon class="h-5 w-5" />
    </button>
    
    <!-- Tombol Next -->
    <button
      type="button"
      aria-label="Foto berikutnya"
      class="absolute -right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-ink shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 sm:flex opacity-0 group-hover/carousel:opacity-100 duration-300"
      @click="next"
    >
      <ChevronRightIcon class="h-5 w-5" />
    </button>
  </div>
</template>