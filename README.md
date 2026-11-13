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
| **Paket Fitur Kunci Tambahan (Key Essential Features)** | ✅ Selesai | `9338af7` |

---

## 📋 Active Build Plan: Paket Fitur Kunci Tambahan (Key Essential Features Suite)

### 1. Latar Belakang & Filosofi Arsitektur

Fondasi struktural portofolio (seluruh halaman, routing, katalog, dan studi kasus teknis) telah berdiri kokoh. Untuk membawa portofolio ini ke tingkat **enterprise-grade polish** yang siap diuji oleh recruiter dan klien internasional, kita akan menambahkan paket **6 Fitur Kunci Tambahan**:

1. **Global Scroll Restoration**: Menjamin setiap pergantian halaman rute secara otomatis mengembalikan posisi scroll ke paling atas (`scrollY: 0`).
2. **SEO, Open Graph & Social Share Preview Meta Tags**: Optimasi `index.html` dengan metadata Open Graph dan Twitter Cards agar tautan portofolio yang dibagikan ke WhatsApp, LinkedIn, atau Twitter menampilkan kartu pratinjau yang kredibel dan menarik.
3. **Scroll Spy / Active Section Indicator di Navbar**: Navbar mendeteksi section yang sedang aktif di viewport saat scrolling di beranda menggunakan `IntersectionObserver`, menyalakan aksen warna `#B7D894` dan indikator lembut.
4. **Resume / CV Action Buttons**: Tombol aksi "Unduh CV / Resume" di Hero Section dan Navbar untuk memudahkan recruiter mengunduh profil kualifikasi kerja tanpa hambatan.
5. **Instant Search Bar & Tech Filter di Katalog (`/projects` & `/certificates`)**: Kolom pencarian interaktif yang memfilter proyek dan sertifikat secara instan berdasarkan nama, tech stack, dan platform, lengkap dengan pesan *empty state* yang estetik.
6. **Polish Halaman 404 (`NotFoundPage`)**: Meremajakan tampilan halaman 404 dengan dark glassmorphism AW Media, teks *humanizer*, tombol aksi ganda, dan `<Footer />` global.

---

### 2. Desain Layout Fitur Baru

```
┌────────────────────────────────────────────────────────────────────────────┐
│ NAVBAR: Rayhan.   [Home] [Projects*] [Skills] [Certs] [Contact]   [Unduh CV]│
│ (*Scroll spy menyorot section yang aktif dengan aksen lime #B7D894)        │
├────────────────────────────────────────────────────────────────────────────┤
│ HERO SECTION:                                                              │
│ [Lihat Proyek ↘]   [Hubungi ✉]   [Unduh CV / Resume 📄]                   │
├────────────────────────────────────────────────────────────────────────────┤
│ KATALOG PROYEK & SERTIFIKAT (/projects & /certificates):                   │
│                                                                            │
│ ┌───────────────────────────────────────────────────────┐                  │
│ │ 🔍 Cari proyek, teknologi (React, Vue, TS...), dll... │ [X] Clear        │
│ └───────────────────────────────────────────────────────┘                  │
│ [Semua] [Web App] [Landing Page] [Interactive]   • Menampilkan 6 dari 10   │
│                                                                            │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                       │
│ │ Project Card │  │ Project Card │  │ Project Card │                       │
│ └──────────────┘  └──────────────┘  └──────────────┘                       │
├────────────────────────────────────────────────────────────────────────────┤
│ HALAMAN 404 (NotFoundPage):                                                │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  404                                                                   │ │
│ │  Halaman Tidak Ditemukan                                               │ │
│ │  Tautan yang Anda tuju mungkin telah dipindahkan atau salah ketik.     │ │
│ │  [Kembali ke Beranda]   [Jelajahi Proyek]                              │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│ GLOBAL FOOTER                                                              │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Rincian Teknis Per Komponen

#### Fitur 1: Global Scroll Restoration
- **File**: `src/router/index.tsx`
- **Implementasi**: Menggunakan `RootLayout` pembungkus dengan komponen `<ScrollRestoration />` dan `<Outlet />` dari React Router v7.

#### Fitur 2: SEO, Open Graph & Social Share Preview Meta Tags
- **File**: `index.html`
- **Metadata**:
  - `meta name="description"` deskripsi lugas tanpa AI slop.
  - `meta property="og:title"`, `og:description"`, `og:image"`, `og:type="website"`, `og:site_name`.
  - `meta name="twitter:card" content="summary_large_image"`, `twitter:title`, `twitter:description`, `twitter:image`.
  - `meta name="theme-color" content="#202734"`.

#### Fitur 3: Scroll Spy / Active Section Highlighter
- **File**: `src/components/Navbar/Navbar.tsx`, `Navbar.styles.ts`, `MobileMenu.tsx`
- **Implementasi**:
  - State `activeSection` diatur dinamis oleh `IntersectionObserver` terhadap ID `#hero`, `#projects`, `#skills`, `#certificates`, `#contact`.
  - Prop `$active` pada `NavLink` memberikan aksen warna `#B7D894`, indikator bawah tipis, dan efek transisi lembut (150ms).
  - Sinkronisasi otomatis: saat berada di rute `/projects` atau `/certificates`, nav link terkait langsung ditandai aktif.

