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
| /projects/:id Full Case Study | ✅ Selesai | `b4e6f74` |
| Fix: Prevent Pill Tags Stretching | ✅ Selesai | `29f416e` |
| Paket Fitur Kunci Tambahan (Scroll, SEO, CV, Search, 404) | ✅ Selesai | `4ec736f` |
| **Paket Fitur Tingkat Lanjut (Command Palette, Ambient Glow, Direct Email, Code Snippets)** | ✅ Selesai | `c37f8ab` |

---

## 📋 Active Build Plan: Paket Fitur Tingkat Lanjut (Advanced Engineering Suite)

### 1. Tujuan & Filosofi

Portofolio ini telah memiliki seluruh fitur dasar dan navigasi penting. Paket ini dirancang untuk mengangkat kualitas portofolio ke standar **World-Class Design Engineering** (setara dengan situs portofolio engineer di Linear, Vercel, dan Raycast):

1. **⌨️ Quick Command Palette (`Ctrl + K` / `Cmd + K`)**: Memberikan pengalaman navigasi kilat berbasis keyboard dan pencarian global instan.
2. **✨ Ambient Specular Cursor Glow (AW Media Polish)**: Lapisan pencahayaan difus aksen lime yang bereaksi terhadap kursor mouse, memberikan kedalaman estetika kanvas gelap tanpa membebani performa.
3. **📬 Direct Email Delivery pada Contact Form**: Mengirim pesan langsung ke email tanpa memicu pembukaan aplikasi mailto bawaan perangkat pengguna.
4. **💻 Code Architecture Snippets di Detail Studi Kasus (`/projects/:id`)**: Menampilkan cuplikan kode arsitektur TypeScript nyata pada studi kasus proyek lengkap dengan tombol salin kode (*copy code*).

---

### 2. Desain Layout Fitur Baru

