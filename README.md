# Muhamad Rayhan — Frontend Web Developer

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-rayhandev.my.id-b7d894?style=for-the-badge&logo=googlechrome&logoColor=202734)](https://rayhandev.my.id)
[![React 19](https://img.shields.io/badge/React%2019-202734?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-202734?style=for-the-badge&logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite%208-202734?style=for-the-badge&logo=vite&logoColor=646CFF)](https://vitejs.dev/)
[![styled-components](https://img.shields.io/badge/styled--components-202734?style=for-the-badge&logo=styledcomponents&logoColor=DB7093)](https://styled-components.com/)
[![Motion](https://img.shields.io/badge/Motion-202734?style=for-the-badge&logo=framer&logoColor=0055FF)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-MIT-36415A?style=for-the-badge)](LICENSE)

<br />

**Web Portfolio v4** dirancang dengan arsitektur modern berkinerja tinggi, tipografi berkarakter, dan interaktivitas terukur.

[🌐 Kunjungi Website](https://rayhandev.my.id) • [💼 Unduh Resume / CV](https://rayhandev.my.id/CV_Muhamad_Rayhan_ATS_EN.pdf) • [📬 Hubungi Langsung](mailto:m.rayhanoi26@gmail.com)

</div>

---

## 🎨 Design DNA: AW Media × Brandlos Synthesis

Portofolio ini dibangun di atas filosofi desain terpadu yang memadukan kedalaman estetika gelap dengan struktur modular yang tegas:

* **Dark Glassmorphism (AW Media):** Kanvas gelap pekat (`#202734`) dilapisi kartu semi-transparan (`#36415A` dengan `backdrop-filter: blur(12px)`) dan garis tepi kontras tipis 1px (`rgba(183, 216, 148, 0.16)`) yang bereaksi terhadap kursor (*glow on hover*).
* **Confident Persona (Brandlos):** Tipografi lugas dan terstruktur dengan kontras tegas antara display font berkarakter dan heading sans modern.
* **Palette Disiplin:**

| Token | Hex | Preview | Penggunaan |
|---|---|---|---|
| `darkBase` | `#202734` | ![#202734](https://via.placeholder.com/15/202734/000000?text=+) | Background canvas utama & backdrop |
| `secondarySurface` | `#36415A` | ![#36415A](https://via.placeholder.com/15/36415A/000000?text=+) | Glass card surface & elevated containers |
| `accentLime` | `#B7D894` | ![#B7D894](https://via.placeholder.com/15/B7D894/000000?text=+) | Tombol aksi primer, indikator status, & link aktif |
| `textHighlight` | `#E0F8C7` | ![#E0F8C7](https://via.placeholder.com/15/E0F8C7/000000?text=+) | Heading judul, teks sorotan, & display typography |

---

## ⚡ Fitur Utama & Arsitektur

### 1. Hybrid Navigation Model
* **Beranda Tunggal (`/`):** Alur cerita mengalir dari *Hero Section*, *Featured Projects*, *Tech Skills & Career Journey*, *Certificates Showcase*, hingga *Contact Direct Channel*.
* **Studi Kasus Mendalam (`/projects/:id`):** Analisis teknis proyek nyata mencakup perumusan masalah, arsitektur data, rincian *tech stack*, dan tautan *live demo* serta repositori kode.
* **Katalog Lengkap (`/projects` & `/all-certificates`):** Eksplorasi seluruh karya dan kredensial dilengkapi pencarian teks instan dan filter kategori tanpa reload halaman.

### 2. Interactive Lightbox Modal
* Pratinjau sertifikat resolusi tinggi di tempat dengan navigasi multi-arah (tombol geser *Next/Prev*, navigasi keyboard `ArrowLeft` / `ArrowRight` / `Escape`, dan indikator nomor urut).

### 3. Command Palette (`Ctrl + K` / `Cmd + K`)
* Menu navigasi cepat berbasis keyboard untuk berpindah section, membuka halaman proyek, atau mengunduh CV secara instan.

### 4. Smart Collaborator & Multi-Platform Detection
* Deteksi otomatis jenis platform partner pada kartu proyek (GitHub, Instagram, Toko Shopee, atau TikTok) lengkap dengan ikon SVG native dan atribusi peran kolaborator.

### 5. Respon Lintas Perangkat (Zero Horizontal Overflow)
* Layout elastis dan teruji aman dari *overflow* horizontal hingga layar terkecil (320px) dengan tipografi `clamp()`, kartu berotasi adaptif, dan pembungkus fleksibel.

### 6. Optimasi Performa & Build
* Pembagian kode otomatis (*manual chunks code splitting*) via Vite untuk memisahkan React, Motion, styled-components, dan icons ke dalam berkas terpisah, menjaga ukuran bundle utama tetap ramping (~190 kB).
* Integrasi SEO lengkap: CNAME kustom `rayhandev.my.id`, fallback 404 SPA, OpenGraph meta tags, Google Analytics 4, sitemap.xml, dan robots.txt.

---

## 🛠️ Tech Stack

<div align="center">

| Kategori | Teknologi & Tools |
|---|---|
| **Core Framework** | ![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript_5.9-007ACC?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white) |
| **Styling & Motion** | ![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white) ![Motion](https://img.shields.io/badge/Motion_React-0055FF?style=flat-square&logo=framer&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) |
| **State & Data** | ![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=react-query&logoColor=white) ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white) ![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=flat-square&logo=vue.js&logoColor=black) |
| **Routing & Icons** | ![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=flat-square&logo=react-router&logoColor=white) ![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat-square&logo=feather&logoColor=white) |
| **Deploy & Hosting** | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |

</div>

---

## 📁 Struktur Direktori

```text
portfolio-v4/
├── public/                     # Aset statis publik
│   ├── icons/                  # SVG ikon media sosial, tech stack, dan UI
│   ├── images/
│   │   ├── profile/            # Foto profil berformat AVIF
│   │   ├── projects/           # Tangkapan layar proyek berformat AVIF
│   │   └── sertifikat/         # Aset gambar sertifikat resmi
│   ├── 404.html                # SPA redirect fallback GitHub Pages
│   ├── CNAME                   # Domain kustom (rayhandev.my.id)
│   ├── robots.txt              # Konfigurasi perayap mesin pencari
│   └── sitemap.xml             # Peta situs terindeks
├── src/
│   ├── components/             # Komponen antarmuka modular
│   │   ├── Certificates/       # Showcase sertifikat & modal lightbox
│   │   ├── CommandPalette/     # Palet perintah keyboard shortcut
│   │   ├── Contact/            # Formulir pesan & kanal kontak langsung
│   │   ├── Footer/             # Footer global dan copyright
│   │   ├── Hero/               # Hero banner, teks peran berputar, Polaroid
│   │   ├── Navbar/             # Navigasi melayang responsif
│   │   ├── Projects/           # Grid kartu proyek & filter tab
│   │   ├── Skills/             # Tech stack grid & linimasa perjalanan karier
│   │   └── shared/             # Komponen badge dan utilitas bersama
│   ├── data/                   # Data statis terstruktur (proyek, sertifikat, profil)
│   ├── pages/                  # Halaman rute (Home, Projects, Detail, Certificates, 404)
│   ├── router/                 # Konfigurasi React Router v7
│   ├── theme/                  # Theme tokens, palet warna, tipografi, & GlobalStyles
│   ├── types/                  # Definisi tipe TypeScript
│   ├── App.tsx                 # Root application wrapper
│   └── main.tsx                # Entry point aplikasi
├── index.html                  # Dokumen HTML utama
├── package.json                # Dependensi proyek
├── tsconfig.json               # Konfigurasi compiler TypeScript
└── vite.config.ts              # Konfigurasi Vite & rollup chunk splitting
```

---

## 🚀 Memulai Proyek (Getting Started)

### Prasyarat
* [Node.js](https://nodejs.org/) versi 18.0 atau yang lebih baru
* Package manager `npm` atau `pnpm`

### Instalasi & Menjalankan Server Lokal

1. **Clone repositori:**
   ```bash
   git clone https://github.com/RayhanDev9/portfolio-v4.git
   cd portfolio-v4
   ```

2. **Pasang dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173` di browser Anda.

4. **Pemeriksaan Tipe TypeScript:**
   ```bash
   npx tsc --noEmit
   ```

5. **Kompilasi Build Produksi:**
   ```bash
   npm run build
   ```

---

## 🌐 Informasi Kontak

Jika Anda ingin berdiskusi mengenai proyek kolaborasi, peluang kerja, atau eksplorasi teknis:

* **Domain:** [rayhandev.my.id](https://rayhandev.my.id)
* **Email:** [m.rayhanoi26@gmail.com](mailto:m.rayhanoi26@gmail.com)
* **GitHub:** [@RayhanDev9](https://github.com/RayhanDev9)
* **Instagram:** [@rayyhan_09](https://www.instagram.com/rayyhan_09)
* **WhatsApp:** [+62 895-3256-03726](https://wa.me/62895325603726)

---

<div align="center">
  <sub>Dibangun dengan dedikasi pada clean code, aksesibilitas, dan performa tinggi. © 2026 Muhamad Rayhan.</sub>
</div>
