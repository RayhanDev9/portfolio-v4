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
| Paket Fitur Tingkat Lanjut (Command Palette, Ambient Glow, Direct Email, Code Snippets) | ✅ Selesai | `ea6112b` |
| **Integrasi Link GitHub Repo & Dinamika Link Kolaborator (GitHub, Instagram, Shopee)** | ✅ Selesai | `cdae4c6` |

---

## 📋 Active Build Plan: Integrasi Link GitHub Repo & Dinamika Kolaborator Multi-Platform

### 1. Latar Belakang & Filosofi Desain

Setiap proyek portofolio memiliki konteks kolaborasi dan kepemilikan kode yang berbeda:
1. **Source Code Repositori GitHub RayhanDev9**: Menghubungkan langsung ke kode sumber proyek untuk verifikasi teknis recruiter.
2. **Rekan Kolaborator Developer**: Menghubungkan ke profil GitHub rekan satu tim (*Team Collaborator*).
3. **Klien / Partner Desainer Grafis**: Menghubungkan ke akun Instagram resmi (*Creative Partner*).
4. **Klien Toko / E-Commerce**: Menghubungkan ke Toko Online Shopee resmi (*E-Commerce Client*).

Sistem akan dirancang dengan **Smart Dynamic Platform Detection** agar secara otomatis mengenali jenis link (`github.com`, `instagram.com`, `shopee.co.id`, atau website kustom) dan menampilkan ikon serta label yang sesuai tanpa redundansi atau layout yang berantakan.

---

### 2. Desain Layout & Penempatan UI

```
┌────────────────────────────────────────────────────────────────────────────┐
│ HALAMAN DETAIL STUDI KASUS (/projects/:id)                                 │
│                                                                            │
│ ← Kembali ke Katalog Proyek             [WEB APP] • [👥 @akumalas ↗]       │
│                                                                            │
│ Mading Kampus                                                              │
│ Digital campus magazine and announcement portal developed in team.         │
│                                                                            │
│ [ Buka Live Demo ↗ ]  [ Source Code < / > ]  [ 👥 Partner: @akumalas ↗ ]   │
│                                                                            │
│ (Ikon & label tombol ketiga beradaptasi otomatis sesuai platform):         │
│ • GitHub: [ 🐙 Collab: @akumalas ↗ ]                                       │
│ • Instagram: [ 📸 Client: @dnustya_ ↗ ]                                    │
│ • Shopee: [ 🛍️ Toko Shopee ↗ ]                                            │
├────────────────────────────────────────────────────────────────────────────┤
│ KARTU KATALOG PROYEK (ProjectCard.tsx)                                     │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │ 🖼️ Thumbnail Proyek                                                    │ │
│ │                                                                        │ │
│ │ Danu Satya Portfolio                                                   │ │
│ │ Front-End • Client: [@dnustya_ ↗] (Link aktif dengan warna aksen)      │ │
│ │                                                                        │ │
│ │ [React 19] [Tailwind CSS] [TypeScript]                                 │ │
│ │                                                                        │ │
│ │ [ Live Demo ↗ ]  [ < / > Repo ]  [ Detail → ]                          │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Rincian Teknis Per Komponen

#### A. Pembaruan Model Data (`src/types/portfolio.ts`)
Menambahkan interface `Collaborator`:
```typescript
export type CollaboratorPlatform = 'github' | 'instagram' | 'shopee' | 'website';

export interface Collaborator {
  name: string;        // contoh: 'akumalas', 'EternalVultr', 'ItzRyz', 'Danu Satya', 'Store Radeva'
  role?: string;       // contoh: 'Backend Collaborator', 'UI/UX Designer', 'Client'
  url: string;         // tautan langsung ke profil / toko
  platform?: CollaboratorPlatform; // opsional: otomatis dideteksi dari URL jika kosong
}

export interface Project {
  // ... field eksisting
  githubUrl?: string;          // Repositori GitHub RayhanDev9
  collab?: string;             // Label teks ringkas untuk badge
  collaborator?: Collaborator; // Objek detail kolaborator
}
```

#### B. Pembaruan Data Proyek Nyata (`src/data/projects.ts`)
1. **Mading Kampus (`mading-kampus`)**:
   - `githubUrl`: `https://github.com/RayhanDev9/mading-kampus`
   - `collab`: `Collab with @akumalas`
   - `collaborator`: `{ name: 'akumalas', role: 'Backend Collaborator', url: 'https://github.com/akumalas', platform: 'github' }`
