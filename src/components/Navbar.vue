<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import BaseButton from "@/components/ui/BaseButton.vue";
import SectionEyebrow from "@/components/ui/SectionEyebrow.vue";
import type { NavLink } from "@/types/content";

const links: NavLink[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Visi Misi", href: "#visi-misi" },
  { label: "Kurikulum", href: "#kurikulum" },
  { label: "Galeri", href: "#galeri" },
  { label: "Pendaftaran", href: "#pendaftaran" },
];

// Data Peminatan (Untuk Select di Form Register)
const tracks = [
  { code: "01_rpl", title: "Rekayasa Perangkat Lunak" },
  { code: "02_ai", title: "AI & Data Science" },
  { code: "03_sec", title: "Jaringan & Keamanan Siber" },
  { code: "04_mm", title: "Multimedia & Game" },
];

// State Scroll & Mobile Menu
const isOpen = ref(false);
const isScrolled = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 8;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

function closeMenu() {
  isOpen.value = false;
}

// ================= STATE MODAL POP-UP =================
const isModalOpen = ref(false);
const modalMode = ref<"register" | "login">("register");

const openModal = (mode: "register" | "login") => {
  modalMode.value = mode;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden"; // Kunci scroll layar
  closeMenu(); // Tutup menu mobile jika sedang terbuka
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = "auto"; // Kembalikan scroll
};
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="
      isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-white/0'
    "
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
      <a href="#beranda" class="flex items-center gap-2.5">
        <img
          src="/gallery/UMC-1.png"
          alt="Logo UMC"
          class="h-9 w-9 object-contain rounded-lg"
        />
        <span class="text-sm font-semibold leading-tight text-ink">
          Teknik<br class="hidden sm:block" />
          Informatika
        </span>
      </a>

      <!-- Desktop Nav Links -->
      <ul class="hidden items-center gap-8 lg:flex">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-ink/70 transition-colors hover:text-brand-green"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Desktop Auth Buttons -->
      <div class="hidden items-center gap-3 lg:flex">
        <button @click.prevent="openModal('login')" class="transition-transform active:scale-95">
          <BaseButton variant="ghost" class="!px-3 !py-2 text-brand-green">
            Masuk Portal
          </BaseButton>
        </button>
        <button @click.prevent="openModal('register')" class="transition-transform active:scale-95">
          <BaseButton variant="primary">
            Daftar Sekarang
          </BaseButton>
        </button>
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        type="button"
        class="rounded-lg p-2 text-ink lg:hidden"
        aria-label="Buka menu navigasi"
        @click="isOpen = !isOpen"
      >
        <Bars3Icon v-if="!isOpen" class="h-6 w-6" />
        <XMarkIcon v-else class="h-6 w-6" />
      </button>
    </nav>

    <!-- Mobile Nav Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="border-t border-black/5 bg-white px-6 pb-6 pt-4 lg:hidden">
        <ul class="flex flex-col gap-1">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-brand-green/5 hover:text-brand-green"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <div class="mt-4 flex flex-col gap-3">
          <button @click.prevent="openModal('login')" class="w-full text-left">
            <BaseButton variant="secondary" class="w-full justify-center">
              Masuk Portal
            </BaseButton>
          </button>
          <button @click.prevent="openModal('register')" class="w-full text-left">
            <BaseButton variant="primary" class="w-full justify-center">
              Daftar Sekarang
            </BaseButton>
          </button>
        </div>
      </div>
    </transition>
  </header>

  <!-- ============ MODAL POP-UP (LOGIN & REGISTRATION) ============ -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <div v-if="isModalOpen" class="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
        
        <!-- Backdrop Overlay -->
        <div 
          class="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity cursor-pointer" 
          @click="closeModal" 
        />

        <!-- Modal Container -->
        <div class="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0A101C] p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(0,0,0,0.6)] z-10">
          
          <!-- Ambient Orbs -->
          <div class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-red/10 blur-3xl" />
          <div class="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-brand-yellow/10 blur-3xl" />

          <!-- Close Button -->
          <button 
            @click="closeModal" 
            type="button" 
            class="absolute right-5 top-5 rounded-lg p-2 text-white/50 hover:bg-white/10 hover:text-white transition-all z-20"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Header -->
          <div class="mb-6">
            <SectionEyebrow :text="modalMode === 'register' ? 'auth.register()' : 'auth.login()'" />
            <h3 class="mt-2 text-2xl font-bold text-white tracking-tight">
              {{ modalMode === 'register' ? 'Pendaftaran Maba' : 'Portal Akademik' }}
            </h3>
            <p class="mt-1 text-sm text-white/60">
              {{ modalMode === 'register' ? 'Isi formulir untuk memulai karir digitalmu.' : 'Masuk menggunakan email yang terdaftar.' }}
            </p>
          </div>

          <!-- Tab Switcher -->
          <div class="mb-6 flex rounded-xl bg-white/5 p-1 border border-white/10">
            <button 
              type="button" 
              @click="modalMode = 'register'" 
              :class="modalMode === 'register' ? 'bg-brand-red text-white shadow-md' : 'text-white/50 hover:text-white hover:bg-white/5'" 
              class="flex-1 rounded-lg py-2.5 text-xs font-semibold transition-all duration-200"
            >
              Daftar Baru
            </button>
            <button 
              type="button" 
              @click="modalMode = 'login'" 
              :class="modalMode === 'login' ? 'bg-brand-red text-white shadow-md' : 'text-white/50 hover:text-white hover:bg-white/5'" 
              class="flex-1 rounded-lg py-2.5 text-xs font-semibold transition-all duration-200"
            >
              Masuk Portal
            </button>
          </div>

          <!-- Form Register -->
          <form v-if="modalMode === 'register'" @submit.prevent class="space-y-4 animate-fade-up animate-duration-300">
            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5">> Nama Lengkap</label>
              <input type="text" placeholder="Masukkan nama sesuai ijazah" class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-yellow focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-yellow" />
            </div>
            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5">> Email Aktif</label>
              <input type="email" placeholder="nama@email.com" class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-yellow focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-yellow" />
            </div>
            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5">> Kata Sandi</label>
              <input type="password" placeholder="Buat kata sandi yang kuat" class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-yellow focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-yellow" />
            </div>
            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5">> Pilihan Peminatan</label>
              <select class="w-full rounded-xl border border-white/10 bg-[#0A101C] px-4 py-3 text-sm text-white transition-all focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow appearance-none cursor-pointer">
                <option value="" disabled selected class="text-white/30">-- Pilih Jalur Spesialisasi --</option>
                <option v-for="track in tracks" :key="track.code" :value="track.code">{{ track.title }}</option>
              </select>
            </div>
            <div class="pt-3">
              <BaseButton variant="primary" class="w-full justify-center !py-3 font-semibold shadow-lg shadow-brand-yellow/20 hover:shadow-brand-yellow/40">
                Kirim Pendaftaran
              </BaseButton>
            </div>
          </form>

          <!-- Form Login -->
          <form v-if="modalMode === 'login'" @submit.prevent class="space-y-4 animate-fade-up animate-duration-300">
            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5">> Email Pengguna</label>
              <input type="email" placeholder="nama@email.com" class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-yellow focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-yellow" required />
            </div>
            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5">> Kata Sandi</label>
              <input type="password" placeholder="••••••••" class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-yellow focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-yellow" required />
            </div>
            <div class="flex items-center justify-end pt-1">
              <a href="#" class="text-xs font-medium text-brand-yellow/80 hover:text-brand-yellow hover:underline transition-colors">
                Lupa Kata Sandi?
              </a>
            </div>
            <div class="pt-3">
              <BaseButton variant="primary" class="w-full justify-center !py-3 font-semibold shadow-lg shadow-brand-yellow/20 hover:shadow-brand-yellow/40">
                Akses Dashboard
              </BaseButton>
            </div>
          </form>
          
        </div>
      </div>
    </Transition>
  </Teleport>
</template>