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
| `/projects/:id` Detail Page (placeholder) | ✅ Selesai | `5748b9e` |
| Skills & Career Journey (`#skills`) | ✅ Selesai | `f155aaf` |
| Certificates Showcase & Lightbox Modal | ✅ Selesai | `bcc484e` |
| Fix: Uniform Card Height & `/certificates` Route | ✅ Selesai | `5540aa2` |
| **Contact Section & Footer (`#contact`)** | ✅ Selesai | `7e891ab` |
| `/projects/:id` Full Case Study | ⬜ Belum | — |

---

## 📋 Active Build Plan: Contact Section & Footer (`#contact`)

### 1. Tujuan & Konteks

Section ini adalah penutup dari alur beranda (*Seamless Storytelling Flow*) sekaligus menjadi target navigasi dari:
1. Tombol **"Hubungi"** di Hero section (`href="#contact"`).
2. Tautan **"Contact"** di Navbar & Mobile Menu (`href="#contact"`).

Desain memadukan prinsip **Brandlos** (direct persona, perataan data tegas, dan aksi nyata tanpa basa-basi) dengan **AW Media** (glassmorphism card surface dengan 1px subtle border glow).

---

### 2. Struktur File

```
src/components/Contact/
├── Contact.tsx          # Section wrapper (#contact) — header & split grid
├── Contact.styles.ts    # Styled-components untuk Contact section & form
├── ContactDirect.tsx    # Kolom kiri: Info kontak langsung, copy email, WhatsApp & socials
├── ContactForm.tsx      # Kolom kanan: Formulir interaktif (nama, email, layanan, pesan)
└── index.ts             # Barrel export

src/components/Footer/
├── Footer.tsx           # Footer komponen (copyright, nav links, back-to-top)
├── Footer.styles.ts     # Styled-components untuk Footer
└── index.ts             # Barrel export
```

---

### 3. Layout & Desain

```
┌────────────────────────────────────────────────────────────────────────────┐
│  SECTION HEADER                                                            │
│                                                                            │
│  Let's Connect                         (Poiret One display font)           │
│  Terbuka untuk kolaborasi proyek       (subheading, textMuted)             │
│  frontend atau diskusi teknis.                                             │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  SPLIT 2-COLUMN GRID (1.1fr 1fr desktop, 1-col mobile)                     │
│                                                                            │
│  KOLOM KIRI: DIRECT CHANNELS           KOLOM KANAN: INTERACTIVE FORM       │
│  ┌─────────────────────────────────┐   ┌─────────────────────────────────┐ │
│  │ [🟢 Available for Remote...]    │   │ Kirim Pesan Langsung            │ │
│  │                                 │   │                                 │ │
│  │ ✉️ m.rayhanoi26@gmail.com        │   │ Nama Lengkap                    │ │
│  │    [Salin Email] [Kirim Email]  │   │ [                               ] │ │
│  │                                 │   │                                 │ │
│  │ 💬 WhatsApp Langsung            │   │ Alamat Email                    │ │
│  │    +62 895 3256 03726           │   │ [                               ] │ │
│  │                                 │   │                                 │ │
│  │ 📍 Banten, Indonesia (GMT+7)    │   │ Layanan / Topik                 │ │
│  │                                 │   │ [ Web App / Frontend Dev  ▼ ]   │ │
│  │ Terhubung di Media Sosial:      │   │                                 │ │
│  │ [GitHub] [IG] [WA] [Email]      │   │ Pesan Anda                      │ │
│  │                                 │   │ [                             ] │ │
│  │                                 │   │                                 │ │
│  │                                 │   │ [ Kirim Pesan ✉️ ]             │ │
│  └─────────────────────────────────┘   └─────────────────────────────────┘ │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                    │
│  ────────────────────────────────────────────────────────────────────────  │
│  Rayhan.   © 2026 Muhamad Rayhan       Home • Projects • Skills • Certs   │
│  Crafted with React 19 & TypeScript                     [↑ Back to Top]   │
└────────────────────────────────────────────────────────────────────────────┘
```

---

### 4. Detail Komponen Contact

#### A. Kolom Kiri: Direct Channels (`ContactDirect.tsx`)
1. **Status Badge**:
   - Memakai `<AvailabilityBadge />` ("Available for Remote • Freelance • Hybrid").
2. **Email Card**:
   - Menampilkan email `m.rayhanoi26@gmail.com`.
   - Tombol **"Salin Email"** dengan feedback tooltip *"Tersalin!"* selama 2 detik via clipboard API (`navigator.clipboard.writeText`).
   - Tautan langsung `mailto:m.rayhanoi26@gmail.com`.
3. **WhatsApp Card**:
   - Menampilkan nomor WhatsApp `+62 895 3256 03726`.
   - Tautan langsung ke `https://wa.me/62895325603726` dengan target `_blank`.
4. **Location Card**:
   - Ikon pin lokasi + `"Banten, Indonesia (GMT+7)"`.
