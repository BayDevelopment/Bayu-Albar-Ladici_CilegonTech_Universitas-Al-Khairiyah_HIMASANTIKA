<script setup lang="ts">
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";

const currentYear = new Date().getFullYear();

const navColumns = [
  {
    title: "Navigasi",
    links: [
      { label: "Beranda", href: "#beranda" },
      { label: "Tentang Prodi", href: "#tentang" },
      { label: "Kurikulum", href: "#kurikulum" },
      { label: "Prestasi", href: "#prestasi" },
    ],
  },
  {
    title: "Peminatan",
    links: [
      { label: "Rekayasa Perangkat Lunak", href: "#kurikulum" },
      { label: "AI & Data Science", href: "#kurikulum" },
      { label: "Jaringan & Keamanan Siber", href: "#kurikulum" },
      { label: "Multimedia & Game", href: "#kurikulum" },
    ],
  },
];
</script>

<template>
  <footer class="bg-ink text-white">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div class="lg:col-span-2">
          <a href="#beranda" class="flex items-center gap-2.5">
            <span
              class="relative flex h-9 w-9 items-center justify-center rounded-lg p-1 overflow-hidden"
            >
              <!-- Logo gambar menggantikan teks TI -->
              <img
                src="/gallery/UMC-1.png"
                alt="Logo UMC"
                class="h-full w-full object-contain"
              />
              <span
                class="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-brand-yellow ring-2 ring-ink"
              />
            </span>
            <span class="text-sm font-semibold text-white">
              Teknik Informatika
            </span>
          </a>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
            Program Studi S1 Teknik Informatika menyiapkan lulusan yang siap
            merancang, membangun, dan memimpin solusi digital — dari kelas
            hingga industri.
          </p>
        </div>

        <div v-for="col in navColumns" :key="col.title">
          <h4 class="mb-4 text-sm font-semibold text-white">{{ col.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in col.links" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-white/50 transition-colors hover:text-brand-yellow"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-4 text-sm font-semibold text-white">Kontak</h4>
          <ul class="space-y-3 text-sm text-white/50">
            <li class="flex gap-2.5">
              <MapPinIcon class="h-5 w-5 shrink-0 text-brand-green" />
              <span> Kampus Utama Jl. Watubelah No. 40 </span>
            </li>
            <li class="flex gap-2.5">
              <EnvelopeIcon class="h-5 w-5 shrink-0 text-brand-green" />
              <span>umc.ac.id</span>
            </li>
            <li class="flex gap-2.5">
              <PhoneIcon class="h-5 w-5 shrink-0 text-brand-green" />
              <span>(0231) 209608</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row"
      >
        <p>
          &copy; {{ currentYear }} Program Studi S1 Teknik Informatika. Seluruh
          hak cipta dilindungi.
        </p>
        <p class="font-mono">
          status: <span class="text-brand-green">terakreditasi_unggul</span>
        </p>
      </div>
    </div>
  </footer>
</template>