```
┌────────────────────────────────────────────────────────────────────────────┐
│ NAVBAR: Rayhan.   [Home] [Projects] [Skills] [Certs] [Contact] [⌘K] [Resume]│
├────────────────────────────────────────────────────────────────────────────┤
│ FLOATING COMMAND PALETTE (Ctrl + K / Cmd + K):                             │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │ 🔍 Ketik perintah atau cari proyek...                       [Esc]      │ │
│ ├────────────────────────────────────────────────────────────────────────┤ │
│ │ NAVIGASI CEPAT                                                         │ │
│ │ ↗ Beranda                                                              │ │
│ │ ↗ Katalog Semua Proyek (10)                                            │ │
│ │ ↗ Katalog Semua Sertifikat (12)                                        │ │
│ │                                                                        │ │
│ │ STUDI KASUS PROYEK                                                     │ │
│ │ ⚡ DapurRasa Food Store (Vue 3 + Pinia + TanStack Query)                │ │
│ │ ⚡ Fast React Pizza (React 18 + Redux Toolkit)                          │ │
│ │ ⚡ Danu Satya Portfolio (React 19 + Tailwind CSS)                       │ │
│ │ ...                                                                    │ │
│ │                                                                        │ │
│ │ AKSI CEPAT                                                             │ │
│ │ 📄 Unduh CV / Resume ATS (PDF)                                         │ │
│ │ 📋 Salin Alamat Email                                                  │ │
│ │ 💬 Buka Percakapan WhatsApp Langsung                                   │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────────┤
│ AMBIENT CURSOR GLOW:                                                       │
│ (Cahaya difus lime lembut mengikuti gerakan kursor di kanvas #202734)     │
├────────────────────────────────────────────────────────────────────────────┤
│ STUDI KASUS /projects/:id - CODE ARCHITECTURE BLOCK:                       │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │ 💻 Arsitektur State: Pinia Store (useCartStore.ts)        [Salin Kode] │ │
│ │ const useCartStore = defineStore('cart', () => { ... })                │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Rincian Teknis Per Fitur

#### Fitur 1: Global Command Palette (`src/components/CommandPalette/`)
- **Struktur File**:
  - `CommandPalette.tsx`: Komponen modal dengan listener keyboard global (`keydown` untuk `Ctrl+K`, `Cmd+K`, dan `Escape`).
  - `CommandPalette.styles.ts`: Dark glass modal dengan border 1px halus, input pencarian beraksen lime, dan item list dengan transisi keyboard.
  - `index.ts`: Public export.
- **Dukungan Navigasi**:
  - Dukungan tombol panah atas/bawah (`ArrowUp`, `ArrowDown`) dan tombol `Enter` untuk memilih.
  - Filter pencarian instan pada seluruh item (halaman, 10 proyek, dan aksi langsung).
- **Navbar Trigger**:
  - Tombol pintasan pill di samping kanan Navbar: ikon `Search` + badge `⌘K` / `Ctrl+K`.

#### Fitur 2: Ambient Specular Cursor Glow (`src/components/shared/CursorGlow.tsx`)
- **Implementasi**:
  - Menggunakan radial gradient halus: `radial-gradient(600px at [x]px [y]px, rgba(183, 216, 148, 0.04), transparent 80%)`.
  - Menggunakan `requestAnimationFrame` untuk menjamin pergerakan stabil di 60 FPS tanpa re-render React berlebih.
  - `pointer-events: none` dan `z-index: 0` agar tidak mengganggu klik atau seleksi teks.
  - Otomatis disembunyikan pada layar sentuh/mobile (`@media (hover: none)`).

#### Fitur 3: Direct Email Delivery pada Contact Form (`ContactForm.tsx`)
- **Implementasi**:
  - Integrasi submission form via `fetch` asinkron ke endpoint terstandar Web3Forms (menggunakan access key publik/standar formulir statis).
  - State manajemen: `isSubmitting`, `submitStatus` (`idle` | `success` | `error`).
  - Animasi loading spinner saat pengiriman berlangsung.
  - Banner pesan sukses di dalam kartu tanpa reload halaman dan form otomatis di-reset.
  - Fallback otomatis ke `mailto:` jika koneksi jaringan offline/gagal.

#### Fitur 4: Code Architecture Snippets di Studi Kasus (`/projects/:id`)
- **Implementasi**:
  - Menambahkan data `codeSnippet` opsional (title, language, code, explanation) pada `caseStudiesData` untuk proyek-proyek unggulan.
  - Komponen blok kode gelap dengan font monospaced (`Fira Code` / `Consolas`), nomor baris atau bar status, dan tombol interaktif *"Salin Kode"* dengan status centang `Check` selama 2 detik.

---

### 4. Urutan Eksekusi

```
Step 1 → Ambient Specular Cursor Glow (src/components/shared/CursorGlow.tsx + integrasi di RootLayout)
Step 2 → Direct Email Delivery Contact Form (src/components/Contact/ContactForm.tsx)
Step 3 → Code Architecture Snippets di Detail Studi Kasus (src/data/caseStudies.ts & src/pages/ProjectDetailPage.*)
Step 4 → Global Command Palette (src/components/CommandPalette/ + integrasi Navbar & RootLayout)
Step 5 → Verifikasi Typecheck & Production Build (tsc --noEmit && npm run build)
Step 6 → Update README.md status & Git Commit + Push
```

---

### 5. Kriteria Keberhasilan

- ✅ **Snappy Command Palette**: Terbuka instan dengan `Ctrl+K` atau `Cmd+K` serta klik Navbar, navigasi panah & enter bekerja mulus.
- ✅ **Smooth Cursor Glow**: Cahaya difus bergerak tanpa lag (60 FPS) dan tidak mengganggu elemen UI lainnya.
- ✅ **Zero Friction Contact**: Pesan form terkirim langsung tanpa harus membuka aplikasi email eksternal.
- ✅ **Kredibilitas Kode Nyata**: Studi kasus menampilkan potongan kode implementasi nyata yang rapi dan dapat disalin.
- ✅ **Lolos Verifikasi**: 0 error TypeScript, build Vite produksi sukses, dan commit git bersih.
