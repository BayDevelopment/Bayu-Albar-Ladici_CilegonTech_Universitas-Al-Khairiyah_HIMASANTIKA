<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import HomeView from '@/components/HomeView.vue'
import Footer from '@/components/Footer.vue'

const isVisible = ref(false)

const checkScroll = () => {
  // Tombol muncul setelah melakukan scroll sedalam 300px
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <div class="relative flex min-h-screen flex-col overflow-x-hidden bg-white">
    <Navbar />
    <main class="flex-1">
      <HomeView />
    </main>
    <Footer />

    <!-- Tombol Back to Top -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <button
        v-show="isVisible"
        @click="scrollToTop"
        type="button"
        aria-label="Kembali ke atas"
        class="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#B8151B] text-white shadow-lg shadow-[#B8151B]/30 transition-all duration-200 hover:-translate-y-1 hover:bg-[#a01217] hover:shadow-[#B8151B]/50 focus:outline-none focus:ring-2 focus:ring-[#B8151B] focus:ring-offset-2 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </Transition>
  </div>
</template>