# Landing Page — S1 Teknik Informatika

Landing page kompetisi, dibangun dengan **Vue 3 (Composition API + TypeScript)**, **Vite**, dan
**Tailwind CSS v3**, dengan struktur komponen modular: `Navbar`, `HomeView`, `Footer`.

## Menjalankan Proyek

```bash
npm install
npm run dev       # dev server
npm run build     # build produksi (jalankan type-check + bundling)
npm run preview   # preview hasil build
npm run format    # rapikan kode dengan Prettier
```

## Apa yang Diperbaiki dari Rencana Awal

Rencana awal sudah solid dari sisi tooling dan palet warna, tapi berisiko terasa seperti
template generik (hero teks-tengah + 3 kartu fitur + CTA). Perubahan yang dilakukan:

1. **Hero jadi "thesis", bukan dekorasi.** Sisi kanan hero berisi jendela terminal animasi
   (`TerminalWindow.vue`) yang mengetik perintah `whoami`, `ls peminatan/`, hingga status
   `siap_bersaing_di_industri ✔`. Ini elemen tanda tangan halaman — literal menghubungkan visual
   dengan subjek "Informatika", bukan gradient generik.
2. **Aksen mono-font sebagai bahasa visual kedua.** JetBrains Mono dipakai konsisten untuk
   eyebrow section (`> mengapa.pilih_ti()`, `> ls peminatan/`, dst.), badge status footer, dan
   terminal — meniru vernakular command-line tanpa mengganti Poppins sebagai font utama sesuai
   brief.
3. **Titik kuning benar-benar berfungsi sebagai kursor.** Warna aksen `#F2A900` yang di brief
   ditujukan untuk "aksen titik logo" diimplementasikan sebagai kursor terminal yang berkedip —
   detail kecil yang menyatukan identitas brand dengan tema kode.
4. **Numbering hanya dipakai di tempat yang benar-benar berurutan.** Badge 01–04 hanya muncul di
   "Alur Pendaftaran" karena itu memang proses berurutan; bagian lain (fitur, peminatan,
   testimoni) memakai grid/kartu tanpa penomoran semu.
5. **Struktur komponen dipecah untuk kejelasan saat presentasi.** Selain 3 komponen inti sesuai
   brief, ditambahkan komponen kecil di `src/components/ui/` (`BaseButton`, `SectionEyebrow`,
   `FeatureCard`, `TrackCard`, `TestimonialCard`, `TerminalWindow`) plus tipe data terpusat di
   `src/types/content.ts` — memudahkan menjelaskan arsitektur saat sesi tanya-jawab dan
   menunjukkan kode yang benar-benar modular, bukan satu file raksasa.
6. **Aksesibilitas & motion dasar.** Fokus keyboard terlihat (`focus-visible`), animasi
   dihentikan otomatis jika `prefers-reduced-motion` aktif, dan semua CTA memakai elemen `<a>`
   semantik.

## Menambahkan Foto Kegiatan Asli

Section "Galeri Kegiatan" (`#galeri`) saat ini memakai kartu placeholder bergaya gradient brand
dengan label "Ganti dengan foto asli" — sengaja dibuat begitu (bukan foto stok acak) supaya jelas
mana yang perlu kamu ganti sebelum submit. Cara mengganti:

1. Taruh foto asli di `public/gallery/` (misalnya `public/gallery/hackathon.jpg`).
2. Buka `src/components/HomeView.vue`, cari array `galleryItems`, tambahkan properti `src`
   berisi path foto, contoh:
   ```ts
   { id: 'g2', caption: 'Hackathon Nasional 2025', category: 'Kompetisi', accent: 'yellow', src: '/gallery/hackathon.jpg' }
   ```
3. Di `src/components/ui/GalleryCarousel.vue`, dalam kartu (`data-card`), ganti blok gradient +
   ikon `PhotoIcon` dengan `<img :src="item.src" :alt="item.caption" class="h-full w-full object-cover" />`
   bila `item.src` tersedia, sambil tetap fallback ke placeholder jika kosong.

Carousel-nya bukan port dari OwlCarousel (yang berbasis jQuery dan kurang cocok dengan arsitektur
Vue 3), melainkan diimplementasikan native dengan Composition API: auto-scroll halus,
infinite-loop dua salinan data, jeda otomatis saat di-hover/disentuh/difokus, tombol prev/next,
dan otomatis nonaktif jika `prefers-reduced-motion` aktif.

## Section Baru: Visi & Misi

Section `#visi-misi` menampilkan Visi sebagai blok gaya "code comment" (konsisten dengan tema
terminal di hero) dan Misi sebagai daftar bernomor — penomoran di sini memang tepat karena Misi
adalah daftar poin komitmen yang berurutan. Edit teksnya langsung lewat variabel `visi` dan `misi`
di `src/components/HomeView.vue`.

## Struktur Folder


```
src/
├── components/
│   ├── Navbar.vue          # navigasi utama, responsif dengan menu mobile
│   ├── HomeView.vue         # menyusun seluruh section halaman
│   ├── Footer.vue           # info kontak & navigasi sekunder
│   └── ui/                  # komponen kecil yang dapat dipakai ulang
│       ├── BaseButton.vue
│       ├── SectionEyebrow.vue
│       ├── TerminalWindow.vue
│       ├── FeatureCard.vue
│       ├── TrackCard.vue
│       └── TestimonialCard.vue
├── types/content.ts         # kontrak TypeScript untuk semua data konten
├── style.css                 # Tailwind + utilitas global
└── main.ts / App.vue
```

## Palet & Tipografi (sesuai brief)

| Warna | Hex | Peran |
|---|---|---|
| Merah | `#DF1A22` | CTA utama, aksen teks |
| Kuning | `#F2A900` | Aksen titik/kursor, glow dekorasi |
| Hijau | `#00853F` | Navigasi sekunder, badge, hover |
| Hitam Pekat | `#111111` | Teks utama, latar footer |
| Putih | `#FFFFFF` | Latar utama & card |

Tipografi: **Poppins** (utama, sesuai brief) dipadukan dengan **JetBrains Mono** (aksen
command-line untuk eyebrow, badge status, dan terminal) agar identitas "Teknik Informatika"
terasa di detail tipografi, bukan cuma di nama program studi.
# Bayu-Albar-Ladici_CilegonTech_Universitas-Al-Khairiyah_HIMASANTIKA
