<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import SectionEyebrow from "@/components/ui/SectionEyebrow.vue";
import TerminalWindow from "@/components/ui/TerminalWindow.vue";
import FeatureCard from "@/components/ui/FeatureCard.vue";
import TrackCard from "@/components/ui/TrackCard.vue";
import TestimonialCard from "@/components/ui/TestimonialCard.vue";
import GalleryCarousel from "@/components/ui/GalleryCarousel.vue";
import ActivityCard from "@/components/ui/ActivityCard.vue";
import { UserPlus, LogIn } from "lucide-vue-next";
import type {
  StatItem,
  FeatureItem,
  TrackItem,
  RegistrationStep,
  Testimonial,
  MissionPoint,
  GalleryItem,
  ActivityItem,
} from "@/types/content";

// State Modal Pop-up
const isModalOpen = ref(false);
const modalMode = ref<"register" | "login">("register");

const openModal = (mode: "register" | "login") => {
  modalMode.value = mode;
  isModalOpen.value = true;
  // Mencegah scroll pada body saat modal terbuka
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isModalOpen.value = false;
  // Mengembalikan scroll pada body saat modal ditutup
  document.body.style.overflow = "auto";
};

const stats: StatItem[] = [
  { value: "A", label: "Akreditasi BAN-PT" },
  { value: "92%", label: "Lulusan terserap < 6 bulan" },
  { value: "40+", label: "Mitra industri aktif" },
  { value: "15", label: "Dosen praktisi bersertifikat" },
];

const tentang =
  "Program Studi S1 Teknik Informatika Universitas Muhammadiyah Cirebon (UMC) adalah institusi pendidikan tinggi yang berdedikasi untuk mencetak lulusan unggul, inovatif, dan berakhlak mulia di bidang teknologi informasi. Kami membekali mahasiswa dengan keahlian praktis dan teoretis yang relevan dengan kebutuhan industri digital masa kini.";

const visi =
  "Menjadi Program Studi yang Unggul dalam mencetak Tenaga Terampil yang Islami dan Mandiri di Wilayah Jawa Barat pada tahun 2024.";

const misi: MissionPoint[] = [
  {
    title: "Penanaman Nilai Islam",
    description:
      "Menanamkan nilai-nilai Islam kepada seluruh civitas akademika Program Studi S1 Teknik Informatika secara komprehensif.",
  },
  {
    title: "Pendidikan Berbasis Kompetensi",
    description:
      "Menyelenggarakan pendidikan dan pengajaran yang berorientasi pada kompetensi bidang rekayasa teknologi sesuai perkembangan kebutuhan dunia usaha dan industri.",
  },
  {
    title: "Penelitian & Kerja Sama",
    description:
      "Menyelenggarakan kegiatan penelitian dalam bidang rekayasa teknologi melalui kerja sama dengan pihak industri dan instansi pemerintahan, baik dalam maupun luar negeri.",
  },
  {
    title: "Pengabdian Masyarakat",
    description:
      "Menyelenggarakan kegiatan pengabdian kepada masyarakat dalam bidang rekayasa teknologi.",
  },
  {
    title: "Semangat Kewirausahaan",
    description:
      "Menumbuhkembangkan sikap kewirausahaan dalam bidang rekayasa teknologi di kalangan civitas akademika Program Studi S1 Teknik Informatika.",
  },
];