#### Fitur 4: Resume / CV Action Buttons
- **File**: `src/data/profile.ts`, `src/types/portfolio.ts`, `src/components/Hero/Hero.tsx`, `Hero.styles.ts`, `src/components/Navbar/Navbar.tsx`, `public/resume.pdf`
- **Implementasi**:
  - Menambahkan properti `resumeUrl` pada `ProfileData`.
  - Tombol aksi berikon `FileDown` / `FileText` pada Hero Section (`CvButton`) dan Navbar (`NavResumeBtn`).
  - Menyediakan file PDF resume yang valid di `public/resume.pdf` agar tautan langsung dapat diunduh/dilihat.

#### Fitur 5: Instant Search Bar & Filter di Katalog
- **File**: `src/pages/ProjectsPage.tsx`, `src/pages/CertificatesPage.tsx`
- **Implementasi**:
  - Input pencarian real-time dengan ikon `Search` dan tombol clear `X`.
  - Pencarian multi-kriteria: mencocokkan judul, deskripsi, issuer/platform, dan tag keahlian (*skills array*).
  - Integrasi dengan filter tab aktif (*AND logic*).
  - Indikator jumlah hasil (*Result Count*).
  - Tampilan *Empty State* elegan dengan tombol *"Reset Filter"* jika tidak ada hasil yang cocok.

#### Fitur 6: Polish Halaman 404 (`NotFoundPage`)
- **File**: `src/pages/NotFoundPage.tsx`
- **Implementasi**:
  - Kanvas dark glassmorphism AW Media (`#202734` base + `#36415A` card + 1px border `rgba(183, 216, 148, 0.16)`).
  - Tipografi 404 besar bergaya `Poiret One` dengan aksen lime.
  - Pesan teks manusiawi (*humanizer*).
  - Tombol aksi ganda (*Kembali ke Beranda* & *Jelajahi Proyek*).
  - Footer global terpasang rapi.

---

### 4. Urutan Eksekusi

```
Step 1 → Global Scroll Restoration (src/router/index.tsx dengan RootLayout + ScrollRestoration)
Step 2 → SEO & Social Share Open Graph Meta Tags (index.html)
Step 3 → Resume / CV Setup (public/resume.pdf, src/types/portfolio.ts, src/data/profile.ts)
Step 4 → Resume Action Buttons & Scroll Spy Navbar (Navbar.tsx, Navbar.styles.ts, MobileMenu.tsx, Hero.tsx, Hero.styles.ts)
Step 5 → Instant Search Bar & Multi-Filter di /projects (ProjectsPage.tsx)
Step 6 → Instant Search Bar & Multi-Filter di /certificates (CertificatesPage.tsx)
Step 7 → Polish Halaman 404 (NotFoundPage.tsx)
Step 8 → Verifikasi Typecheck & Build Produksi (tsc --noEmit && npm run build)
Step 9 → Update README.md status & Git Commit + Push
```

---

### 5. Kriteria Keberhasilan

- ✅ **Scroll Otomatis**: Setiap navigasi rute selalu mulai dari paling atas layar.
- ✅ **Rich Social Sharing**: Tautan portofolio siap dibagikan ke media sosial/chat dengan preview gambar dan profil yang tajam.
- ✅ **Navigasi Presisi**: Navbar memberikan umpan balik visual secara *real-time* tentang section yang sedang dilihat.
- ✅ **Akses CV Cepat**: Recruiter dapat mengunduh/melihat resume dalam 1 kali klik.
- ✅ **Pencarian Instan**: Pengguna dapat mencari proyek atau sertifikat berdasarkan keyword teknologi secara instan.
- ✅ **Estetika 404**: Halaman error tetap konsisten dengan identitas desain portofolio dan tidak terasa terputus.
- ✅ **Bebas Error**: Lolos 100% type check TypeScript, build produksi Vite sukses, dan git commit bersih.
