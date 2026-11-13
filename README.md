# Portfolio v4 — Muhamad Rayhan

> React 19 + TypeScript + Vite + styled-components
> Design DNA: AW Media dark glassmorphism × Brandlos confident typography

---

## 🚀 Status Implementasi

| Section / Fitur | Status | Commit |
|---|---|---|
| Theme System & Design Tokens | ✅ Selesai | `d01871d` |
| Navbar & Glassmorphism Mobile Menu | ✅ Selesai | `f578672` |
| Hero Section (Polaroid, CTA, Socials) | ✅ Selesai | `f578672` |
| Featured Projects + Filter Tabs | ✅ Selesai | `9fcd808` |
| React Router v7 + `/projects` Catalogue | ✅ Selesai | `5748b9e` |
| Skills & Career Journey (`#skills`) | ✅ Selesai | `f155aaf` |
| Certificates Showcase & Lightbox Modal | ✅ Selesai | `bcc484e` |
| Fix: Uniform Card Height & `/certificates` Route | ✅ Selesai | `5540aa2` |
| Contact Section & Global Footer (`#contact`) | ✅ Selesai | `268fa20` |
| **/projects/:id Full Case Study** | ✅ Selesai | `5928a90` |

---

## 📋 Active Build Plan: Deep-Dive Case Study Page (`/projects/:id`)

### 1. Tujuan & Filosofi

Halaman detail proyek (`/projects/:id`) saat ini masih berupa placeholder sederhana dengan badge *"Studi Kasus Detail Sedang Disiapkan"*.

Sesuai aturan locked di **GEMINI.md (Section 4: Deep-Dive Case Study Routes)** dan standar **Anti-Slop & Impeccable Taste**:
- **Menolak deskripsi generik**: Tidak menggunakan teks AI-slop atau basa-basi pemasaran.
- **Fokus pada engineering nyata**: Menjelaskan masalah spesifik yang diselesaikan, keputusan arsitektur data, alasan pemilihan tech stack, dan tantangan performa.
- **Navigasi mulus**: Memberikan aksi langsung (Live Demo, GitHub source code) serta navigasi *Next / Previous Project* untuk menjelajahi seluruh 10 proyek secara berkesinambungan.
- **Kelengkapan tampilan**: Melengkapi halaman dengan `<Footer />` global.

---

### 2. Desain Layout (`/projects/:id`)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  NAVBAR (Fixed Top)                                                        │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ← Kembali ke Katalog Proyek                                               │
│                                                                            │
│  [WEB APP] • [FRONT-END • MENTOR: AHMAD HAKIM]                             │
│  DapurRasa Food Store                                                      │
│  Aplikasi e-commerce kuliner modern dengan instant search & state caching. │
│                                                                            │
│  [ Buka Live Demo ↗ ]   [ Source Code < / > ]   [Vue 3] [Pinia] [Query]    │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  SHOWCASE BANNER                                                           │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                                                                      │  │
│  │                    Preview Gambar Resolusi Tinggi                    │  │
│  │                                                                      │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  DEEP-DIVE SECTIONS (Grid 2 Kolom)                                         │
│                                                                            │
│  ┌──────────────────────────────────┐  ┌─────────────────────────────────┐ │
│  │ 🎯 TANTANGAN & MASALAH NYATA     │  │ 💡 SOLUSI & IMPLEMENTASI        │ │
│  │ Masalah konkurensi data menu dan │  │ Arsitektur Vue 3 Composables    │ │
│  │ kebutuhan caching tanpa fetch    │  │ dipadu TanStack Query untuk     │ │
│  │ berulang saat navigasi rute...   │  │ stale-while-revalidate data...  │ │
│  └──────────────────────────────────┘  └─────────────────────────────────┘ │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ ⚙️ KEPUTUSAN ARSITEKTUR & TEKNOLOGI                                  │  │
│  │ • Mengapa Pinia? (State modular tanpa boilerplate Vuex lama)         │  │
│  │ • Mengapa TanStack Query? (Pengurangan network request hingga 60%)   │  │
│  │ • Mengapa Composables? (Separation of concerns logika search)        │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │ ✨ FITUR KUNCI & SPESIFIKASI TEKNIS                                   │  │
│  │ ✓ Instant search dengan debounce optimasi performa                    │  │
│  │ ✓ Cart synchronization real-time lintas rute                         │  │
│  │ ✓ Responsive fluid grid untuk checkout mobile dan desktop            │  │
│  └──────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  NEXT / PREVIOUS PROJECT NAVIGATION                                        │
│  ┌───────────────────────────────┐   ┌──────────────────────────────────┐  │
│  │ ← Proyek Sebelumnya           │   │ Proyek Selanjutnya →             │  │
│  │ First Portfolio Milestone     │   │ Fast React Pizza                 │  │
│  └───────────────────────────────┘   └──────────────────────────────────┘  │
├────────────────────────────────────────────────────────────────────────────┤
│  GLOBAL FOOTER                                                             │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Struktur Data Teknis (`src/data/caseStudies.ts`)

Kita akan membuat data studi kasus terstruktur untuk setiap proyek:

```ts
export interface CaseStudyArchitecture {
  title: string;
  reason: string;
}

export interface CaseStudyDetail {
  projectId: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: CaseStudyArchitecture[];
  keyFeatures: string[];
  metricsOrLearnings: string;
}
```