const activities: ActivityItem[] = [
  {
    tag: "Pengabdian Masyarakat",
    title: "Aksi Nyata Pengabdian Masyarakat",
    description:
      "Mahasiswa dan dosen berkolaborasi dalam program tingkat nasional untuk mendukung pembangunan daerah, salah satunya melalui pemetaan potensi Desa Cikondang menyongsong Indonesia Emas 2045. Program ini melatih kemandirian dan keterampilan mahasiswa di lapangan kerja nyata.",
  },
  {
    tag: "Seminar Nasional",
    title: "Penguatan Peran Desa dalam Ketahanan Pangan",
    description:
      'Prodi turut andil dalam penyelenggaraan diskusi strategis, seperti Seminar Nasional "Penguatan Peran Desa Dalam Mewujudkan Ketahanan Pangan Nasional", yang melibatkan Kepala Program Studi Teknik Informatika sebagai narasumber.',
    date: "21 Agustus 2026",
  },
  {
    tag: "Workshop & Kemitraan",
    title: "Workshop Machine Learning dan AI yang Beretika",
    description:
      "Membekali mahasiswa dengan perkembangan teknologi cerdas terkini. Agenda ini dirangkaikan dengan penandatanganan Memorandum of Understanding (MoU) antara Universitas Muhammadiyah Cirebon dengan KPU Kabupaten Cirebon.",
  },
];

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    caption: "Laboratorium Komputer",
    category: "Fasilitas",
    accent: "green",
    src: "/gallery/lab-komputer.jpg",
  },
  {
    id: "g2",
    caption: "Praktik & Ujian Berbasis Laptop",
    category: "Akademik",
    accent: "red",
    src: "/gallery/ujian-praktik-laptop.jpg",
  },
  {
    id: "g3",
    caption: "Pembelajaran Interaktif di Kelas",
    category: "Kelas",
    accent: "yellow",
    src: "/gallery/kelas-interaktif.jpg",
  },
  {
    id: "g4",
    caption: "Praktik Jaringan Komputer",
    category: "Laboratorium",
    accent: "ink",
    src: "/gallery/praktik-jaringan.jpg",
  },
  {
    id: "g5",
    caption: "Ujian Tengah Semester",
    category: "Akademik",
    accent: "red",
    src: "/gallery/ujian-tengah-semester.jpg",
  },
  {
    id: "g6",
    caption: "Seminar Nasional & Workshop AI",
    category: "Kegiatan Ilmiah",
    accent: "green",
    src: "/gallery/seminar-nasional-ai.jpg",
  },
];

const facilities: FeatureItem[] = [
  {
    icon: "ComputerDesktopIcon",
    title: "Laboratorium Komputer",
    description:
      "Fasilitas lab yang dirancang khusus untuk praktik pemrograman, rekayasa perangkat lunak, dan pengolahan data.",
  },
  {
    icon: "TvIcon",
    title: "Ruang Kelas Interaktif",
    description:
      "Ruang kelas yang memadai dan kondusif, dilengkapi pendingin ruangan (AC) serta proyektor/layar pintar (smartboard) untuk mendukung presentasi dan pengajaran visual.",
  },
  {
    icon: "WifiIcon",
    title: "Ruang Praktik Jaringan",
    description:
      "Area pembelajaran bagi mahasiswa untuk melakukan praktik perakitan hardware dan instalasi infrastruktur jaringan komputer secara langsung.",
  },
];

const tracks: TrackItem[] = [
  {
    code: "01_rpl",
    title: "Rekayasa Perangkat Lunak",
    description:
      "Merancang dan membangun aplikasi web, mobile, hingga sistem enterprise berskala besar.",
    tags: ["Web Dev", "Mobile Dev", "System Design"],
  },
  {
    code: "02_ai",
    title: "AI & Data Science",
    description:
      "Mengolah data menjadi keputusan cerdas lewat machine learning dan analitik prediktif.",
    tags: ["Machine Learning", "Big Data", "NLP"],
  },
  {
    code: "03_sec",
    title: "Jaringan & Keamanan Siber",
    description:
      "Merancang infrastruktur jaringan yang andal serta mempertahankannya dari ancaman siber.",
    tags: ["Network", "Cyber Security", "Cloud"],
  },
  {
    code: "04_mm",
    title: "Multimedia & Game",
    description:
      "Menciptakan pengalaman interaktif lewat pengembangan game dan teknologi immersive.",
    tags: ["Game Dev", "AR/VR", "UI/UX"],
  },
];

const steps: RegistrationStep[] = [
  {
    step: 1,
    title: "Isi Formulir",
    description:
      "Lengkapi data diri dan pilihan peminatan pada portal pendaftaran online.",
  },
  {
    step: 2,
    title: "Unggah Berkas",
    description:
      "Kirim dokumen akademik dan identitas sesuai ketentuan yang berlaku.",
  },
  {
    step: 3,
    title: "Tes Seleksi",
    description:
      "Ikuti tes potensi akademik dan wawancara minat terhadap bidang informatika.",
  },
  {
    step: 4,
    title: "Pengumuman",
    description:
      "Hasil seleksi diumumkan melalui portal dan email resmi kampus.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Raka Pratama",
    role: "Alumni 2023 — Software Engineer",
    quote:
      "Proyek kolaboratif di kelas RPL membentuk cara saya berpikir sistematis. Enam bulan setelah lulus saya sudah bekerja di startup teknologi.",
    achievement: "Juara 1 Hackathon Nasional",
  },
  {
    name: "Nadia Salsabila",
    role: "Mahasiswa Tingkat Akhir",
    quote:
      "Peminatan AI & Data Science membuka mata saya pada riset terapan. Dosen selalu terbuka membimbing di luar jam kelas.",
    achievement: "Publikasi Jurnal Internasional",
  },
  {
    name: "Fajar Nugroho",
    role: "Alumni 2022 — Cyber Security Analyst",
    quote:
      "Lab keamanan siber di kampus setara dengan lingkungan kerja nyata. Sertifikasi yang saya dapat langsung diakui perusahaan.",
    achievement: "Sertifikasi CEH",
  },
];
</script>