2. **Siap Kerja (`siap-kerja`)**:
   - `githubUrl`: `https://github.com/RayhanDev9/siap-kerja`
   - `collab`: `Collab with @EternalVultr`
   - `collaborator`: `{ name: 'EternalVultr', role: 'Developer Collaborator', url: 'https://github.com/EternalVultr', platform: 'github' }`
3. **Company Profile ISC (`company-profile-isc`)**:
   - `githubUrl`: `https://github.com/RayhanDev9/company-profile-isc`
   - `collab`: `Collab with @ItzRyz`
   - `collaborator`: `{ name: 'ItzRyz', role: 'ISC Collaborator', url: 'https://github.com/ItzRyz', platform: 'github' }`
4. **Danu Satya Portfolio (`danu-satya`)**:
   - `collab`: `Client: @dnustya_`
   - `collaborator`: `{ name: 'Danu Satya', role: 'Graphic & Motion Designer', url: 'https://instagram.com/dnustya_', platform: 'instagram' }`
5. **Store Radeva (`store-radeva`)**:
   - `collab`: `Toko Shopee: Radeva`
   - `collaborator`: `{ name: 'Store Radeva', role: 'E-Commerce Store', url: 'https://shopee.co.id/Bedak-MBK-Powder-Sachetan-13-6-gram-Dan-Box-200-gram-bedak-deodoran-legendaris-Varian-Putih-i.1736388240.56660827193', platform: 'shopee' }`

#### C. Smart Platform Helper (`src/utils/collaborator.ts` atau inline helper)
Mendeteksi jenis platform dan ikon:
- `github.com` -> Ikon GitHub / `Code2`, label format: `Collab: @username`
- `instagram.com` -> Ikon Instagram, label format: `Client: @username`
- `shopee.co.id` -> Ikon `ShoppingBag`, label format: `Toko Shopee`
- Default -> Ikon `ExternalLink`, label format: `Partner Web ↗`

#### D. Integrasi Halaman Detail Studi Kasus (`ProjectDetailPage.tsx` & `.styles.ts`)
- `CollabBadge`: Diubah menjadi link interaktif (`as="a" target="_blank"`).
- `HeroActionRow`: Tombol ketiga `CollabActionButton` bergaya glassmorphism dengan hover glow aksen lime.

#### E. Integrasi Kartu Katalog (`ProjectCard.tsx` & `Projects.styles.ts`)
- `CardMeta`: Menjadikan teks kolaborator link aktif yang dapat diklik tanpa mengganggu navigasi kartu utama.
- `CardActionRow`: Jika `project.githubUrl` ada, tampilkan tombol direct link repositori.

---

### 4. Urutan Eksekusi

```
Step 1 → Update src/types/portfolio.ts (Tambahkan interface Collaborator & field collaborator di Project)
Step 2 → Update src/data/projects.ts (Masukkan link repo GitHub & data kolaborator Mading Kampus, Siap Kerja, ISC, Danu Satya, Radeva)
Step 3 → Buat helper icon & detector platform kolaborasi (GitHub, Instagram, Shopee, Website)
Step 4 → Update ProjectDetailPage.tsx & ProjectDetailPage.styles.ts (Tampilkan tombol & badge kolaborator)
Step 5 → Update ProjectCard.tsx & Projects.styles.ts (Link kolaborator di kartu & tombol repo GitHub)
Step 6 → Verifikasi Typecheck & Build Produksi (tsc --noEmit && npm run build)
Step 7 → Update README.md status & Git Commit + Push
```

---

### 5. Kriteria Keberhasilan

- ✅ **Akses Instan ke Repo**: Pengguna dapat langsung membuka source code GitHub untuk proyek Mading Kampus, Siap Kerja, dan ISC.
- ✅ **Multi-Platform Kolaborasi**: Link kolaborator GitHub (`@akumalas`, `@EternalVultr`, `@ItzRyz`), Instagram (`@dnustya_`), dan Toko Shopee (Radeva) terbuka di tab baru dengan ikon dan label yang tepat.
- ✅ **Visual Estetik & Responsif**: Tombol dan badge tertata rapi di mobile maupun desktop sesuai DNA AW Media dark glassmorphism.
- ✅ **Lolos Verifikasi**: 0 error TypeScript, build Vite produksi 100% sukses, dan git commit bersih.