#### Contoh Data Engineering Nyata untuk Proyek Unggulan:
1. **DapurRasa Food Store (`dapur-rasa`)**:
   - *Problem*: Manajemen data menu statis yang lambat diakses ulang, sinkronisasi keranjang belanja yang rapuh saat berpindah halaman, serta pencarian menu yang memicu render berlebihan.
   - *Solution*: Mengadopsi Vue 3 Composition API dengan Pinia modular store untuk sinkronisasi cart, serta TanStack Vue Query untuk data caching di sisi klien.
   - *Architecture*:
     - *Pinia*: Menggantikan Vuex lama untuk type safety TypeScript penuh dan zero boilerplate mutations.
     - *TanStack Query*: Mengeliminasi fetch berulang dengan caching cerdas (*stale-while-revalidate*).
     - *Custom Composables*: Isolasi logika filter dan pencarian menu agar komponen UI tetap murni (*clean presentation*).
2. **Fast React Pizza (`fast-react-pizza`)**:
   - *Problem*: Aplikasi pemesanan pizza membutuhkan kalkulasi harga dinamis, update kuantitas pesanan instan, serta pelacakan status pesanan real-time tanpa reload.
   - *Solution*: Arsitektur React 18 dengan Redux Toolkit (RTK) untuk global state cart, digabungkan dengan React Router Data Loaders untuk data fetching deklaratif.
   - *Architecture*:
     - *Redux Toolkit*: Menangani kompleksitas state multi-level (tambah item, ubah kuantitas, hitung total, kosongkan keranjang).
     - *React Router Loaders*: Mengambil data pesanan langsung pada fase routing sebelum komponen di-render.
3. **Danu Satya Portfolio (`danu-satya`)**:
   - *Problem*: Klien desainer grafis & motion membutuhkan portofolio dark-mode dengan tipografi berkarakter tajam, pemuatan media grafis resolusi tinggi yang cepat, dan layout visual presisi.
   - *Solution*: React 19 + TypeScript dengan Tailwind CSS v4, optimasi format gambar web modern (AVIF/WebP), dan integrasi custom domain DNS pribadi.
4. **Siap Kerja (`siap-kerja`)**:
   - *Problem*: Kolaborasi tim multi-disiplin (FE, BE, UI/UX) untuk platform kesiapan karir yang membutuhkan integrasi rekomendasi AI, modul interaktif, dan animasi transisi responsif.
   - *Solution*: React + Redux Toolkit terintegrasi dengan endpoint Google Gemini AI, didukung animasi Framer Motion dan manajemen alur kerja Git berbasis tim.
5. **Proyek Lainnya (5–10)**:
   - Disediakan fallback arsitektur berbasis data asli di `src/data/projects.ts` sehingga seluruh 10 proyek memiliki studi kasus yang konsisten dan informatif.

---

### 4. Detail Komponen & Styling

1. **Breadcrumb & Meta Tag**:
   - Tombol `← Kembali ke Katalog Proyek` (Link ke `/projects`).
   - Pill badge kategori (*Web App*, *Landing Page*, *Interactive*) dan tag kolaborasi/role.
2. **Hero Header & Action Buttons**:
   - Judul H1 besar bergaya *Google Sans* / *Poiret One*.
   - Tombol utama:
     - `Buka Live Demo` (solid lime `#B7D894` + icon `ExternalLink`).
     - `Lihat Source Code` (ghost button + icon `Code2`, hanya tampil jika `githubUrl` ada).
   - Tech stack pill tags lengkap.
3. **Showcase Visual Container**:
   - Gambar beresolusi tajam dengan `aspect-ratio: 16 / 9`, border 1px `borderGlass`, dan subtle shadow glow.
4. **Deep-Dive Cards (Glass Surfaces)**:
   - **Tantangan & Solusi**: Grid 2 kolom dengan kartu kaca gelap (`#36415A` + blur).
   - **Keputusan Arsitektur**: Kartu modular yang merinci *Teknologi* dan *Alasan Pemilihan Teknis*.
   - **Fitur Kunci**: Daftar fitur dengan icon checkmark beraksen lime.
5. **Next / Previous Navigation**:
   - Di bagian bawah kartu studi kasus:
     - Tombol kiri: `← Proyek Sebelumnya` (judul proyek sebelumnya).
     - Tombol kanan: `Proyek Selanjutnya →` (judul proyek berikutnya).
     - Berputar secara siklis (proyek pertama mengarah ke proyek terakhir dan sebaliknya).
6. **Footer Global**:
   - Memasang `<Footer />` di bagian bawah halaman.

---

### 5. Urutan Eksekusi

```
Step 1  → Buat src/data/caseStudies.ts (data teknis tantangan, arsitektur, dan solusi 10 proyek)
Step 2  → Buat src/pages/ProjectDetailPage.styles.ts (semua styled-components detail studi kasus)
Step 3  → Refactor src/pages/ProjectDetailPage.tsx (tampilan komprehensif, navigasi next/prev, dan footer)
Step 4  → Verifikasi build & type check: tsc --noEmit + npm run build
Step 5  → Update README.md status tracker
Step 6  → Git commit & push: "feat: implement comprehensive engineering case study page"
```

---

### 6. Kriteria Keberhasilan

- ✅ **Hilangkan Placeholder**: Tidak ada lagi tulisan *"Studi Kasus Detail Sedang Disiapkan"*.
- ✅ **High-Signal Technical Prose**: Bahasa teknis lugas, berbasis arsitektur data riil tanpa AI cliches (*delve, tapestry, seamless, game-changer*).
- ✅ **Aksi Lengkap**: Tombol Live Demo, Source Code, dan link kembali berfungsi instan.
- ✅ **Sirkulasi Proyek Mulus**: Recruiter dapat berpindah dari satu proyek ke proyek lain dengan tombol Next/Prev.
- ✅ **Desain Terpadu**: Glassmorphism AW Media × ketegasan Brandlos konsisten dengan halaman beranda.
- ✅ **Lolos Verifikasi**: 0 error TypeScript, build produksi Vite sukses, dan working tree git bersih.