<template>
  <!-- ============ HERO ============ -->
  <section id="beranda" class="relative overflow-hidden bg-white">
    <div
      class="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-glow-yellow animate-float-y"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-glow-red animate-float-y-reverse"
      aria-hidden="true"
    />

    <div
      class="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28"
    >
      <div class="animate-fade-up">
        <SectionEyebrow text="program-studi --init" />
        <h1
          class="text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
        >
          Tulis Baris Kode Pertama Menuju
          <span class="relative inline-block text-brand-red">
            Karier Digitalmu
            <svg
              class="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 5 Q50 0 100 5 T200 5"
                stroke="#F2A900"
                stroke-width="4"
                fill="none"
              />
            </svg>
          </span>
        </h1>
        <p
          class="mt-6 max-w-lg text-base leading-relaxed text-ink/60 sm:text-lg"
        >
          S1 Teknik Informatika membekalimu dengan fondasi rekayasa perangkat
          lunak, data, dan kecerdasan buatan — dari ruang kelas langsung ke
          industri.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            @click.prevent="openModal('register')"
            class="group relative inline-block text-left transition-transform active:scale-95 w-full sm:w-auto"
          >
            <BaseButton
              variant="primary"
              class="w-full flex items-center justify-center gap-2"
            >
              <UserPlus
                class="h-4 w-4 transition-transform group-hover:scale-110"
              />
              <span>Daftar Sekarang</span>
            </BaseButton>
          </button>

          <button
            @click.prevent="openModal('login')"
            class="group relative inline-block text-left transition-transform active:scale-95 w-full sm:w-auto"
          >
            <BaseButton
              variant="secondary"
              class="w-full flex items-center justify-center gap-2"
            >
              <LogIn
                class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
              <span>Masuk Portal</span>
            </BaseButton>
          </button>
        </div>
      </div>

      <div class="flex justify-center lg:justify-end">
        <div class="animate-float">
          <TerminalWindow />
        </div>
      </div>
    </div>
  </section>

  <!-- ============ STATS ============ -->
  <section class="border-black/5 bg-white relative overflow-hidden">
    <div
      class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4 lg:px-8"
    >
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="text-center lg:text-left transition-transform duration-300 hover:-translate-y-1"
      >
        <p class="text-3xl font-bold text-ink sm:text-4xl">{{ stat.value }}</p>
        <p class="mt-1 text-sm text-ink/50">{{ stat.label }}</p>
      </div>
    </div>
  </section>

  <!-- ============ TENTANG ============ -->
  <section id="tentang" class="relative mx-auto max-w-7xl px-6 pt-24 lg:px-8">
    <div
      class="pointer-events-none absolute -right-16 -top-10 h-56 w-56 rounded-full bg-glow-red animate-float-y"
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-2xl text-center">
      <SectionEyebrow text="cat tentang.md" />
      <h2 class="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Tentang Program Studi
      </h2>
      <p class="mt-5 text-base leading-relaxed text-ink/60">{{ tentang }}</p>
    </div>
  </section>

  <!-- ============ VISI & MISI ============ -->
  <section id="visi-misi" class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div
      class="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-glow-yellow animate-float-y-reverse"
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-2xl text-center">
      <SectionEyebrow text="cat visi-misi.md" />
      <h2 class="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Visi &amp; Misi
      </h2>
    </div>

    <div
      class="relative mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5 items-start"
    >
      <div
        class="relative overflow-hidden rounded-2xl bg-ink p-8 text-white lg:col-span-2 lg:sticky lg:top-28 shadow-xl transition-all duration-500 hover:shadow-2xl"
      >
        <div
          class="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-red/20 blur-3xl animate-pulse-slow"
          aria-hidden="true"
        />
        <p class="font-mono text-xs text-white/40">/**</p>
        <p class="font-mono text-xs text-brand-yellow">* Visi Program Studi</p>
        <p class="font-mono text-xs text-white/40 mb-6">*/</p>
        <p class="text-lg font-medium leading-relaxed text-white/90">
          {{ visi }}
        </p>
      </div>

      <div class="flex flex-col gap-4 lg:col-span-3">
        <div
          v-for="(item, i) in misi"
          :key="item.title"
          class="flex gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
        >
          <span
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 font-mono text-xs font-semibold text-brand-green"
          >
            {{ String(i + 1).padStart(2, "0") }}
          </span>
          <div>
            <h3 class="text-base font-semibold text-ink">{{ item.title }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-ink/60">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ FASILITAS AKADEMIK ============ -->
  <section id="fasilitas" class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div
      class="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-glow-yellow opacity-40 animate-float-y"
      aria-hidden="true"
    />
    <div class="relative z-10 mx-auto max-w-2xl text-center">
      <SectionEyebrow text="ls fasilitas/" />
      <h2 class="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Fasilitas Akademik
      </h2>
      <p class="mt-4 text-ink/60">
        Sarana yang memadai untuk menunjang kegiatan belajar mengajar
        berorientasi kompetensi rekayasa teknologi.
      </p>
    </div>

    <div class="relative z-10 mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div
        v-for="(facility, idx) in facilities"
        :key="facility.title"
        class="transition-all duration-300 hover:-translate-y-2"
        :class="idx % 2 === 1 ? 'lg:-translate-y-2' : ''"
      >
        <FeatureCard
          :title="facility.title"
          :description="facility.description"
          :icon="facility.icon"
        />
      </div>
    </div>
  </section>

  <!-- ============ PENGABDIAN, KOLABORASI & KEGIATAN ILMIAH ============ -->
  <section
    id="kegiatan-ilmiah"
    class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8"
  >
    <div
      class="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-glow-red opacity-50 animate-float-y-reverse"
      aria-hidden="true"
    />
    <div class="relative z-10 mx-auto max-w-2xl text-center">
      <SectionEyebrow text="cat kegiatan.log" />
      <h2 class="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Pengabdian, Kolaborasi &amp; Kegiatan Ilmiah
      </h2>
      <p class="mt-4 text-ink/60">
        Sivitas akademika secara aktif terjun langsung membawa solusi teknologi
        ke tengah masyarakat.
      </p>
    </div>

    <div class="relative z-10 mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div
        v-for="item in activities"
        :key="item.title"
        class="transition-all duration-300 hover:-translate-y-2"
      >
        <ActivityCard
          :tag="item.tag"
          :title="item.title"
          :description="item.description"
          :date="item.date"
        />
      </div>
    </div>
  </section>

  <!-- ============ KURIKULUM / TRACKS ============ -->
  <section
    id="kurikulum"
    class="relative overflow-hidden bg-slate-50/50 border-y border-black/5 py-24"
  >
    <div
      class="absolute inset-0 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div
        class="animate-scan-wave absolute h-[150%] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-brand-yellow/15 to-transparent blur-3xl"
      ></div>
      <div
        class="animate-scan-wave absolute h-[150%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-brand-red/10 to-transparent blur-3xl"
        style="animation-delay: 2.5s; animation-duration: 12s"
      ></div>
    </div>
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]"
      aria-hidden="true"
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <SectionEyebrow text="ls peminatan/" />
        <h2 class="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Empat Jalur Peminatan, Satu Fondasi Rekayasa
        </h2>
        <p class="mt-4 text-ink/60">
          Pilih arah spesialisasi sejak semester lanjut, dibimbing dosen dengan
          pengalaman industri yang relevan.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="track in tracks"
          :key="track.code"
          class="flex transition-transform duration-300 hover:-translate-y-2"
        >
          <TrackCard
            :code="track.code"
            :title="track.title"
            :description="track.description"
            :tags="track.tags"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ============ ALUR PENDAFTARAN ============ -->
  <section
    id="pendaftaran"
    class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8"
  >
    <div class="mx-auto max-w-2xl text-center">
      <SectionEyebrow text="alur.pendaftaran" />
      <h2 class="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Empat Langkah Menuju Kelas Perdanamu
      </h2>
    </div>

    <div
      class="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
    >
      <div
        class="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-brand-green/0 via-brand-green/40 to-brand-green/0 animate-pulse-slow lg:block"
        aria-hidden="true"
      />
      <div
        v-for="item in steps"
        :key="item.step"
        class="relative text-center group"
      >
        <div
          class="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink font-mono text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-red shadow-md"
        >
          {{ String(item.step).padStart(2, "0") }}
        </div>
        <h3
          class="mt-5 text-base font-semibold text-ink transition-colors duration-200 group-hover:text-brand-red"
        >
          {{ item.title }}
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-ink/55">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>

  <!-- ============ TESTIMONI / PRESTASI ============ -->
  <section
    id="prestasi"
    class="relative overflow-hidden bg-slate-50/70 border-y border-black/5 py-24"
  >
    <div
      class="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-glow-yellow opacity-70 animate-float-y"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-glow-red opacity-50 animate-float-y-reverse"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-4 -top-10 select-none font-mono text-[16rem] font-bold leading-none text-ink/[0.03]"
      aria-hidden="true"
    >
      “
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <div class="inline-flex items-center gap-2">
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75"
            ></span>
            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-brand-green"
            ></span>
          </span>
          <SectionEyebrow text="cat prestasi.log --verified" />
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Cerita Nyata dari Mahasiswa &amp; Alumni
        </h2>
        <p class="mt-4 text-base text-ink/60">
          Jejak langkah rekam jejak alumni di industri teknologi dan kompetisi
          tingkat nasional.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 items-center">
        <div
          v-for="(t, index) in testimonials"
          :key="t.name"
          class="transition-all duration-300 hover:-translate-y-2"
          :class="
            index === 1 ? 'md:-translate-y-3 md:shadow-lg rounded-2xl' : ''
          "
        >
          <TestimonialCard
            :name="t.name"
            :role="t.role"
            :quote="t.quote"
            :achievement="t.achievement"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ============ GALERI KEGIATAN ============ -->
  <section id="galeri" class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div
      class="pointer-events-none absolute left-10 bottom-10 h-64 w-64 rounded-full bg-glow-yellow opacity-40 animate-float-y"
      aria-hidden="true"
    />
    <div class="relative z-10 mx-auto max-w-2xl text-center">
      <SectionEyebrow text="ls -la galeri/kegiatan" />
      <h2 class="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Momen di Kampus Kami
      </h2>
      <p class="mt-4 text-ink/60">
        Sekilas kegiatan akademik, kompetisi, dan organisasi mahasiswa Teknik
        Informatika.
      </p>
    </div>
    <div class="relative z-10 mt-14">
      <GalleryCarousel :items="galleryItems" />
    </div>
  </section>

  <!-- ============ CTA AKHIR ============ -->
  <section class="relative overflow-hidden bg-ink py-24">
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-glow-yellow animate-float-y opacity-80"
      aria-hidden="true"
    />
    <div class="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
      <SectionEyebrow text="git commit -m 'mulai_masa_depan'" />
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Siap Menulis Masa Depanmu di Dunia Teknologi?
      </h2>
      <p class="mt-4 text-white/60">
        Pendaftaran gelombang berjalan dibuka terbatas. Amankan kursimu di S1
        Teknik Informatika sekarang.
      </p>

      <div
        class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <button
          @click.prevent="openModal('register')"
          class="group transition-transform active:scale-95 w-full sm:w-auto"
        >
          <BaseButton
            variant="primary"
            class="w-full flex items-center justify-center gap-2"
          >
            <UserPlus
              class="h-4 w-4 transition-transform group-hover:scale-110"
            />
            <span>Daftar Sekarang</span>
          </BaseButton>
        </button>
        <button
          @click.prevent="openModal('login')"
          class="group transition-transform active:scale-95 w-full sm:w-auto"
        >
          <BaseButton
            variant="secondary"
            class="w-full justify-center flex items-center gap-2 !border-white/30 !text-white hover:!border-brand-yellow hover:!text-brand-yellow"
          >
            <LogIn
              class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            />
            <span>Masuk Portal</span>
          </BaseButton>
        </button>
      </div>
    </div>
  </section>

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
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      >
        <!-- Backdrop Overlay (Gelap + Blur) -->
        <div
          class="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity cursor-pointer"
          @click="closeModal"
        />

        <!-- Modal Container (Desain Premium Dark Theme) -->
        <div
          class="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0A101C] p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(0,0,0,0.6)] z-10"
        >
          <!-- Ambient Orbs dalam Modal -->
          <div
            class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-red/10 blur-3xl"
          />
          <div
            class="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-brand-yellow/10 blur-3xl"
          />

          <!-- Tombol Close (X) -->
          <button
            @click="closeModal"
            type="button"
            class="absolute right-5 top-5 rounded-lg p-2 text-white/50 hover:bg-white/10 hover:text-white transition-all z-20"
          >
            <svg
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Header Modal -->
          <div class="mb-6">
            <SectionEyebrow
              :text="
                modalMode === 'register' ? 'auth.register()' : 'auth.login()'
              "
            />
            <h3 class="mt-2 text-2xl font-bold text-white tracking-tight">
              {{
                modalMode === "register"
                  ? "Pendaftaran Maba"
                  : "Portal Akademik"
              }}
            </h3>
            <p class="mt-1 text-sm text-white/60">
              {{
                modalMode === "register"
                  ? "Isi formulir untuk memulai karir digitalmu."
                  : "Masuk menggunakan email yang terdaftar."
              }}
            </p>
          </div>

          <!-- Tab Switcher (Daftar / Masuk) -->
          <div
            class="mb-6 flex rounded-xl bg-white/5 p-1 border border-white/10"
          >
            <button
              type="button"
              @click="modalMode = 'register'"
              :class="
                modalMode === 'register'
                  ? 'bg-brand-red text-white shadow-md'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              "
              class="flex-1 rounded-lg py-2.5 text-xs font-semibold transition-all duration-200"
            >
              Daftar Baru
            </button>
            <button
              type="button"
              @click="modalMode = 'login'"
              :class="
                modalMode === 'login'
                  ? 'bg-brand-red text-white shadow-md'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              "
              class="flex-1 rounded-lg py-2.5 text-xs font-semibold transition-all duration-200"
            >
              Masuk Portal
            </button>
          </div>

          <!-- ================= FORM PENDAFTARAN (REGISTER) ================= -->
          <form
            v-if="modalMode === 'register'"
            @submit.prevent
            class="space-y-4 animate-fade-up animate-duration-300"
          >
            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5"
                >> Nama Lengkap</label
              >
              <input
                type="text"
                placeholder="Masukkan nama sesuai ijazah"
                class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-yellow focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-yellow"
              />
            </div>

            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5"
                >> Email Aktif</label
              >
              <input
                type="email"
                placeholder="nama@email.com"
                class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-yellow focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-yellow"
              />
            </div>

            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5"
                >> Kata Sandi</label
              >
              <input
                type="password"
                placeholder="Buat kata sandi yang kuat"
                class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-yellow focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-yellow"
              />
            </div>

            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5"
                >> Pilihan Peminatan</label
              >
              <select
                class="w-full rounded-xl border border-white/10 bg-[#0A101C] px-4 py-3 text-sm text-white transition-all focus:border-brand-yellow focus:outline-none focus:ring-1 focus:ring-brand-yellow appearance-none cursor-pointer"
              >
                <option value="" disabled selected class="text-white/30">
                  -- Pilih Jalur Spesialisasi --
                </option>
                <option
                  v-for="track in tracks"
                  :key="track.code"
                  :value="track.code"
                >
                  {{ track.title }}
                </option>
              </select>
            </div>

            <div class="pt-3">
              <BaseButton
                variant="primary"
                class="w-full justify-center !py-3 font-semibold shadow-lg shadow-brand-yellow/20 hover:shadow-brand-yellow/40"
              >
                Kirim Pendaftaran
              </BaseButton>
            </div>
          </form>

          <!-- ================= FORM MASUK (LOGIN) ================= -->
          <form
            v-if="modalMode === 'login'"
            @submit.prevent
            class="space-y-4 animate-fade-up animate-duration-300"
          >
            <!-- HANYA EMAIL -->
            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5"
                >> Email Pengguna</label
              >
              <input
                type="email"
                placeholder="nama@email.com"
                class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-yellow focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                required
              />
            </div>

            <!-- HANYA PASSWORD -->
            <div>
              <label class="block text-xs font-mono text-white/70 mb-1.5"
                >> Kata Sandi</label
              >
              <input
                type="password"
                placeholder="••••••••"
                class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-yellow focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                required
              />
            </div>

            <!-- LINK LUPA KATA SANDI -->
            <div class="flex items-center justify-end pt-1">
              <a
                href="#"
                class="text-xs font-medium text-brand-yellow/80 hover:text-brand-yellow hover:underline transition-colors"
              >
                Lupa Kata Sandi?
              </a>
            </div>

            <div class="pt-3">
              <BaseButton
                variant="primary"
                class="w-full justify-center !py-3 font-semibold shadow-lg shadow-brand-yellow/20 hover:shadow-brand-yellow/40"
              >
                Akses Dashboard
              </BaseButton>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