5. **Socials Row**:
   - Mengambil data dari `profileData.socials` (GitHub, Instagram, Email, WhatsApp) dengan hover background glow.

#### B. Kolom Kanan: Interactive Form (`ContactForm.tsx`)
1. **Form Fields**:
   - **Nama**: `<input type="text" required placeholder="Nama Anda" />`
   - **Email**: `<input type="email" required placeholder="email@contoh.com" />`
   - **Kategori Proyek**: `<select>` dengan opsi:
     - *Frontend Web Application (React / Vue / TypeScript)*
     - *Landing Page & Web Profile*
     - *UI/UX Implementation & Slicing*
     - *Diskusi & Konsultasi Teknis*
   - **Pesan**: `<textarea required rows={4} placeholder="Tuliskan kebutuhan proyek Anda..." />`
2. **Interaktivitas & Feedback**:
   - Dark glass input styling: `background: theme.colors.glass`, border subtle 1px.
   - Focus state: border `theme.colors.accentLime` dengan box-shadow halus (`accentGlow`).
   - Saat submit:
     - Mencegah reload (`e.preventDefault()`).
     - Menyusun link `mailto` otomatis dengan subjek dan isi pesan yang diformat rapi, lalu membuka client email pengguna.
     - Menampilkan feedback visual sukses: *"Pesan siap dikirimkan melalui aplikasi email Anda!"*.
     - Reset form.
3. **Submit Button**:
   - Solid accent lime (`#B7D894`), teks `#202734` semibold, icon `Send` dari `lucide-react`.

---

### 5. Detail Komponen Footer (`Footer.tsx`)

1. **Brand & Copyright**:
   - Brand logo **"Rayhan."** (Poiret One).
   - Copyright: `"© 2026 Muhamad Rayhan. All rights reserved."`
2. **Quick Nav Links**:
   - Navigasi cepat: `Home`, `Projects`, `Skills`, `Certificates`, `Contact`.
   - Masing-masing link memiliki smooth scroll anchor.
3. **Tech Badge & Back to Top**:
   - Label teks: `"Built with React 19, TypeScript & styled-components"`.
   - Tombol **"Back to Top"** dengan icon `ArrowUp` yang menjalankan `window.scrollTo({ top: 0, behavior: 'smooth' })`.
4. **Penempatan Reusable**:
   - Dipasang di bagian paling bawah [HomePage.tsx](file:///d:/data/rayhan/programs/project-2/portfolio-v4/src/pages/HomePage.tsx), [ProjectsPage.tsx](file:///d:/data/rayhan/programs/project-2/portfolio-v4/src/pages/ProjectsPage.tsx), dan [CertificatesPage.tsx](file:///d:/data/rayhan/programs/project-2/portfolio-v4/src/pages/CertificatesPage.tsx).

---

### 6. Entrance Animations (motion library)

| Elemen | Animasi | Trigger |
|---|---|---|
| Section Header | `fadeInUp` (y: 20 → 0) | `whileInView`, `once: true` |
| Direct Channels (Kiri) | `fadeInLeft` (x: -20 → 0) | `whileInView`, `once: true`, delay 100ms |
| Contact Form (Kanan) | `fadeInRight` (x: 20 → 0) | `whileInView`, `once: true`, delay 150ms |
| Footer | `fadeIn` (opacity: 0 → 1) | `whileInView`, `once: true` |

- Duration: `400ms`, easing: `[0.4, 0, 0.2, 1] as const`

---

### 7. Urutan Eksekusi

```
Step 1  → Buat src/components/Contact/Contact.styles.ts
Step 2  → Buat src/components/Contact/ContactDirect.tsx
Step 3  → Buat src/components/Contact/ContactForm.tsx
Step 4  → Buat src/components/Contact/Contact.tsx
Step 5  → Buat src/components/Contact/index.ts
Step 6  → Buat src/components/Footer/Footer.styles.ts
Step 7  → Buat src/components/Footer/Footer.tsx & index.ts
Step 8  → Update src/pages/HomePage.tsx — import Contact & Footer
Step 9  → Update src/pages/ProjectsPage.tsx & CertificatesPage.tsx — pasang Footer
Step 10 → Verifikasi: tsc --noEmit + npm run build
Step 11 → Git commit & push: "feat: implement contact section and footer"
```

---

### 8. Theme Tokens yang Dipakai

```
colors: darkBase, secondarySurface, glass, glassHover, glassElevated
        accentLime, accentMuted, accentGlow
        textHighlight, textSecondary, textMuted, textPrimary, textInverse
        border, borderHover, borderSubtle, borderGlass
fonts:  display (Poiret One), heading (Google Sans), body
fontSizes: xs, sm, base, md, lg, xl, '2xl', '3xl', '4xl'
fontWeights: medium, semibold, regular, bold
spacing: xs, sm, md, lg, xl, '2xl', '3xl', '4xl'
radii: sm, md, full
transitions: fast (150ms), normal (250ms)
shadows: glow, card
```
