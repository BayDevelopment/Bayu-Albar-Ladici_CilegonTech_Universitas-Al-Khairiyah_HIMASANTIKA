<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import HomeView from '@/components/HomeView.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col overflow-x-hidden bg-white">
    <Navbar />
    <main class="flex-1">
      <HomeView />
    </main>
    <Footer />
  </div>
</template>
